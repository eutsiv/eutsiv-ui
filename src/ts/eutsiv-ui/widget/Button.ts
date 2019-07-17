import m from 'mithril'

import {applyAttrsModifiers, buildRouteLink} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent, applyConfig as applyConfigComponent} from 'eutsiv-ui/Component'


const Button = () => {

  return {
    view: (vn) => {
      let tag = ((vn.attrs.eui && vn.attrs.eui.tag == 'a') || vn.attrs.href || vn.attrs.route) ? 'a' : 'button'

      let attrs = applyAttrsModifiers(vn.attrs, applyClasses, applyConfig)

      
      return vn.attrs.route ? 
        buildRouteLink(tag, attrs, vn.children) :
        m(tag, attrs, vn.children)
 
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

  return attrs
  
}


export { Button }