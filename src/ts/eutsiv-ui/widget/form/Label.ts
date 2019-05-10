import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses} from 'eutsiv-ui/Component'


const Label = () => {

  return {
    view: (vn) => {
      return m('label', applyAttrsModifiers(vn.attrs, applyClasses, applyConfig), vn.children)
    }
  }

}

const applyConfig = (attrs) => {

  let c = attrs.eui

  if(c.inline) attrs.class.push('eui-inline')

  return attrs
  
}


export { Label }