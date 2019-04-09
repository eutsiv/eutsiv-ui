import m from 'mithril'

import {Section} from 'resources/Section'
import {Grid} from 'eutsiv-ui/layout/Grid'
import {Icon} from 'eutsiv-ui/widget/Icon'
import {Sizes} from 'eutsiv-ui'

let iconMap = [
  { type: "attach", context: "primary" },
  { type: "attention", size: Sizes.XS },
  { type: "calendar" },
  { type: "cancel", context: "secondary" },
  { type: "chart-bar" },
  { type: "clock", size: Sizes.SM },
  { type: "cog", context: "danger" },
  { type: "doc" },
  { type: "down-open" },
  { type: "ellipsis-vert" },
  { type: "folder-open", size: Sizes.LG },
  { type: "left-open", context: "warning" },
  { type: "list-bullet" },
  { type: "menu" },
  { type: "minus", size: Sizes.XL },
  { type: "off" },
  { type: "ok" },
  { type: "plus", context: "caution" },
  { type: "right-open" },
  { type: "sort-alt-down", size: Sizes.HU },
  { type: "sort-alt-up", context: "notice" },
  { type: "sort-name-down" },
  { type: "sort-name-up" },
  { type: "sort-number-down", context: "safety" },
  { type: "sort-number-up" },
  { type: "spinner", spin: true },
  { type: "table" },
  { type: "trash" },
  { type: "up-open" },
  { type: "user" }
]

let View = {
  view: () => {
    return [

      m(Section, { 
        documentation: [
          m("h1", "Icon"),
          iconMap.map((i) => {
            return m(Icon, { eui: { type: i.type, spin: i.spin } })
          })
        ],
        source: `
import {Icon} from 'eutsiv-ui/widget/Icon'

let iconMap = [
  { type: "attach", context: "primary" },
  { type: "attention", size: Sizes.XS },
  { type: "calendar" },
  { type: "cancel", context: "secondary" },
  { type: "chart-bar" },
  { type: "clock", size: Sizes.SM },
  { type: "cog", context: "danger" },
  { type: "doc" },
  { type: "down-open" },
  { type: "ellipsis-vert" },
  { type: "folder-open", size: Sizes.LG },
  { type: "left-open", context: "warning" },
  { type: "list-bullet" },
  { type: "menu" },
  { type: "minus", size: Sizes.XL },
  { type: "off" },
  { type: "ok" },
  { type: "plus", context: "caution" },
  { type: "right-open" },
  { type: "sort-alt-down", size: Sizes.HU },
  { type: "sort-alt-up", context: "notice" },
  { type: "sort-name-down" },
  { type: "sort-name-up" },
  { type: "sort-number-down", context: "safety" },
  { type: "sort-number-up" },
  { type: "spinner", spin: true },
  { type: "table" },
  { type: "trash" },
  { type: "up-open" },
  { type: "user" }
]

iconMap.map((i) => {
  return m(Icon, { eui: { type: i.type, spin: i.spin } })
})
        `
      }),

      m(Section, { 
        documentation: [
          m("h2", "Context"),
          iconMap.map((i) => {
            return m(Icon, { eui: { type: i.type, spin: i.spin, context: i.context } })
          })
        ],
        source: `
import {Icon} from 'eutsiv-ui/widget/Icon'

iconMap.map((i) => {
  return m(Icon, { eui: { type: i.type, spin: i.spin, context: i.context } })
})
        `
      }),

      m(Section, { 
        documentation: [
          m("h2", "Size"),
          iconMap.map((i) => {
            return m(Icon, { eui: { type: i.type, spin: i.spin, size: i.size } })
          })
        ],
        source: `
import {Icon} from 'eutsiv-ui/widget/Icon'
import {Sizes} from 'eutsiv-ui'

iconMap.map((i) => {
  return m(Icon, { eui: { type: i.type, spin: i.spin, size: i.size } })
})
        `
      })

    ]
  }
}

export { View }