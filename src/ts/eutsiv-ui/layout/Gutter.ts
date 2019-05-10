import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent, applyConfigFit} from 'eutsiv-ui/Component'


const Gutter = () => {

  return {
    view: (vn) => {
      return m('div', applyAttrsModifiers(vn.attrs, applyClasses, applyConfig), vn.children)
    }
  }

}

const applyClasses = (attrs) => {

  attrs = applyClassesComponent(attrs)
  attrs.class.push('eui-gutter')

  return attrs
  
}

const applyConfig = (attrs) => {

  (typeof attrs.eui.fit != 'boolean') && (attrs.eui.fit = true)

  // fit
  attrs = applyConfigFit(attrs)

  return attrs
  
}


export { Gutter }