import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent, applyConfig} from 'eutsiv-ui/Component'


const Notification = () => {

  return {
    view: (vn) => {
      return m('div', applyAttrsModifiers(vn.attrs, applyClasses, applyConfig), vn.children)
    }
  }

}

const applyClasses = (attrs) => {

  attrs = applyClassesComponent(attrs)
  attrs.class.push('eui-notification')

  return attrs
  
}


export { Notification }