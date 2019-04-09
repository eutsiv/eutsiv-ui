import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent, applyConfig} from 'eutsiv-ui/Component'
import {Link} from 'Link'
import {Icon} from 'Icon'


const Breadcrumb = () => {

  return {
    view: (vn) => {

      return m('ul', applyAttrsModifiers(vn.attrs, applyClasses, applyConfig), [
        vn.attrs.eui.items.map((v, i, a) => {
          let text = typeof v.text == 'function' ? v.text() : v.text
          let it = (i == (a.length - 1)) ? m('span', { class: 'eui-active' }, text) : [
            m(Link, { href: v.href, disabled: v.disabled, oncreate: v.oncreate, eui: { context: v.context } }, text),
            m(Icon, { disabled: true, eui: { type: 'right-open' } })
          ]
          return m('li', it)
        })
      ])

    }
  }

}

const applyClasses = (attrs) => {

  attrs = applyClassesComponent(attrs)
  attrs.class.push('eui-breadcrumb')

  return attrs
  
}


export { Breadcrumb }