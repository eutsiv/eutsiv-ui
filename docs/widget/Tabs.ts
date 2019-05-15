import m from 'mithril'

import {Section} from 'resources/Section'
import {Tabs} from 'eutsiv-ui/widget/Tabs'


let View = {
  view: () => {
    return [

      m(Section, { 
        documentation: [
          m("h1", "Tabs"),
          m(Tabs, 
            { 
              eui: { 
                tabs: [
                  {
                    title: 'About',
                    content: m('span', 'About content')
                  },
                  {
                    title: 'Adress',
                    content: m('span', 'Adress content')
                  },
                  {
                    title: 'Permissions',
                    content: m('span', 'Permissions content')
                  },
                  {
                    title: 'Config',
                    content: m('span', 'Config content')
                  }
                ] 
              } 
            }
          )
        ],
        source: `
import {Tabs} from 'eutsiv-ui/widget/Tabs'

m(Tabs, 
  { 
    eui: { 
      tabs: [
        {
          title: 'About',
          content: m('span', 'About content')
        },
        {
          title: 'Adress',
          content: m('span', 'Adress content')
        },
        {
          title: 'Permissions',
          content: m('span', 'Permissions content')
        },
        {
          title: 'Config',
          content: m('span', 'Config content')
        }
      ] 
    } 
  }
)
        `
      })

    ]
  }
}

export { View }