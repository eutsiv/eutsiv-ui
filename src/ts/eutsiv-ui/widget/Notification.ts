import m from 'mithril'

import {pipeAttrsHandlers} from 'eutsiv-ui'
import {handleComponentClass, handleComponentContext, handleComponentSize} from 'eutsiv-ui/Component'


const Notification = () => {

  return {
    view: (vn) => {
      return m('div', pipeAttrsHandlers(handleComponentClass, handleNotificationClass, handleComponentContext, handleComponentSize)(vn.attrs), vn.children)
    }
  }

}

const handleNotificationClass = (attrs) => {
  attrs.class.push('eui-notification')
  return attrs
}


export { Notification }