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
              m(Column, { style: "padding:4px;border:1px solid #aaa", eui: { size: [24, 12] } }, "Size 24/12"),
              m(Column, { style: "padding:4px;border:1px solid #aaa", eui: { size: [24, 8] } }, "Size 24/8"),
              m(Column, { style: "padding:4px;border:1px solid #aaa", eui: { size: [24, 4] } }, "Size 24/4"),
            ]),
            m(Row, [
              m(Column, { style: "padding:4px;border:1px solid #aaa", eui: { size: [8, 8] } }, "Size 8/8"),
              m(Column, { style: "padding:4px;border:1px solid #aaa", eui: { size: [8, 8], offset: [8, 8] } }, "Size 8/8 Offset 8/8"),
            ]),
            m(Row, [
              m(Column, { style: "padding:4px;border:1px solid #aaa", eui: { size: [12, 8], offset: [6, 8] } }, "Size 12/8 Offset 6/8"),
            ])
          )
        ],
        source: `
import {Grid, Row, Column} from 'eutsiv-ui/layout/Grid'

m(Grid,
  m(Row, [
    m(Column, { style: "padding:4px;border:1px solid #aaa", eui: { size: [24, 12] } }, "Size 24/12"),
    m(Column, { style: "padding:4px;border:1px solid #aaa", eui: { size: [24, 8] } }, "Size 24/8"),
    m(Column, { style: "padding:4px;border:1px solid #aaa", eui: { size: [24, 4] } }, "Size 24/4"),
  ]),
  m(Row, [
    m(Column, { style: "padding:4px;border:1px solid #aaa", eui: { size: [8, 8] } }, "Size 8/8"),
    m(Column, { style: "padding:4px;border:1px solid #aaa", eui: { size: [8, 8], offset: [8, 8] } }, "Size 8/8 Offset 8/8"),
  ]),
  m(Row, [
    m(Column, { style: "padding:4px;border:1px solid #aaa", eui: { size: [12, 8], offset: [6, 8] } }, "Size 12/8 Offset 6/8"),
  ])
)

        `
      })

    ]
  }
}

export { View }