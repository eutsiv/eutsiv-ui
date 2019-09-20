import m from 'mithril'

import {pipeAttrsHandlers} from 'eutsiv-ui'
import {handleComponentClass} from 'eutsiv-ui/Component'

import {handleFieldInline} from 'eutsiv-ui/widget/form/Field'


const Label = () => {

  return {
    view: (vn) => {
      return m('label', pipeAttrsHandlers(handleComponentClass, handleFieldInline)(vn.attrs), 
        vn.children.map(ch => {
          if(typeof ch == 'string')
            return m('span', { class: 'eui-text' }, ch)
          else
            return ch
        })
      )
    }
  }

}


export { Label }