import m from 'mithril'

import {Section} from 'resources/Section'
import {Gutter} from 'eutsiv-ui/layout/Gutter'
import {Button} from 'eutsiv-ui/widget/Button'


let View = {
  view: () => {
    return [

      m(Section, { 
        documentation: [
          m("h1", "Gutter"),
          m(Gutter, { style: 'background: #ebebeb' },
            m(Button, { eui: { context: 'primary' } }, 'Button 1')
          ),
          m(Gutter, { style: 'background: #ebebeb', eui: { fit: false } },
            m(Button, { eui: { context: 'primary' } }, 'Button 2')
          ),
          m(Gutter, { style: 'background: #ebebeb', eui: { fit: false } },
            m(Button, { eui: { context: 'primary' } }, 'Button 3')
          ),
          m(Gutter, { style: 'background: #ebebeb' },
            m(Button, { eui: { context: 'primary' } }, 'Button 4')
          )
        ],
        source: `
import {Gutter} from 'eutsiv-ui/layout/Gutter'
import {Button} from 'eutsiv-ui/widget/Button'

m(Gutter, { style: 'background: #ebebeb' },
  m(Button, { eui: { context: 'primary' } }, 'Button 1')
),
m(Gutter, { style: 'background: #ebebeb', eui: { fit: false } },
  m(Button, { eui: { context: 'primary' } }, 'Button 2')
),
m(Gutter, { style: 'background: #ebebeb', eui: { fit: false } },
  m(Button, { eui: { context: 'primary' } }, 'Button 3')
),
m(Gutter, { style: 'background: #ebebeb' },
  m(Button, { eui: { context: 'primary' } }, 'Button 4')
)

        `
      })

    ]
  }
}

export { View }