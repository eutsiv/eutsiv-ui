import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent} from 'eutsiv-ui/Component'


const Loading = () => {

  return {
    view: (vn) => {
      return m('div', applyAttrsModifiers(vn.attrs, applyClasses),
        [...Array(6).keys()].map(i => { return m('div', { class: `eui-ball eui-ball-${i + 1}` }) })
      )
    }
  }

}

const applyClasses = (attrs) => {

  attrs = applyClassesComponent(attrs)
  attrs.class.push('eui-loading')

  return attrs
  
}


export { Loading }