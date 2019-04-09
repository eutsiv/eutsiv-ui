import m from 'mithril'

import {Section} from 'resources/Section'
import {Paging} from 'eutsiv-ui/widget/data/Paging'
import {Sizes} from 'eutsiv-ui'


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
              buildHref: (page, rowsPerPage) => {
                return "/index?path=/fi/entry/list" + "&" + m.buildQueryString({ rowsPerPage, page })
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
    buildHref: (page, rowsPerPage) => {
      return "/index?path=/fi/entry/list" + "&" + m.buildQueryString({ rowsPerPage, page })
    }
  }
})
        `
      })

    ]
  }
}

export { View }