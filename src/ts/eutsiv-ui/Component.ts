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

  let sizes = {
    XS: '0.64em',
    SM: '0.82em',
    DE: '1.00em',
    LG: '1.32em',
    XL: '1.64em',
    HU: '2.28em'
  }

  // context
  if(config.context) attrs.class.push(`eui-${config.context}`)

  // fit
  attrs = applyConfigFit(attrs)

  // size
  if(config.size) attrs.style.fontSize = sizes[config.size]

  return attrs
  
}

const applyConfigFit = (attrs) => {
  let c = attrs.eui
  if(c.fit) attrs.class.push('eui-fit')
  return attrs
}


export { Component, applyClasses, applyConfig, applyConfigFit }