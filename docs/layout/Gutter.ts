import m from 'mithril'

import {Section} from 'resources/Section'
import {Gutter} from 'eutsiv-ui/layout/Gutter'
import {Button} from 'eutsiv-ui/widget/Button'
import { Sizes } from 'eutsiv-ui';


let View = {
  view: () => {
    return [

      m(Section, { 
        documentation: [
          m("h1", "Gutter"),
          m(Gutter, { style: { background: '#ebebeb' } },
            m(Button, { eui: { context: 'primary' } }, 'Button 1')
          ),
          m(Gutter, { style: { background: '#ebebeb' }, eui: { fit: false } },
            m(Button, { eui: { context: 'primary' } }, 'Button 2')
          ),
          m(Gutter, { style: { background: '#ebebeb' }, eui: { fit: false } },
            m(Button, { eui: { context: 'primary' } }, 'Button 3')
          ),
          m(Gutter, { style: { background: '#ebebeb' } },
            m(Button, { eui: { context: 'primary' } }, 'Button 4')
          )
        ],
        source: `
import {Gutter} from 'eutsiv-ui/layout/Gutter'
import {Button} from 'eutsiv-ui/widget/Button'

m(Gutter, { style: { background: '#ebebeb' } },
  m(Button, { eui: { context: 'primary' } }, 'Button 1')
),
m(Gutter, { style: { background: '#ebebeb' }, eui: { fit: false } },
  m(Button, { eui: { context: 'primary' } }, 'Button 2')
),
m(Gutter, { style: { background: '#ebebeb' }, eui: { fit: false } },
  m(Button, { eui: { context: 'primary' } }, 'Button 3')
),
m(Gutter, { style: { background: '#ebebeb' } },
  m(Button, { eui: { context: 'primary' } }, 'Button 4')
)

        `
      }),


      m(Section, { 
        documentation: [
          m("h2", "Size"),
          m(Gutter, { eui: { fit: false, size: Sizes.XS }, style: { background: '#ebebeb' } },
            m(Button, { eui: { context: 'primary' } }, 'Button 1')
          ),
          m(Gutter, { eui: { fit: false, size: Sizes.SM }, style: { background: '#ebebeb' } },
            m(Button, { eui: { context: 'primary' } }, 'Button 2')
          ),
          m(Gutter, { eui: { fit: false, size: Sizes.DE }, style: { background: '#ebebeb' } },
            m(Button, { eui: { context: 'primary' } }, 'Button 3')
          ),
          m(Gutter, { eui: { fit: false, size: Sizes.LG }, style: { background: '#ebebeb' } },
            m(Button, { eui: { context: 'primary' } }, 'Button 4')
          ),
          m(Gutter, { eui: { fit: false, size: Sizes.XL }, style: { background: '#ebebeb' } },
            m(Button, { eui: { context: 'primary' } }, 'Button 4')
          ),
          m(Gutter, { eui: { fit: false, size: Sizes.HU }, style: { background: '#ebebeb' } },
            m(Button, { eui: { context: 'primary' } }, 'Button 4')
          )
        ],
        source: `
import {Gutter} from 'eutsiv-ui/layout/Gutter'
import {Button} from 'eutsiv-ui/widget/Button'

m(Gutter, { eui: { fit: false, size: Sizes.XS }, style: { background: '#ebebeb' } },
  m(Button, { eui: { context: 'primary' } }, 'Button 1')
),
m(Gutter, { eui: { fit: false, size: Sizes.SM }, style: { background: '#ebebeb' } },
  m(Button, { eui: { context: 'primary' } }, 'Button 2')
),
m(Gutter, { eui: { fit: false, size: Sizes.DE }, style: { background: '#ebebeb' } },
  m(Button, { eui: { context: 'primary' } }, 'Button 3')
),
m(Gutter, { eui: { fit: false, size: Sizes.LG }, style: { background: '#ebebeb' } },
  m(Button, { eui: { context: 'primary' } }, 'Button 4')
),
m(Gutter, { eui: { fit: false, size: Sizes.XL }, style: { background: '#ebebeb' } },
  m(Button, { eui: { context: 'primary' } }, 'Button 4')
),
m(Gutter, { eui: { fit: false, size: Sizes.HU }, style: { background: '#ebebeb' } },
  m(Button, { eui: { context: 'primary' } }, 'Button 4')
)

        `
      })


    ]
  }
}

export { View }