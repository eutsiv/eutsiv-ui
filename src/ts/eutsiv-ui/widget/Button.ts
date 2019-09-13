import m from 'mithril'

import {pipeAttrsHandlers} from 'eutsiv-ui'
import {handleComponentClass, handleComponentContext, handleComponentSize} from 'eutsiv-ui/Component'


const Button = () => {

  return {
    view: (vn) => {
      return m(
        'a',
        pipeAttrsHandlers(
          handleComponentClass, 
          handleButtonClass, 
          handleComponentContext, 
          handleComponentSize, 
          handleButtonBlock, 
          handleButtonCompact, 
          handleButtonFlat
        )(vn.attrs),
        vn.children
      )
    }
  }

}

const handleButtonClass = (attrs) => {
  attrs.class.push('eui-button')
  return attrs 
}

const handleButtonBlock = (attrs) => {
  let c = attrs.eui
  if(c.block) attrs.class.push('eui-block')
  return attrs
}

const handleButtonCompact = (attrs) => {
  let c = attrs.eui
  if(c.compact) attrs.class.push('eui-compact')
  return attrs
}

const handleButtonFlat = (attrs) => {
  let c = attrs.eui
  if(c.flat) attrs.class.push('eui-flat')
  return attrs
}


export { Button }