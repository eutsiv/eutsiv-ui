import m from 'mithril'

import {applyAttrsModifiers, Sizes} from 'eutsiv-ui'


const Component = () => {  

  return {
    view: (vn) => {
      return m('div', applyAttrsModifiers(vn.attrs, applyClasses, applyConfig), vn.children)
    }
  }

}

const applyClasses = (attrs) => {

  attrs.class.push('eui-component')

  return attrs
  
}

const applyConfig = (attrs) => {

  let config = attrs.eui

  // context
  attrs = applyConfigContext(attrs)

  // fit
  attrs = applyConfigFit(attrs)

  // size
  if(config.size) attrs.style.fontSize = Sizes.fontSize[config.size]

  return attrs
  
}

const applyConfigContext = (attrs) => {
  let c = attrs.eui
  if(c.context) attrs.class.push(`eui-${c.context}`)
  return attrs
}

const applyConfigFit = (attrs) => {
  let c = attrs.eui
  if(c.fit) attrs.class.push('eui-fit')
  return attrs
}


export { Component, applyClasses, applyConfig, applyConfigContext, applyConfigFit }