import m from 'mithril'

import {Section} from 'resources/Section'
import {Gutter} from 'eutsiv-ui/layout/Gutter'
import {Notification} from 'eutsiv-ui/widget/Notification'
import {Sizes} from 'eutsiv-ui'

let View = {
  view: () => {
    return [

      m(Section, { 
        documentation: [
          m("h1", "Notification"),
          m(Gutter,
            m(Notification, "Default")
          ),
          m(Gutter,
            m(Notification, { eui: { context: "danger" } }, "Danger")
          ),
          m(Gutter,
            m(Notification, { eui: { context: "warning" } }, "Warning")
          ),
          m(Gutter,
            m(Notification, { eui: { context: "caution" } }, "Caution")
          ),
          m(Gutter,
            m(Notification, { eui: { context: "notice" } }, "Notice")
          ),
          m(Gutter,
            m(Notification, { eui: { context: "safety" } }, "Safety")
          ),
          m(Gutter,
            m(Notification, { eui: { context: "reverse" } }, "Reverse")
          )
        ],
        source: `
import {Notification} from 'eutsiv-ui/widget/Notification'
import {Gutter} from 'eutsiv-ui/layout/Gutter'

m(Gutter,
  m(Notification, "Default")
),
m(Gutter,
  m(Notification, { eui: { context: "danger" } }, "Danger")
),
m(Gutter,
  m(Notification, { eui: { context: "warning" } }, "Warning")
),
m(Gutter,
  m(Notification, { eui: { context: "caution" } }, "Caution")
),
m(Gutter,
  m(Notification, { eui: { context: "notice" } }, "Notice")
),
m(Gutter,
  m(Notification, { eui: { context: "safety" } }, "Safety")
),
m(Gutter,
  m(Notification, { eui: { context: "reverse" } }, "Reverse")
)
        `
      }),

      m(Section, { 
        documentation: [
          m("h2", "Size"),
          m(Gutter,
            m(Notification, { eui: { size: Sizes.XS } }, "Default extra small")
          ),
          m(Gutter,
            m(Notification, { eui: { context: "danger", size: Sizes.SM } }, "Danger small")
          ),
          m(Gutter,
            m(Notification, { eui: { context: "warning", size: Sizes.LG } }, "Warning large")
          ),
          m(Gutter,
            m(Notification, { eui: { context: "caution", size: Sizes.XL } }, "Caution extra large")
          ),
          m(Gutter,
            m(Notification, { eui: { context: "notice", size: Sizes.HU } }, "Notice huge")
          )
        ],
        source: `
import {Notification} from 'eutsiv-ui/widget/Notification'
import {Gutter} from 'eutsiv-ui/layout/Gutter'
import {Sizes} from 'eutsiv-ui'

m(Gutter,
  m(Notification, { eui: { size: Sizes.XS } }, "Default extra small")
),
m(Gutter,
  m(Notification, { eui: { context: "danger", size: Sizes.SM } }, "Danger small")
),
m(Gutter,
  m(Notification, { eui: { context: "warning", size: Sizes.LG } }, "Warning large")
),
m(Gutter,
  m(Notification, { eui: { context: "caution", size: Sizes.XL } }, "Caution extra large")
),
m(Gutter,
  m(Notification, { eui: { context: "notice", size: Sizes.HU } }, "Notice huge")
)
        `
      })

    ]
  }
}

export { View }