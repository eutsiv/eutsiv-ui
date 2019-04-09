import m from 'mithril'

import {Section} from 'resources/Section'
import {Grid, Row} from 'eutsiv-ui/layout/Grid'
import {Field, Form} from 'eutsiv-ui/widget/Form'
import {Button} from 'eutsiv-ui/widget/Button'
import {Sizes} from 'eutsiv-ui'

let View = {
  view: () => {
    return [

      m(Section, { 
        documentation: [
          m("h1", "Form"),
          m(Form,
            m(Grid, [
              m(Row, [
                m(Field, 
                  m("input", { placeholder: "Id" })
                ),
                m(Field, 
                  m("input", { placeholder: "Name" })
                )
              ]),
              m(Row, [
                m(Field, 
                  m("input", { placeholder: "E-mail" })
                ),
                m(Field, 
                  m("input", { placeholder: "Password" })
                )
              ]),
              m(Row, [
                m(Field, 
                  m("input", { placeholder: "File" })
                ),
                m(Field, 
                  m(Button, { eui: { context: "danger" } }, "Test")
                )
              ])
            ])
          )
        ],
        source: `
import {Grid, Row} from 'eutsiv-ui/layout/Grid'
import {Field, Form} from 'eutsiv-ui/widget/Form'
import {Button} from 'eutsiv-ui/widget/Button'

m(Form,
  m(Grid, 
    m(Row, [
      m(Field, 
        m("input", { placeholder: "Id" })
      ),
      m(Field, 
        m(Button, { context: "danger" }, "Test")
      )
    ])
  )
)
        `
      })

    ]
  }
}

export { View }