import m from 'mithril'

import {pipeAttrsHandlers} from 'eutsiv-ui'
import {handleComponentClass, handleComponentContext, handleComponentSize} from 'eutsiv-ui/Component'


const Icon = () => {

  return {
    view: (vn) => {
      return m(
        'i', 
        pipeAttrsHandlers(handleComponentClass, handleIconClass, handleComponentContext, handleComponentSize, handleIconSpin, handleIconType)(vn.attrs), 
        vn.children
      )
    }
  }

}

const handleIconClass = (attrs) => {
  attrs.class.push('eui-icon')
  return attrs 
}

const handleIconSpin = (attrs) => {
  let c = attrs.eui
  if(c.spin) attrs.class.push('eui-spin')
  return attrs
}

const handleIconType = (attrs) => {
  let c = attrs.eui
  if(c.type) attrs.class.push(`eui-icon-${c.type}`)
  return attrs
}


export { Icon }