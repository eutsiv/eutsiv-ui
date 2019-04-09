import m from 'mithril'

import {Section} from 'resources/Section'
import {Calendar} from 'eutsiv-ui/widget/calendar/Calendar'
import {Sizes} from 'eutsiv-ui'


let View = {
  view: () => {

    var now = new Date()

    return [

      m(Section, { 
        documentation: [
          m("h1", "Calendar"),
          m(Calendar, {
            month: now.getMonth(),
            year: now.getFullYear()
          })
        ],
        source: `
import {Calendar} from 'eutsiv-ui/widget/calendar/Calendar'

var now = new Date()

m(Calendar, {
  month: now.getMonth(),
  year: now.getFullYear()
})
        `
      })

    ]
  }
}

export { View }