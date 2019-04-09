import m from 'mithril'

import {Section} from 'resources/Section'
import {Breadcrumb} from 'eutsiv-ui/widget/Breadcrumb'
import {Sizes} from 'eutsiv-ui'

let View = {
  view: () => {
    return [

      m(Section, { 
        documentation: [
          m("h1", "Breadcrumb"),
          m(Breadcrumb, { 
            eui: {
              items: [
                { text: "Depeche Mode" },
                { text: "Pearl Jam", disabled: true },
                { text: "Radiohead", href: "http://radiohead.com" },
                { text: "Sigur Ros" },
                { text: "The National" }
              ]
            }
          })
        ],
        source: `
import {Breadcrumb} from 'eutsiv-ui/widget/Breadcrumb'

m(Breadcrumb, { 
  eui: {
    items: [
      { text: "Depeche Mode" },
      { text: "Pearl Jam", disabled: true },
      { text: "Radiohead", href: "http://radiohead.com" },
      { text: "Sigur Ros" },
      { text: "The National" }
    ]
  }
})
        `
      }),

      m(Section, { 
        documentation: [
          m("h2", "Context"),
          m(Breadcrumb, {
            eui: { 
              items: [
                { text: "Depeche Mode", context: "danger" },
                { text: "Pearl Jam", context: "warning" },
                { text: "Radiohead", href: "http://radiohead.com", context: "caution" },
                { text: "Sigur Ros", context: "safety" },
                { text: "The National" }
              ]
            }
          })
        ],
        source: `
import {Breadcrumb} from 'eutsiv-ui/widget/Breadcrumb'

m(Breadcrumb, {
  eui: { 
    items: [
      { text: "Depeche Mode", context: "danger" },
      { text: "Pearl Jam", context: "warning" },
      { text: "Radiohead", href: "http://radiohead.com", context: "caution" },
      { text: "Sigur Ros", context: "safety" },
      { text: "The National" }
    ]
  }
})
        `
      }),

      m(Section, { 
        documentation: [
          m("h2", "Size"),
          m(Breadcrumb, {
            eui: {
              size: Sizes.HU,
              items: [
                { text: "Depeche Mode" },
                { text: "Pearl Jam", disabled: true },
                { text: "Radiohead", href: "http://radiohead.com" },
                { text: "Sigur Ros" },
                { text: "The National" }
              ]
            }
          })
        ],
        source: `
import {Breadcrumb} from 'eutsiv-ui/widget/Breadcrumb'
import {Sizes} from 'eutsiv-ui'

m(Breadcrumb, {
  eui: {
    size: Sizes.HU,
    items: [
      { text: "Depeche Mode" },
      { text: "Pearl Jam", disabled: true },
      { text: "Radiohead", href: "http://radiohead.com" },
      { text: "Sigur Ros" },
      { text: "The National" }
    ]
  }
})
        `
      })

    ]
  }
}

export { View }