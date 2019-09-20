import m from 'mithril'

import {pipeAttrsHandlers} from 'eutsiv-ui'
import {handleComponentClass} from 'eutsiv-ui/Component'


const Row = () => {

  return {
    view: (vn) => {
      return m('div', pipeAttrsHandlers(handleComponentClass, handleRowClass)(vn.attrs), vn.children)
    }
  }

}

const handleRowClass = (attrs) => {
  attrs.class.push('eui-row')
  return attrs 
}


export { Row }