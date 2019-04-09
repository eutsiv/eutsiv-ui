import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesColumn, applyConfig} from 'eutsiv-ui/layout/grid/Column'


const Field = () => {

  return {
    view: (vn) => {
      return m('div', applyAttrsModifiers(vn.attrs, applyClasses, applyConfig), vn.children)
    }
  }

}

const applyClasses = (attrs) => {

  attrs = applyClassesColumn(attrs)
  attrs.class.push('eui-field')

  return attrs
  
}


export { Field }