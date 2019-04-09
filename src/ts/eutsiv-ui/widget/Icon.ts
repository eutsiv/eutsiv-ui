import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent, applyConfig as applyConfigComponent} from 'eutsiv-ui/Component'


const Icon = () => {

  return {
    view: (vn) => {
      return m('i', applyAttrsModifiers(vn.attrs, applyClasses, applyConfig), vn.children)
    }
  }

}

const applyClasses = (attrs) => {

  attrs = applyClassesComponent(attrs)
  attrs.class.push('eui-icon')

  return attrs
  
}


const applyConfig = (attrs) => {

  attrs = applyConfigComponent(attrs)

  let config = attrs.eui

  if(config.type) attrs.class.push(`eui-icon-${config.type}`)

  if(config.spin) attrs.class.push('eui-spin')

  return attrs
  
}


export { Icon }