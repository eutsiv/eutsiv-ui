import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesColumn, applyConfig} from 'eutsiv-ui/layout/grid/Column'


const Field = () => {

  return {
    view: ({ attrs, children }) => {
      return m('div', applyAttrsModifiers(attrs, applyClasses, applyConfig), children)
    }
  }

}

const applyClasses = (attrs) => {

  attrs = applyClassesColumn(attrs)
  attrs.class.push('eui-field')

  return attrs
  
}


export { Field }