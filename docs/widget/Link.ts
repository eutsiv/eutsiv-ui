import m from 'mithril'

import {Section} from 'resources/Section'
import {Grid} from 'eutsiv-ui/layout/Grid'
import {Link} from 'eutsiv-ui/widget/Link'
import {Sizes} from 'eutsiv-ui'

let View = {
  view: () => {
    return [

      m(Section, { 
        documentation: [
          m("h1", "Link"),
          m(Link, "Default"),
          m(Link, { disabled: true }, "Disabled"),
          m(Link, { eui: { context: "primary" } }, "Primary"),
          m(Link, { eui: { context: "secondary" } }, "Secondary"),
          m(Link, { eui: { context: "danger" } }, "Danger"),
          m(Link, { eui: { context: "warning" } }, "Warning"),
          m(Link, { eui: { context: "caution" } }, "Caution"),
          m(Link, { eui: { context: "notice" } }, "Notice"),
          m(Link, { eui: { context: "safety" } }, "Safety"),
          m(Link, { eui: { context: "black" } }, "Black"),
          m(Link, { eui: { context: "white" } }, "White")
        ],
        source: `
import {Link} from 'eutsiv-ui/widget/Link'

m(Link, "Default"),
m(Link, { disabled: true }, "Disabled"),
m(Link, { eui: { context: "primary" } }, "Primary"),
m(Link, { eui: { context: "secondary" } }, "Secondary"),
m(Link, { eui: { context: "danger" } }, "Danger"),
m(Link, { eui: { context: "warning" } }, "Warning"),
m(Link, { eui: { context: "caution" } }, "Caution"),
m(Link, { eui: { context: "notice" } }, "Notice"),
m(Link, { eui: { context: "safety" } }, "Safety"),
m(Link, { eui: { context: "black" } }, "Black"),
m(Link, { eui: { context: "white" } }, "White")
        `
      }),

      m(Section, { 
        documentation: [
          m("h2", "Size"),
          m(Link, { eui: { size: Sizes.XS } }, "Default extra small"),
          m(Link, { disabled: true, eui: { size: Sizes.SM } }, "Disabled small"),
          m(Link, { eui: { context: "primary", size: Sizes.LG } }, "Primary large"),
          m(Link, { eui: { context: "secondary", size: Sizes.XL } }, "Secondary extra large"),
          m(Link, { eui: { context: "danger", size: Sizes.HU } }, "Danger huge")
        ],
        source: `
import {Link} from 'eutsiv-ui/widget/Link'
import {Sizes} from 'eutsiv-ui'

m(Link, { eui: { size: Sizes.XS } }, "Default extra small"),
m(Link, { disabled: true, eui: { size: Sizes.SM } }, "Disabled small"),
m(Link, { eui: { context: "primary", size: Sizes.LG } }, "Primary large"),
m(Link, { eui: { context: "secondary", size: Sizes.XL } }, "Secondary extra large"),
m(Link, { eui: { context: "danger", size: Sizes.HU } }, "Danger huge")
        `
      })

    ]
  }
}

export { View }