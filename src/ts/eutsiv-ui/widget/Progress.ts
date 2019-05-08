import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent, applyConfig} from 'eutsiv-ui/Component'


const Progress = () => {

  return {
    view: (vn) => {

      return m('div', applyAttrsModifiers(vn.attrs, applyClasses, applyConfig),
        m('div', { class: 'eui-bar', style: `width:${vn.attrs.eui.percent}%` })
      )

    }
  }

}

const applyClasses = (attrs) => {

  attrs = applyClassesComponent(attrs)
  attrs.class.push('eui-progress')

  return attrs
  
}


export { Progress }