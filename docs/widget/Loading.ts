import m from 'mithril'

import {Section} from 'resources/Section'
import {Loading} from 'eutsiv-ui/widget/Loading'
import {Sizes} from 'eutsiv-ui'


let View = {
  view: () => {

    return [

      m(Section, { 
        documentation: [
          m("h1", "Loading"),
          m(Loading)
        ],
        source: `
import {Loading} from 'eutsiv-ui/widget/Loading'

m(Loading)
        `
      })

    ]
  }
}

export { View }