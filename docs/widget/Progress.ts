import m from 'mithril'

import {Section} from 'resources/Section'
import {Progress} from 'eutsiv-ui/widget/Progress'
import {Sizes} from 'eutsiv-ui'


let View = {
  view: () => {

    return [

      m(Section, { 
        documentation: [
          m("h1", "Progress"),
          m(Progress, { eui: { percentage: 35 } })
        ],
        source: `
import {Loading} from 'eutsiv-ui/widget/Progress'

m(Progress, { eui: { percentage: 35 } })
        `
      })

    ]
  }
}

export { View }