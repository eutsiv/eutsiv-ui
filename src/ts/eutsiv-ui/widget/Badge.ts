import m from 'mithril'

import {pipeAttrsHandlers} from 'eutsiv-ui'
import {handleComponentClass, handleComponentContext} from 'eutsiv-ui/Component'


const Badge = () => {

  return {
    view: (vn) => {
      return m('div', pipeAttrsHandlers(handleComponentClass, handleBadgeContainerClass)(vn.attrs), 
        vn.children,
        m('span', pipeAttrsHandlers(handleBadgeClass, handleComponentContext)(vn.attrs), vn.attrs.eui.value)
      )
    }
  }

}

const handleBadgeClass = (attrs) => {
  attrs.class.push('eui-badge')
  return attrs 
}

const handleBadgeContainerClass = (attrs) => {
  attrs.class.push('eui-badge-container')
  return attrs 
}


export { Badge }