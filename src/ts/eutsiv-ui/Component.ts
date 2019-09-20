import m from 'mithril'

import {pipeAttrsHandlers, Sizes} from 'eutsiv-ui'


const Component = () => {  

  return {
    view: (vn) => {
      return m('div', pipeAttrsHandlers(handleComponentClass, handleComponentFit)(vn.attrs), vn.children)
    }
  }

}

const handleComponentClass = (attrs) => {
  attrs.class.push('eui-component')
  return attrs
}

const handleComponentContext = (attrs) => {
  let c = attrs.eui
  if(c.context) attrs.class.push(`eui-${c.context}`)
  return attrs
}

const handleComponentFit = (attrs) => {
  let c = attrs.eui
  if(c.fit) attrs.class.push('eui-fit')
  return attrs
}

const handleComponentSize = (attrs) => {
  let c = attrs.eui
  if(c.size) attrs.style.fontSize = Sizes.fontSize[c.size]
  return attrs
}


export { Component, handleComponentClass, handleComponentContext, handleComponentFit, handleComponentSize }