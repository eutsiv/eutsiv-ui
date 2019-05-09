import m from 'mithril'

import {Section} from 'resources/Section'
import {Button} from 'eutsiv-ui/widget/Button'
import {Gutter} from 'eutsiv-ui/layout/Gutter'
import {Icon} from 'eutsiv-ui/widget/Icon'
import {Sizes} from 'eutsiv-ui'

let View = {
  view: () => {
    return [

      m(Section, { 
        documentation: [
          m("h1", "Button"),
          m(Button, "Default"),
          m(Button, { disabled: true }, "Disabled"),
          m(Button, { eui: { context: "primary" } }, "Primary"),
          m(Button, { eui: { context: "secondary" } }, "Secondary"),
          m(Button, { eui: { context: "reverse" } }, "Reverse")
        ],
        source: `
import {Button} from 'eutsiv-ui/widget/Button'

m(Button, "Default"),
m(Button, { disabled: true }, "Disabled"),
m(Button, { eui: { context: "primary" } }, "Primary"),
m(Button, { eui: { context: "secondary" } }, "Secondary"),
m(Button, { eui: { context: "reverse" } }, "Reverse")
        `
      }),

      m(Section, { 
        documentation: [
          m("h2", "Context"),
          m(Button, { eui: { context: "danger" } }, "Danger"),
          m(Button, { eui: { context: "warning" } }, "Warning"),
          m(Button, { eui: { context: "caution" } }, "Caution"),
          m(Button, { eui: { context: "notice" } }, "Notice"),
          m(Button, { eui: { context: "safety" } }, "Safety")
        ],
        source: `
import {Button} from 'eutsiv-ui/widget/Button'

m(Button, { eui: { context: "danger" } }, "Danger"),
m(Button, { eui: { context: "warning" } }, "Warning"),
m(Button, { eui: { context: "caution" } }, "Caution"),
m(Button, { eui: { context: "notice" } }, "Notice"),
m(Button, { eui: { context: "safety" } }, "Safety")
        `
      }),

      m(Section, { 
        documentation: [
          m("h2", "Flat"),
          m(Button, { eui: { flat: true } }, "Default"),
          m(Button, { disabled: true, eui: { flat: true } }, "Disabled"),
          m(Button, { eui: { context: "primary", flat: true } }, "Primary"),
          m(Button, { eui: { context: "secondary", flat: true } }, "Secondary"),
          m(Button, { eui: { context: "reverse", flat: true } }, "Reverse"),
          m(Button, { eui: { context: "danger", flat: true } }, "Danger"),
          m(Button, { eui: { context: "warning", flat: true } }, "Warning"),
          m(Button, { eui: { context: "caution", flat: true } }, "Caution"),
          m(Button, { eui: { context: "notice", flat: true } }, "Notice"),
          m(Button, { eui: { context: "safety", flat: true } }, "Safety")
        ],
        source: `
import {Button} from 'eutsiv-ui/widget/Button'

m(Button, { eui: { flat: true } }, "Default"),
m(Button, { disabled: true, eui: { flat: true } }, "Disabled"),
m(Button, { eui: { context: "primary", flat: true } }, "Primary"),
m(Button, { eui: { context: "secondary", flat: true } }, "Secondary"),
m(Button, { eui: { context: "reverse", flat: true } }, "Reverse"),
m(Button, { eui: { context: "danger", flat: true } }, "Danger"),
m(Button, { eui: { context: "warning", flat: true } }, "Warning"),
m(Button, { eui: { context: "caution", flat: true } }, "Caution"),
m(Button, { eui: { context: "notice", flat: true } }, "Notice"),
m(Button, { eui: { context: "safety", flat: true } }, "Safety")
        `
      }),

      m(Section, { 
        documentation: [
          m("h2", "Size"),
          m(Button, { eui: { size: Sizes.XS } }, "Extra small"),
          m(Button, { disabled: true, eui: { size: Sizes.SM } }, "Small"),
          m(Button, { eui: { context: "primary", size: Sizes.DE } }, "Default"),
          m(Button, { eui: { context: "secondary", size: Sizes.LG } }, "Large"),
          m(Button, { eui: { context: "reverse", size: Sizes.XL } }, "Extra large"),
          m(Button, { eui: { context: "danger", size: Sizes.HU } }, "Huge")
        ],
        source: `
import {Button} from 'eutsiv-ui/widget/Button'
import {Sizes} from 'eutsiv-ui'

m(Button, { eui: { size: Sizes.XS } }, "Extra small"),
m(Button, { disabled: true, eui: { size: Sizes.SM } }, "Small"),
m(Button, { eui: { context: "primary", size: Sizes.DE } }, "Default"),
m(Button, { eui: { context: "secondary", size: Sizes.LG } }, "Large"),
m(Button, { eui: { context: "reverse", size: Sizes.XL } }, "Extra large"),
m(Button, { eui: { context: "danger", size: Sizes.HU } }, "Huge")
        `
      }),

      m(Section, { 
        documentation: [
          m("h2", "Block"),
          m(Button, { eui: { block: true } }, "Default"),
          m(Button, { disabled: true, eui: { block: true } }, "Disabled"),
          m(Button, { eui: { context: "primary", block: true } }, "Primary"),
          m(Button, { eui: { context: "secondary", block: true } }, "Secondary"),
          m(Button, { eui: { context: "reverse", block: true } }, "Reverse")
        ],
        source: `
import {Button} from 'eutsiv-ui/widget/Button'

m(Button, { eui: { block: true } }, "Default"),
m(Button, { disabled: true, eui: { block: true } }, "Disabled"),
m(Button, { eui: { context: "primary", block: true } }, "Primary"),
m(Button, { eui: { context: "secondary", block: true } }, "Secondary"),
m(Button, { eui: { context: "reverse", block: true } }, "Reverse")
        `
      }),

      m(Section, { 
        documentation: [
          m("h2", "Compact"),
          m(Button, { eui: { compact: true } }, "Default"),
          m(Button, { disabled: true, eui: { compact: true } }, "Disabled"),
          m(Button, { eui: { context: "primary", compact: true } }, "Primary"),
          m(Button, { eui: { context: "secondary", compact: true } }, "Secondary"),
          m(Button, { eui: { context: "reverse", compact: true } }, "Reverse")
        ],
        source: `
import {Button} from 'eutsiv-ui/widget/Button'

m(Button, { eui: { compact: true } }, "Default"),
m(Button, { disabled: true, eui: { compact: true } }, "Disabled"),
m(Button, { eui: { context: "primary", compact: true } }, "Primary"),
m(Button, { eui: { context: "secondary", compact: true } }, "Secondary"),
m(Button, { eui: { context: "reverse", compact: true } }, "Reverse")
        `
      }),

      m(Section, { 
        documentation: [
          m("h2", "Spaced"),
          m('p', 'If you want spaced buttons, Gutter may be an option'),
          m(Gutter, { eui: { fit: false } },
            m(Button, { eui: { spaced: true } }, "Default")
          ),
          m(Gutter, { eui: { fit: false } },
            m(Button, { disabled: true, eui: { spaced: true } }, "Disabled")
          ),
          m(Gutter, { eui: { fit: false } },
            m(Button, { eui: { context: "primary", spaced: true } }, "Primary")
          ),
          m(Gutter, { eui: { fit: false } },
            m(Button, { eui: { context: "secondary", spaced: true } }, "Secondary")
          ),
          m(Gutter, { eui: { fit: false } },
            m(Button, { eui: { context: "reverse", spaced: true } }, "Reverse")
          )
        ],
        source: `
import {Button} from 'eutsiv-ui/widget/Button'
import {Gutter} from 'eutsiv-ui/layout/Gutter'

m(Gutter, { eui: { fit: false } },
  m(Button, { eui: { spaced: true } }, "Default")
),
m(Gutter, { eui: { fit: false } },
  m(Button, { disabled: true, eui: { spaced: true } }, "Disabled")
),
m(Gutter, { eui: { fit: false } },
  m(Button, { eui: { context: "primary", spaced: true } }, "Primary")
),
m(Gutter, { eui: { fit: false } },
  m(Button, { eui: { context: "secondary", spaced: true } }, "Secondary")
),
m(Gutter, { eui: { fit: false } },
  m(Button, { eui: { context: "reverse", spaced: true } }, "Reverse")
)
        `
      }),

      m(Section, { 
        documentation: [
          m("h2", "Icon"),
          m(Button, [ m(Icon, { eui: { type: "user" } }), m("span", "Default") ]),
          m(Button, { disabled: true }, [ m(Icon, { eui: { type: "user" } }), m("span", "Disabled") ]),
          m(Button, { eui: { context: "primary" } }, [ m(Icon, { eui: { type: "user" } }), m("span", "Primary") ]),
          m(Button, { eui: { context: "secondary" } }, [ m("span", "Secondary"), m(Icon, { eui: { type: "user" } }) ]),
          m(Button, { eui: { context: "reverse" } }, [ m(Icon, { eui: { type: "user" } }), m("span", "Reverse") ])
        ],
        source: `
import {Button} from 'eutsiv-ui/widget/Button'
import {Icon} from 'eutsiv-ui/widget/Icon'

m(Button, [ m(Icon, { eui: { type: "user" } }), m("span", "Default") ]),
m(Button, { disabled: true }, [ m(Icon, { eui: { type: "user" } }), m("span", "Disabled") ]),
m(Button, { eui: { context: "primary" } }, [ m(Icon, { eui: { type: "user" } }), m("span", "Primary") ]),
m(Button, { eui: { context: "secondary" } }, [ m("span", "Secondary"), m(Icon, { eui: { type: "user" } }) ]),
m(Button, { eui: { context: "reverse" } }, [ m(Icon, { eui: { type: "user" } }), m("span", "Reverse") ])
        `
      })

    ]
  }
}

export { View }