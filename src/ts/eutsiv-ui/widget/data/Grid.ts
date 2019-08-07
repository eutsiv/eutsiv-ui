import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent} from 'eutsiv-ui/Component'


const adjustColumnWidth = (vn) => {
  if(!vn.attrs.column.width || vn.attrs.column.width < vn.dom.scrollWidth) {
    let n = vn.dom.scrollWidth + (parseInt(window.getComputedStyle(vn.dom, null).getPropertyValue('padding-right').slice(0, -2)) * 2)
    vn.attrs.column.width = n
    m.redraw()
  }
}

const applySort = (d, st) => {
  if(!st.length) return false
  return st.reduce((a, e, i) => { return e.fn(a, e.order, i) }, [...d])
}

const GridHeader = {
  view: (vn) => {

    return m('div', { class: 'header', style: vn.attrs.gridState.totalWidth ? `width:${vn.attrs.gridState.totalWidth}px` : '' },
      vn.attrs.columns.map((col, idx) => {
        
        // creating columns state
        if(!vn.attrs.gridState.columns[idx]) vn.attrs.gridState.columns[idx] = {}

        // if sort is provided
        if(!vn.attrs.gridState.columns[idx].sort && col.sort) vn.attrs.gridState.columns[idx].sort = {
          fn: col.sort,
          index: idx,
          nth: 0,
          order: undefined
        }

        let title = '&nbsp;'
        
        if(col.title) title = col.title
        
        if(vn.attrs.gridState.columns[idx].sort && vn.attrs.gridState.columns[idx].sort.order) {
                
          if(vn.attrs.gridState.columns[idx].sort.order == 1) title += ' &#11015;'
          else if(vn.attrs.gridState.columns[idx].sort.order == -1) title += ' &#11014;'
          
          title += ` <small>(${vn.attrs.gridState.columns[idx].sort.nth + 1})</small>`
          
        }
        
        return [
          m(GridHeaderColumn, { column: vn.attrs.gridState.columns[idx], data: vn.attrs.data, gridState: vn.attrs.gridState }, m.trust(title)),
          m(Resizer, { column: vn.attrs.gridState.columns[idx], gridState: vn.attrs.gridState })
        ]
      })
    )

  }
}

const GridHeaderColumn = {
  oncreate: (vn) => { adjustColumnWidth(vn) },
  onupdate: (vn) => { adjustColumnWidth(vn) },
  view: (vn) => {
    return m('div', 
      { 
        class: 'col col-header', style: vn.attrs.column.width ? `width:${vn.attrs.column.width}px` : '',
        onclick: (e) => { 

          // this column does not have sort
          if(!vn.attrs.column.sort) {
            vn.attrs.gridState.columns.forEach((el) => { if(el.sort) el.sort.order = undefined })
            vn.attrs.gridState.sortStack = []
            //return
          }
          
          // set order
          if(!vn.attrs.column.sort.order)
            vn.attrs.column.sort.order = 1
          else if(vn.attrs.column.sort.order == 1)
            vn.attrs.column.sort.order = -1
          else
            vn.attrs.column.sort.order = undefined

          
          if(e.ctrlKey) {
            let pi = vn.attrs.gridState.sortStack.findIndex(el => { return el.index == vn.attrs.column.sort.index })
            
            // column not yet ordered
            if(pi == -1) {
              vn.attrs.gridState.sortStack.unshift(vn.attrs.column.sort)
              vn.attrs.column.sort.nth = vn.attrs.gridState.sortStack.length - 1
            } else { // column already ordered, update or delete
              if(vn.attrs.column.sort.order)
                vn.attrs.gridState.sortStack[pi] = vn.attrs.column.sort
              else
                vn.attrs.gridState.sortStack.splice(pi, 1)
            }
            
          } else {
            vn.attrs.gridState.sortStack = vn.attrs.column.sort.order ? [vn.attrs.column.sort] : []
            // ctrl was not pressed, so clean all the others columns
            vn.attrs.gridState.columns.forEach((el) => { if(el.sort && (el.sort.index != vn.attrs.column.sort.index)) el.sort.order = undefined })
            vn.attrs.column.sort.nth = 0
          }
          
          vn.attrs.gridState.sortedData = applySort(vn.attrs.data, vn.attrs.gridState.sortStack)
          
        }
        
      }, 
      vn.children
    )
  }
}

