import m from 'mithril'

import {Section} from 'resources/Section'
import {Badge} from 'eutsiv-ui/widget/Badge'
import {Button} from 'eutsiv-ui/widget/Button'
import {Gutter} from 'eutsiv-ui/layout/Gutter'


let View = {
  view: () => {
    return [

      m(Section, { 
        documentation: [
          m("h1", "Badge"),
          m(Gutter, { eui: { fit: false } },
            m(Badge, { eui: { value: 1 } },
              m(Button, 'Default')
            )
          ),
          m(Gutter, { eui: { fit: false } },
            m(Badge, { eui: { value: 2, context: 'primary' } },
              m(Button, 'Primary')
            )
          ),
          m(Gutter, { eui: { fit: false } },
            m(Badge, { eui: { value: 3, context: 'secondary' } },
              m(Button, 'Secondary')
            )
          ),
          m(Gutter, { eui: { fit: false } },
            m(Badge, { eui: { value: 4, context: 'danger' } },
              m(Button, 'Danger')
            )
          ),
          m(Gutter, { eui: { fit: false } },
            m(Badge, { eui: { value: 5, context: 'warning' } },
              m(Button, 'Warning')
            )
          ),
          m(Gutter, { eui: { fit: false } },
            m(Badge, { eui: { value: 6, context: 'caution' } },
              m(Button, 'Caution')
            )
          ),
          m(Gutter, { eui: { fit: false } },
            m(Badge, { eui: { value: 7, context: 'notice' } },
              m(Button, 'Notice')
            )
          ),
          m(Gutter, { eui: { fit: false } },
            m(Badge, { eui: { value: 8, context: 'safety' } },
              m(Button, 'Safety')
            )
          )
        ],
        source: `
import {Badge} from 'eutsiv-ui/widget/Badge'
import {Button} from 'eutsiv-ui/widget/Button'
import {Gutter} from 'eutsiv-ui/layout/Gutter'

m(Gutter, { eui: { fit: false } },
  m(Badge, { eui: { value: 1 } },
    m(Button, 'Default')
  )
),
m(Gutter, { eui: { fit: false } },
  m(Badge, { eui: { value: 2, context: 'primary' } },
    m(Button, 'Primary')
  )
),
m(Gutter, { eui: { fit: false } },
  m(Badge, { eui: { value: 3, context: 'secondary' } },
    m(Button, 'Secondary')
  )
),
m(Gutter, { eui: { fit: false } },
  m(Badge, { eui: { value: 4, context: 'danger' } },
    m(Button, 'Danger')
  )
),
m(Gutter, { eui: { fit: false } },
  m(Badge, { eui: { value: 5, context: 'warning' } },
    m(Button, 'Warning')
  )
),
m(Gutter, { eui: { fit: false } },
  m(Badge, { eui: { value: 6, context: 'caution' } },
    m(Button, 'Caution')
  )
),
m(Gutter, { eui: { fit: false } },
  m(Badge, { eui: { value: 7, context: 'notice' } },
    m(Button, 'Notice')
  )
),
m(Gutter, { eui: { fit: false } },
  m(Badge, { eui: { value: 8, context: 'safety' } },
    m(Button, 'Safety')
  )
)
        `
      })

    ]
  }
}

export { View }