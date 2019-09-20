import m from 'mithril'

import {pipeAttrsHandlers} from 'eutsiv-ui'
import {handleComponentClass} from 'eutsiv-ui/Component'


const Progress = () => {

  return {
    view: (vn) => {

      return m('div', pipeAttrsHandlers(handleComponentClass, handleProgressClass)(vn.attrs),
        m('div', { class: 'eui-bar', style: `width:${vn.attrs.eui.percent}%` })
      )

    }
  }

}

const handleProgressClass = (attrs) => {
  attrs.class.push('eui-progress')
  return attrs 
}


export { Progress }