import m from 'mithril'

import {pipeAttrsHandlers} from 'eutsiv-ui'
import {handleComponentClass} from 'eutsiv-ui/Component'


const Loading = () => {

  return {
    view: (vn) => {
      return m('div', pipeAttrsHandlers(handleComponentClass, handleLoadingClass)(vn.attrs),
        [...Array(6).keys()].map(i => { return m('div', { class: `eui-ball eui-ball-${i + 1}` }) })
      )
    }
  }

}

const handleLoadingClass = (attrs) => {
  attrs.class.push('eui-loading')
  return attrs 
}


export { Loading }