import m from 'mithril'

import {Section} from 'resources/Section'
import {Grid, Row, Column} from 'eutsiv-ui/layout/Grid'


let View = {
  view: () => {
    return [

      m(Section, { 
        documentation: [
          m("h1", "Grid"),
          m(Grid,
            m(Row, [
              m(Column, { class: 'layout-grid-test', eui: { size: [24, 24] } }, "24")
            ]),
            m(Row, [
              m(Column, { class: 'layout-grid-test', eui: { size: [12, 12] } }, "12"),
              m(Column, { class: 'layout-grid-test', eui: { size: [12, 12] } }, "12")
            ]),
            m(Row, [
              m(Column, { class: 'layout-grid-test', eui: { size: [1, 1] } }, "1"),
              m(Column, { class: 'layout-grid-test', eui: { size: [2, 2] } }, "2"),
              m(Column, { class: 'layout-grid-test', eui: { size: [3, 3] } }, "3"),
              m(Column, { class: 'layout-grid-test', eui: { size: [4, 4] } }, "4"),
              m(Column, { class: 'layout-grid-test', eui: { size: [5, 5] } }, "5"),
              m(Column, { class: 'layout-grid-test', eui: { size: [6, 6] } }, "6"),
              m(Column, { class: 'layout-grid-test', eui: { size: [3, 3] } }, "3")
            ]),
            m(Row, [
              m(Column, { class: 'layout-grid-test', eui: { size: [24, 12] } }, "24/12"),
              m(Column, { class: 'layout-grid-test', eui: { size: [24, 8] } }, "24/8"),
              m(Column, { class: 'layout-grid-test', eui: { size: [24, 4] } }, "24/4"),
            ]),
            m(Row, [
              m(Column, { class: 'layout-grid-test', eui: { size: [8, 8] } }, "8/8"),
              m(Column, { class: 'layout-grid-test', eui: { size: [8, 8], offset: [8, 8] } }, "8/8 offset 8/8"),
            ]),
            m(Row, [
              m(Column, { class: 'layout-grid-test', eui: { size: [12, 8], offset: [6, 8] } }, "12/8 offset 6/8"),
            ])
          )
        ],
        source: `
import {Grid, Row, Column} from 'eutsiv-ui/layout/Grid'

m(Grid,
  m(Row, [
    m(Column, { class: 'layout-grid-test', eui: { size: [24, 24] } }, "24")
  ]),
  m(Row, [
    m(Column, { class: 'layout-grid-test', eui: { size: [12, 12] } }, "12"),
    m(Column, { class: 'layout-grid-test', eui: { size: [12, 12] } }, "12")
  ]),
  m(Row, [
    m(Column, { class: 'layout-grid-test', eui: { size: [1, 1] } }, "1"),
    m(Column, { class: 'layout-grid-test', eui: { size: [2, 2] } }, "2"),
    m(Column, { class: 'layout-grid-test', eui: { size: [3, 3] } }, "3"),
    m(Column, { class: 'layout-grid-test', eui: { size: [4, 4] } }, "4"),
    m(Column, { class: 'layout-grid-test', eui: { size: [5, 5] } }, "5"),
    m(Column, { class: 'layout-grid-test', eui: { size: [6, 6] } }, "6"),
    m(Column, { class: 'layout-grid-test', eui: { size: [3, 3] } }, "3")
  ]),
  m(Row, [
    m(Column, { class: 'layout-grid-test', eui: { size: [24, 12] } }, "24/12"),
    m(Column, { class: 'layout-grid-test', eui: { size: [24, 8] } }, "24/8"),
    m(Column, { class: 'layout-grid-test', eui: { size: [24, 4] } }, "24/4"),
  ]),
  m(Row, [
    m(Column, { class: 'layout-grid-test', eui: { size: [8, 8] } }, "8/8"),
    m(Column, { class: 'layout-grid-test', eui: { size: [8, 8], offset: [8, 8] } }, "8/8 offset 8/8"),
  ]),
  m(Row, [
    m(Column, { class: 'layout-grid-test', eui: { size: [12, 8], offset: [6, 8] } }, "12/8 offset 6/8"),
  ])
)

        `
      })

    ]
  }
}

export { View }