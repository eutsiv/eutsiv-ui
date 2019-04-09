import m from 'mithril'

import {Section} from 'resources/Section'
import {Grid} from 'eutsiv-ui/layout/Grid'
import {Notification} from 'eutsiv-ui/widget/Notification'
import {Sizes} from 'eutsiv-ui'

let View = {
  view: () => {
    return [

      m(Section, { 
        documentation: [
          m("h1", "Notification"),
          m(Notification, "Default"),
          m(Notification, { eui: { context: "primary" } }, "Primary"),
          m(Notification, { eui: { context: "secondary" } }, "Secondary"),
          m(Notification, { eui: { context: "reverse" } }, "Reverse")
        ],
        source: `
import {Notification} from 'eutsiv-ui/widget/Notification'

m(Notification, "Default"),
m(Notification, { eui: { context: "primary" } }, "Primary"),
m(Notification, { eui: { context: "secondary" } }, "Secondary"),
m(Notification, { eui: { context: "reverse" } }, "Reverse")
        `
      }),

      m(Section, { 
        documentation: [
          m("h2", "Context"),
          m(Notification, { eui: { context: "danger" } }, "Danger"),
          m(Notification, { eui: { context: "warning" } }, "Warning"),
          m(Notification, { eui: { context: "caution" } }, "Caution"),
          m(Notification, { eui: { context: "notice" } }, "Notice"),
          m(Notification, { eui: { context: "safety" } }, "Safety")
        ],
        source: `
import {Notification} from 'eutsiv-ui/widget/Notification'

m(Notification, { eui: { context: "danger" } }, "Danger"),
m(Notification, { eui: { context: "warning" } }, "Warning"),
m(Notification, { eui: { context: "caution" } }, "Caution"),
m(Notification, { eui: { context: "notice" } }, "Notice"),
m(Notification, { eui: { context: "safety" } }, "Safety")
        `
      }),

      m(Section, { 
        documentation: [
          m("h2", "Size"),
          m(Notification, { eui: { size: Sizes.XS } }, "Default extra small"),
          m(Notification, { eui: { context: "primary", size: Sizes.SM } }, "Primary small"),
          m(Notification, { eui: { context: "secondary", size: Sizes.LG } }, "Secondary large"),
          m(Notification, { eui: { context: "reverse", size: Sizes.XL } }, "Reverse extra large"),
          m(Notification, { eui: { context: "danger", size: Sizes.HU } }, "Danger huge")
        ],
        source: `
import {Notification} from 'eutsiv-ui/widget/Notification'
import {Sizes} from 'eutsiv-ui'

m(Notification, { eui: { size: Sizes.XS } }, "Default extra small"),
m(Notification, { eui: { context: "primary", size: Sizes.SM } }, "Primary small"),
m(Notification, { eui: { context: "secondary", size: Sizes.LG } }, "Secondary large"),
m(Notification, { eui: { context: "reverse", size: Sizes.XL } }, "Reverse extra large"),
m(Notification, { eui: { context: "danger", size: Sizes.HU } }, "Danger huge")
        `
      })

    ]
  }
}

export { View }