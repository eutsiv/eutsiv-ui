import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent} from 'eutsiv-ui/Component'


const Column = () => {

  return {
    view: (vn) => {
      return m('div', applyAttrsModifiers(vn.attrs, applyClasses, applyConfig), vn.children)
    }
  }

}

const applyClasses = (attrs) => {

  attrs = applyClassesComponent(attrs)
  attrs.class.push('eui-column')

  return attrs
  
}

const applyConfig = (attrs) => {

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


export { applyClasses, applyConfig, Column }