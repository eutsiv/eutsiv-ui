import m from 'mithril'

import {pipeAttrsHandlers} from 'eutsiv-ui'
import {handleComponentClass, handleComponentContext, handleComponentSize} from 'eutsiv-ui/Component'
import {Link} from 'Link'
import {Icon} from 'Icon'


const Breadcrumb = () => {

  return {
    view: (vn) => {

      return m('ul', pipeAttrsHandlers(handleComponentClass, handleBreadcrumbClass, handleComponentContext, handleComponentSize)(vn.attrs), [
        vn.attrs.eui.items.map((v, i, a) => {
          let text = typeof v.text == 'function' ? v.text() : v.text
          let it = (i == (a.length - 1)) ? m('span', { class: 'eui-active' }, text) : [
            m(Link, { href: v.href, disabled: v.disabled, route: v.route, eui: { context: v.context } }, text),
            m(Icon, { disabled: true, eui: { type: 'right-open' } })
          ]
          return m('li', it)
        })
      ])

    }
  }

}

const handleBreadcrumbClass = (attrs) => {
  attrs.class.push('eui-breadcrumb')
  return attrs 
}


export { Breadcrumb }