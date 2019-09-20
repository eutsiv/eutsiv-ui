import m from 'mithril'

import {pipeAttrsHandlers} from 'eutsiv-ui'
import {handleComponentClass} from 'eutsiv-ui/Component'


const Table = () => {

  return {
    view: (vn) => {

      let params = vn.attrs.eui

      return m('div', pipeAttrsHandlers(handleComponentClass, handleTableClass)(vn.attrs), 
        m('table', { class: 'eui-table eui-condensed eui-striped' }, [
          m('thead', [
            m('tr', params.columns.map((f) => {
              return Array.isArray(f.title) ? m('th', { onclick: f.title[1], style: 'cursor:pointer' }, f.title[0]) : m('th', f.title)
            }))
          ]),
          m('tbody', params.data.map((r) => {

            return m('tr', { key: r[params.key] }, params.columns.map((f) => {

              let v = typeof f.content === 'function' ? f.content(r) : r[f.content]

              return m('td', v)

            }))

          }))

        ])
      )
    }
  }

}

const handleTableClass = (attrs) => {
  attrs.class.push('eui-table-container')
  return attrs 
}


export { Table }