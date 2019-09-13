import m from 'mithril'

import {Section} from 'resources/Section'
import {Paging} from 'eutsiv-ui/widget/data/Paging'


let View = {
  view: () => {
    return [

      m(Section, { 
        documentation: [
          m("h1", "Paging"),
          m(Paging, {
            eui: {
              page: 3,
              rows: {
                perPage: 10,
                total: 73
              },
              buildLink: (page, rowsPerPage) => {
                return { href: "/index?path=/fi/entry/list" + "&" + m.buildQueryString({ rowsPerPage, page }) }
              }
            }
          })
        ],
        source: `
import {Paging} from 'eutsiv-ui/widget/data/Paging'

m(Paging, {
  eui: {
    page: 3,
    rows: {
      perPage: 10,
      total: 73
    },
    buildLink: (page, rowsPerPage) => {
      return { href: "/index?path=/fi/entry/list" + "&" + m.buildQueryString({ rowsPerPage, page }) }
    }
  }
})
        `
      })

    ]
  }
}

export { View }