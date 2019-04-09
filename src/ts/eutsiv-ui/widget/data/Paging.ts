import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent} from 'eutsiv-ui/Component'
import {Button} from 'eutsiv-ui/widget/Button'


const Paging = () => {

  return {
    view: (vn) => {

      let params = vn.attrs.eui

      let page = params.page || 1
      let rows = params.rows.total
      let perPage = params.rows.perPage
      let last = (rows % perPage > 0) ? (Math.floor(rows/perPage) + 1) : (rows/perPage)
      let pages = [...Array(last).keys()].map(i => i + 1)

      return m('nav', applyAttrsModifiers(vn.attrs, applyClasses), [
        m('span', { class: 'eui-status' }, 'Displaying x to x of x'),
        m('br'),
        ...pages.map(p => {
          let ba = { href: params.buildHref(p, perPage), oncreate: m.route.link, eui: { context: p == page ? 'primary' : undefined, spaced: true }}
          return m(Button, ba, p)
        })
      ])

    }
  }
}

const applyClasses = (attrs) => {

  attrs = applyClassesComponent(attrs)
  attrs.class.push('eui-paging')

  return attrs
  
}


export { Paging }
