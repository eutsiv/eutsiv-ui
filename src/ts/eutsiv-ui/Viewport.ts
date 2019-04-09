import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent} from 'eutsiv-ui/Component'

const Viewport = () => {

  return {
    view: (vn) => {
      return m('div', applyAttrsModifiers(vn.attrs, applyClasses), vn.children)
    }
  }

}

const applyClasses = (attrs) => {

  attrs = applyClassesComponent(attrs)
  attrs.class.push('eui-viewport')

  return attrs
  
}


export { Viewport }