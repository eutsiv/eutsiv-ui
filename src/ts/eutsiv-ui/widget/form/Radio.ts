import m from 'mithril'

import {pipeAttrsHandlers} from 'eutsiv-ui'
import {handleComponentClass} from 'eutsiv-ui/Component'

import {handleFieldInline} from 'eutsiv-ui/widget/form/Field'


const Radio = () => {

  return {
    view: (vn) => {

      let attrs = pipeAttrsHandlers(handleComponentClass, handleRadioClass, handleFieldInline)(vn.attrs)
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

const handleRadioClass = (attrs) => {
  attrs.class.push('eui-radio')
  return attrs 
}


export { Radio }