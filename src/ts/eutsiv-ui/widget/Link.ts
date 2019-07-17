import m from 'mithril'

import {applyAttrsModifiers, buildRouteLink} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent, applyConfig} from 'eutsiv-ui/Component'


const Link = () => {

  return {
    view: (vn) => {

      let attrs = applyAttrsModifiers(vn.attrs, applyClasses, applyConfig)

      return vn.attrs.route ?
        buildRouteLink('a', attrs, vn.children) :
        m('a', attrs, vn.children)
    }
  }

}

const applyClasses = (attrs) => {

  attrs = applyClassesComponent(attrs)
  attrs.class.push('eui-link')

  return attrs
  
}


export { Link }