import m from 'mithril'

import {pipeAttrsHandlers} from 'eutsiv-ui'
import {handleComponentClass} from 'eutsiv-ui/Component'


const Grid = () => {

  return {
    view: (vn) => {
      return m('div', pipeAttrsHandlers(handleComponentClass, handleGridClass)(vn.attrs), vn.children)
    }
  }

}

const handleGridClass = (attrs) => {
  attrs.class.push('eui-layout-grid')
  return attrs 
}


export { Grid }