import m from 'mithril'

import {pipeAttrsHandlers} from 'eutsiv-ui'
import {handleComponentClass} from 'eutsiv-ui/Component'


const Viewport = () => {

  return {
    view: (vn) => {
      return m('div', pipeAttrsHandlers(handleComponentClass, handleViewportClass)(vn.attrs), vn.children)
    }
  }

}

const handleViewportClass = (attrs) => {
  attrs.class.push('eui-viewport')
  return attrs 
}


export { Viewport }