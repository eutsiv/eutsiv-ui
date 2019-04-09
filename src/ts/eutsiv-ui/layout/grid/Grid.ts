import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent} from 'eutsiv-ui/Component'


const Grid = () => {

  return {
    view: (vn) => {
      return m('div', applyAttrsModifiers(vn.attrs, applyClasses), vn.children)
    }
  }

}

const applyClasses = (attrs) => {

  attrs = applyClassesComponent(attrs)
  attrs.class.push('eui-grid')

  return attrs
  
}


export { Grid }