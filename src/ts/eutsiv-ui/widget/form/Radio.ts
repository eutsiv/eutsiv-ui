import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent} from 'eutsiv-ui/Component'


const Radio = () => {

  return {
    view: (vn) => {

      let attrs = applyAttrsModifiers(vn.attrs, applyClasses, applyConfig)
      let onchange = attrs.onchange
      delete attrs.onchange

      return m('label', attrs,
        m('input', { type: 'radio', checked: attrs.checked, disabled: attrs.disabled, name: attrs.name, value: attrs.value, onchange }),
        m('span', { class: 'eui-fake' }),
        vn.children
      )
    }
  }

}

const applyClasses = (attrs) => {

  attrs = applyClassesComponent(attrs)
  attrs.class.push('eui-radio')

  return attrs
  
}

const applyConfig = (attrs) => {

  let c = attrs.eui

  if(c.inline) attrs.class.push('eui-inline')

  return attrs
  
}


export { Radio }