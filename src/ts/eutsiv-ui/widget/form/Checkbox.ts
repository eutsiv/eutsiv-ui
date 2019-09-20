import m from 'mithril'

import {pipeAttrsHandlers} from 'eutsiv-ui'
import {handleComponentClass} from 'eutsiv-ui/Component'

import {handleFieldInline} from 'eutsiv-ui/widget/form/Field'


const Checkbox = () => {

  return {
    view: (vn) => {

      let attrs = pipeAttrsHandlers(handleComponentClass, handleCheckboxClass, handleFieldInline)(vn.attrs)
      let onchange = attrs.onchange
      delete attrs.onchange

      return m('label', attrs,
        m('input', { type: 'checkbox', checked: attrs.checked, disabled: attrs.disabled, name: attrs.name, value: attrs.value, onchange }),
        m('span', { class: 'eui-fake' }),
        vn.children
      )
    }
  }

}

const handleCheckboxClass = (attrs) => {
  attrs.class.push('eui-checkbox')
  return attrs 
}


export { Checkbox }