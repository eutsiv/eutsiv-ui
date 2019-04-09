import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent, applyConfig as applyConfigComponent} from 'eutsiv-ui/Component'


const Button = () => {

  return {
    view: (vn) => {
      let tag = ((vn.attrs.eui && vn.attrs.eui.tag == 'a') || vn.attrs.href) ? 'a' : 'button'
      return m(tag, applyAttrsModifiers(vn.attrs, applyClasses, applyConfig), vn.children)
    }
  }

}

const applyClasses = (attrs) => {

  attrs = applyClassesComponent(attrs)
  attrs.class.push('eui-button')

  return attrs
  
}


const applyConfig = (attrs) => {

  attrs = applyConfigComponent(attrs)

  let config = attrs.eui

  if(config.block) attrs.class.push('eui-block')

  if(config.compact) attrs.class.push('eui-compact')

  if(config.flat) attrs.class.push('eui-flat')

  if(config.spaced) attrs.class.push('eui-spaced')

  return attrs
  
}


export { Button }