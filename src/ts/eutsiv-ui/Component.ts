import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'


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

  if(config.context) attrs.class.push(`eui-${config.context}`)

  if(config.size) attrs.style.push(`font-size:${config.size}`)

  return attrs
  
}


export { Component, applyClasses, applyConfig }