import m from 'mithril'

import {pipeAttrsHandlers, Sizes} from 'eutsiv-ui'
import {handleComponentClass} from 'eutsiv-ui/Component'

import {Button} from 'eutsiv-ui/widget/Button'
import {Gutter} from 'eutsiv-ui/layout/Gutter'


const Paging = () => {

  return {
    view: (vn) => {

      let params = vn.attrs.eui

      let page = params.page || 1
      let rows = params.rows.total
      let perPage = params.rows.perPage
      let last = (rows % perPage > 0) ? (Math.floor(rows/perPage) + 1) : (rows/perPage)
      let pages = [...Array(last).keys()].map(i => i + 1)
      let to = page*perPage

      // ensure to is not greater then total rows
      if(to > rows) to = rows

      return m('nav', pipeAttrsHandlers(handleComponentClass, handlePagingClass)(vn.attrs), [
        m(Gutter, { eui: { size: Sizes.SM }},
          m('span', { class: 'eui-status' }, `Displaying ${((page-1)*perPage)+1} to ${to} of ${rows}`),
        ),
        ...pages.map(p => {
          let ba = { ...params.buildLink(p, perPage), eui: { context: p == page ? 'primary' : undefined, spaced: true }};
          return m(Gutter, { eui: { fit: false, size: Sizes.XS }},
            m(Button, ba, p)
          )
        })
      ])

    }
  }
}

const handlePagingClass = (attrs) => {
  attrs.class.push('eui-paging')
  return attrs
}


export { Paging }
