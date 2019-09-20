import m from 'mithril'

import {pipeAttrsHandlers, Sizes} from 'eutsiv-ui'
import {handleComponentClass, handleComponentFit} from 'eutsiv-ui/Component'


const Gutter = () => {

  return {
    view: (vn) => {
      return m('div', pipeAttrsHandlers(handleComponentClass, handleGutterClass, handleGutterFit, handleGutterSize)(vn.attrs), vn.children)
    }
  }

}

const handleGutterClass = (attrs) => {
  attrs.class.push('eui-gutter')
  return attrs 
}

const handleGutterFit = (attrs) => {
  // if not set to false, true is the default
  (typeof attrs.eui.fit != 'boolean') && (attrs.eui.fit = true)
  attrs = handleComponentFit(attrs)
  return attrs
}

const handleGutterSize = (attrs) => {
  let c = attrs.eui
  if(c.size) attrs.style.padding = Sizes.unitGrid[c.size]
  return attrs
}


export { Gutter }