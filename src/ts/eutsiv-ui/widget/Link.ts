import m from 'mithril'

import {pipeAttrsHandlers} from 'eutsiv-ui'
import {handleComponentClass, handleComponentContext, handleComponentSize} from 'eutsiv-ui/Component'


const Link = () => {

  return {
    view: (vn) => {
      return m('a', pipeAttrsHandlers(handleComponentClass, handleLinkClass, handleComponentContext, handleComponentSize)(vn.attrs), vn.children)
    }
  }

}

const handleLinkClass = (attrs) => {
  attrs.class.push('eui-link')
  return attrs 
}


export { Link }