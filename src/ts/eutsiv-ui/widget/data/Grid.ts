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
            return
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
            } 
            // column already ordered, update or delete
            else {
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
    return m('div', { class: 'resizer', ...vn.attrs })
  }
}

const GridBody = {
  oncreate: (vn) => { 
    if(vn.attrs.gridState.height != 'auto')
      vn.dom.style.height = (vn.dom.parentNode.getBoundingClientRect().height - vn.dom.parentNode.querySelector('.header').getBoundingClientRect().height) + 'px' 
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
        return m(GridBodyRow, { columns: vn.attrs.columns, data: row, key: row[vn.attrs.key], gridState: vn.attrs.gridState })
      })
    )
  }
}

const GridBodyRow = {
  view: (vn) => {
    return m('div', 
      { 
        key: vn.attrs.data[vn.attrs.key],
        class: 'row', 
        style: vn.attrs.gridState.totalWidth ? `width:${vn.attrs.gridState.totalWidth}px` : '' 
      }, 
      vn.attrs.columns.map((col, idx) => {
      
        let content = typeof col.content === 'function' ? col.content(vn.attrs.data) : vn.attrs.data[col.content]

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
  
  let mcols = []

  let gridState = {
    columns: mcols,
    height: 'auto',
    leftScrolled: 0,
    sortedData: false,
    sortStack: [],
    totalWidth: 0
  }
  
  return {
    view: (vn) => {
      
      let params = vn.attrs.eui
      let data = gridState.sortedData ? gridState.sortedData : params.data
      gridState.height = params.height || 'auto'
      
      return m('div', { class: 'grid', style: `height: ${gridState.height}` },
        m('div', { class: 'header', style: gridState.totalWidth ? `width:${gridState.totalWidth}px` : '' },
          params.columns.map((col, idx) => {
            
            // creating columns state
            if(!gridState.columns[idx]) gridState.columns[idx] = {}

            // if sort is provided
            if(!gridState.columns[idx].sort && col.sort) gridState.columns[idx].sort = {
              fn: col.sort,
              index: idx,
              nth: 0,
              order: undefined
            }

            let title = '&nbsp;'
            
            if(col.title) title = col.title
            
            if(gridState.columns[idx].sort && gridState.columns[idx].sort.order) {
                    
              if(gridState.columns[idx].sort.order == 1) title += ' &#11015;'
              else if(gridState.columns[idx].sort.order == -1) title += ' &#11014;'
              
              title += ` <small>(${gridState.columns[idx].sort.nth + 1})</small>`
              
            }
            
            return [
              m(GridHeaderColumn, { column: mcols[idx], data: params.data, gridState }, m.trust(title)),
              m(Resizer, { onmousedown: (e) => {
                
                let marker = document.createElement('div')
                let mouseInitPosX = e.clientX
                let colResizerInitPosX = mcols[idx].dom.offsetLeft + mcols[idx].dom.offsetWidth - gridState.leftScrolled
                
                marker.style.position = 'absolute'
                marker.style.top = '0'
                marker.style.left = `${colResizerInitPosX}px`
                marker.style.width = '1px'
                marker.style.height = '100%'
                marker.style.zIndex = '1'
                marker.style.background = '#e0e0e0'
                vn.dom.appendChild(marker)

                function disableSelect(event) {
                    event.preventDefault()
                }

                function Resize(e) {
                  let newPosX = colResizerInitPosX + (e.clientX - mouseInitPosX)
                  mcols[idx].width = newPosX - mcols[idx].dom.offsetLeft + gridState.leftScrolled
                  marker.style.left = `${newPosX}px`
                }
                function stopResize(e) {
                  vn.dom.removeChild(marker)

                  let tw = mcols.map(i => { return i.width }).reduce((acc, i) => { return acc + i + 5 }, 0)
                  gridState.totalWidth = tw > vn.dom.getBoundingClientRect().width ? tw : 0
                  
                  m.redraw()
                  window.removeEventListener('mousemove', Resize, false)
                  window.removeEventListener('selectstart', disableSelect)
                  window.removeEventListener('mouseup', stopResize, false)
                }

                window.addEventListener('selectstart', disableSelect)
                window.addEventListener('mousemove', Resize, false)
                window.addEventListener('mouseup', stopResize, false)

              } })
            ]
          })
        ),
        m(GridBody, { columns: params.columns, data, key: params.key, gridState })
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