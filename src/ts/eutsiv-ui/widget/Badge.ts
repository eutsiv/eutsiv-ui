import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent, applyConfigContext} from 'eutsiv-ui/Component'


const Badge = () => {

  return {
    view: (vn) => {
      return m('div', applyAttrsModifiers(vn.attrs, applyClassesContainer), 
        vn.children,
        m('span', applyAttrsModifiers(vn.attrs, applyClassesBadge, applyConfigContext), vn.attrs.eui.value)
      )
    }
  }

}

const applyClassesContainer = (attrs) => {

  attrs = applyClassesComponent(attrs)
  attrs.class.push('eui-badge-container')

  return attrs
  
}

const applyClassesBadge = (attrs) => {

  attrs.class.push('eui-badge')

  return attrs
  
}


export { Badge }