const Resizer = {
  view: (vn) => {
    return m('div', 
      { 
        class: 'resizer',
        onmousedown: (e) => {

          let marker = document.createElement('div')
          let mouseInitPosX = e.clientX
          let colResizerInitPosX = vn.attrs.column.dom.offsetLeft + vn.attrs.column.dom.offsetWidth - vn.attrs.gridState.leftScrolled
          
          marker.style.position = 'absolute'
          marker.style.top = '0'
          marker.style.left = `${colResizerInitPosX}px`
          marker.style.width = '1px'
          marker.style.height = '100%'
          marker.style.zIndex = '1'
          marker.style.background = '#e0e0e0'
          vn.attrs.gridState.dom.appendChild(marker)

          function disableSelect(event) {
              event.preventDefault()
          }

          function Resize(e) {
            let newPosX = colResizerInitPosX + (e.clientX - mouseInitPosX)
            vn.attrs.column.width = newPosX - vn.attrs.column.dom.offsetLeft + vn.attrs.gridState.leftScrolled
            marker.style.left = `${newPosX}px`
          }
          function stopResize(e) {
            vn.attrs.gridState.dom.removeChild(marker)

            let tw = vn.attrs.gridState.columns.map(i => { return i.width }).reduce((acc, i) => { return acc + i + 5 }, 0)
            vn.attrs.gridState.totalWidth = tw > vn.attrs.gridState.dom.getBoundingClientRect().width ? tw : 0
            
            m.redraw()
            window.removeEventListener('mousemove', Resize, false)
            window.removeEventListener('selectstart', disableSelect)
            window.removeEventListener('mouseup', stopResize, false)
          }

          window.addEventListener('selectstart', disableSelect)
          window.addEventListener('mousemove', Resize, false)
          window.addEventListener('mouseup', stopResize, false)

        }
      }
    )
  }
}

const GridBody = {
  oncreate: (vn) => { 
    if(vn.attrs.gridState.height != 'auto')
      vn.dom.style.height = (vn.dom.parentNode.getBoundingClientRect().height - vn.dom.parentNode.querySelector('.header').getBoundingClientRect().height - 2) + 'px' 
  },
  view: (vn) => {
    return m('div', 
      { class: 'body', style: 'height: 100%', 
        onscroll: (e) => {
          // only redraw if scrolling in the x axis
          e.redraw = false
          if(vn.attrs.gridState.leftScrolled != e.target.scrollLeft) {
            vn.dom.parentNode.querySelector('div.header').style.left = (e.target.scrollLeft * -1) + 'px'
            vn.attrs.gridState.leftScrolled = e.target.scrollLeft
            m.redraw()
          }
        }
      },
      vn.attrs.data.map(row => {
        return m(GridBodyRow, { columns: vn.attrs.columns, data: row, keyField: row[vn.attrs.keyField], gridState: vn.attrs.gridState })
      })
    )
  }
}

const GridBodyRow = {
  view: (vn) => {
    return m('div', 
      { 
        key: vn.attrs.data[vn.attrs.keyField],
        class: 'row', 
        style: vn.attrs.gridState.totalWidth ? `width:${vn.attrs.gridState.totalWidth}px` : '' 
      }, 
      vn.attrs.columns.map((col, idx) => {
      
        let content = typeof col.content == 'function' ? col.content(vn.attrs.data) : vn.attrs.data[col.content]

        return m(GridBodyColumn, { column: vn.attrs.gridState.columns[idx] }, content)

      })
    )
  }
}

const GridBodyColumn = {
  oncreate: (vn) => {

    vn.attrs.column.dom = vn.dom

    if(!vn.attrs.column.width || vn.attrs.column.width < vn.dom.getBoundingClientRect().width) {
      vn.attrs.column.width = vn.dom.getBoundingClientRect().width
      m.redraw()
    }

  },
  view: (vn) => {
    return m('div', { class: 'col col-body', style: vn.attrs.column.width ? `width:${vn.attrs.column.width}px` : '' }, vn.children)
  }
}

const Grid = () => {

  let gridState = {
    columns: [],
    dom: undefined,
    height: 'auto',
    leftScrolled: 0,
    sortedData: false,
    sortStack: [],
    totalWidth: 0
  }
  
  return {
    oncreate: (vn) => {
      gridState.dom = vn.dom
    },
    view: (vn) => {
      
      let params = vn.attrs.eui
      let data = gridState.sortedData ? gridState.sortedData : params.data
      gridState.height = params.height || 'auto'
      
      return m('div', { class: 'grid', style: `height: ${gridState.height}` },
        m(GridHeader, { columns: params.columns, data, gridState }),
        m(GridBody, { columns: params.columns, data, keyField: params.key, gridState })
      )
      
    }
  }
}

const applyClasses = (attrs) => {

  attrs = applyClassesComponent(attrs)
  attrs.class.push('eui-data-grid')

  return attrs
  
}


export { Grid }