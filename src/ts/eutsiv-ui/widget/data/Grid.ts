import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent} from 'eutsiv-ui/Component'


const applySort = (d, st) => {
  if(!st.length) return false
  return st.reduce((a, e, i) => { return e.fn(a, e.order, i) }, [...d])
}

const Resizer = {
  view: (vn) => {
    return m('div', { class: 'resizer', ...vn.attrs })
  }
}

const Grid = (vni) => {
  
  let mcols = []
  let totalWidth = 0
  let leftScrolled = 0
  let sortStack = []
  let sortedData = false
  
  const adjustColumnWidth = (cvn, idx) => {
    if(!mcols[idx]) {
      mcols[idx] = { sort: {} }
      mcols[idx].dom = cvn.dom
    }
    if(!mcols[idx].width || mcols[idx].width < cvn.dom.scrollWidth) {
      let n = cvn.dom.scrollWidth + (parseInt(window.getComputedStyle(cvn.dom, null).getPropertyValue('padding-right').slice(0, -2)) * 2)
      mcols[idx].width = n
      m.redraw()
    }
  }
  
  return {
    view: (vn) => {
      
      let params = vn.attrs.eui
      let data = sortedData ? sortedData : params.data
      let height = params.height || 'auto'
      
      return m('div', { class: 'grid', style: `height: ${height}` },
        m('div', { class: 'header', style: totalWidth ? `width:${totalWidth}px` : '' },
          params.columns.map((col, idx) => {
            
            let title = '&nbsp;'
            
            if(col.title) title = col.title
            
            if(mcols[idx] && mcols[idx].sort && mcols[idx].sort.fn) {
                    
              if(mcols[idx].sort.order == 1) title += ' &#11015;'
              else if(mcols[idx].sort.order == -1) title += ' &#11014;'
              
              title += ` <small>(${mcols[idx].sort.nth + 1})</small>`
              
            }
            
            return [
              m('div', { class: 'col col-header', style: (mcols[idx] && mcols[idx].width) ? `width:${mcols[idx].width}px` : '', 
              oncreate: (cvn) => { adjustColumnWidth(cvn, idx) },
              onupdate: (cvn) => { adjustColumnWidth(cvn, idx) },
              onclick: (e) => { 
                
                mcols[idx].sort.fn = col.sort
                
                // set order
                if(!mcols[idx].sort.order)
                  mcols[idx].sort.order = 1
                else if(mcols[idx].sort.order == 1)
                  mcols[idx].sort.order *= -1
                else
                  mcols[idx].sort = {}
                
                let meta = mcols[idx].sort.order ? { fn: mcols[idx].sort.fn, order: mcols[idx].sort.order, index: idx } : {}
                
                if(e.ctrlKey) {
                  let pi = sortStack.findIndex(el => { return el.index == idx })
                  
                  // column not yet ordered
                  if(pi == -1) {
                    sortStack.unshift(meta)
                    mcols[idx].sort.nth = sortStack.length - 1
                  } 
                  // column already ordered, update or delete
                  else {
                    if(meta.fn)
                      sortStack[pi] = meta
                    else
                      sortStack.splice(pi, 1)
                  }
                  
                } else {
                  sortStack = meta.fn ? [meta] : []
                  // ctrl was not pressed, so clean all the others columns
                  mcols.forEach((el, i) => { if(i != idx) el.sort = {} })
                  mcols[idx].sort.nth = 0
                }
                
                sortedData = applySort(params.data, sortStack)
                
              } }, m.trust(title)),
              m(Resizer, { onmousedown: (e) => {
                
                let marker = document.createElement('div')
                let mouseInitPosX = e.clientX
                let colResizerInitPosX = mcols[idx].dom.offsetLeft + mcols[idx].dom.offsetWidth - leftScrolled
                
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
                  mcols[idx].width = newPosX - mcols[idx].dom.offsetLeft + leftScrolled
                  marker.style.left = `${newPosX}px`
                }
                function stopResize(e) {
                  vn.dom.removeChild(marker)

                  let tw = mcols.map(i => { return i.width }).reduce((acc, i) => { return acc + i + 5 }, 0)
                  totalWidth = tw > vn.dom.getBoundingClientRect().width ? tw : 0
                  
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
        m('div', { class: 'body', style: 'height: 100%', onscroll: (e) => {
          // only redraw if scrolling in the x axis
          e.redraw = false
          if(leftScrolled != e.target.scrollLeft) {
            vn.dom.querySelector('div.header').style.left = (e.target.scrollLeft * -1) + 'px'
            leftScrolled = e.target.scrollLeft
            m.redraw()
          }
        }, 
        oncreate: (bvn) => { 
          if(height != 'auto')
            bvn.dom.style.height = (vn.dom.getBoundingClientRect().height - vn.dom.querySelector('.header').getBoundingClientRect().height) + 'px' 
        } },

          data.map(row => {
            return m('div', { key: row[params.key], class: 'row', style: totalWidth ? `width:${totalWidth}px` : '' }, params.columns.map((col, idx) => {
              
              let content = typeof col.content === 'function' ? col.content(row) : row[col.content]
              
              return m('div', { class: 'col col-body', style: (mcols[idx] && mcols[idx].width) ? `width:${mcols[idx].width}px` : '', oncreate: (cvn) => {
                
                if(!mcols[idx]) mcols[idx] = {} 
                if(!mcols[idx].width || mcols[idx].width < cvn.dom.getBoundingClientRect().width) {
                  mcols[idx].width = cvn.dom.getBoundingClientRect().width
                  m.redraw()
                }

              } }, content)
            }))
          })

        )
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