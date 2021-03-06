import m from 'mithril'

import {pipeAttrsHandlers} from 'eutsiv-ui'
import {handleComponentClass} from 'eutsiv-ui/Component'


const Column = () => {

  return {
    view: (vn) => {
      return m('div', pipeAttrsHandlers(handleComponentClass, handleColumnClass, handleColumnSizeOffset)(vn.attrs), vn.children)
    }
  }

}

const handleColumnClass = (attrs) => {
  attrs.class.push('eui-column')
  return attrs 
}

const handleColumnSizeOffset = (attrs) => {

  let params = attrs.eui

  let s = params.size || [],
    o = params.offset || []

  let buildSizeOffsetClasses = (a, p) => {
    return a.map((e, i) => { if(e) return `${p[i]}-${e}` }).filter(e => { if(e) return true })
  }

  attrs.class.push(...buildSizeOffsetClasses(s, ['eui-sm', 'eui']))
  attrs.class.push(...buildSizeOffsetClasses(o, ['eui-sm-offset', 'eui-offset']))

  return attrs
  
}


export { Column }