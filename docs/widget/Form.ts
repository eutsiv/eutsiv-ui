import m from 'mithril'

import {Section} from 'resources/Section'
import {Grid, Row} from 'eutsiv-ui/layout/Grid'
import {Gutter} from 'eutsiv-ui/layout/Gutter'
import {Checkbox, Field, Form, Label, Radio} from 'eutsiv-ui/widget/Form'
import {Button} from 'eutsiv-ui/widget/Button'
import {Icon} from 'eutsiv-ui/widget/Icon'
import {MonthPicker} from 'eutsiv-ui/widget/form/MonthPicker'
import {Select} from 'eutsiv-ui/components/form/Select'


let View = {
  view: () => {
    return [

      m(Section, { 
        documentation: [
          m("h1", "Form"),
          m(Form,
            m(Grid, [
              m(Row,
                m(Field, { eui: { size: [24, 12] }},
                  m(Label,
                    'Id',
                    m("input", { type: "text", name: "id", placeholder: "Id", disabled: "disabled" })
                  )
                )
              ),
              m(Row,
                m(Field, { eui: { size: [24, 12] }},
                  m(Label,
                    'E-mail',
                    m("input", { type: "text", name: "email", value: "test@test.com", placeholder: "E-mail", readonly: "readonly" })
                  )
                )
              ),
              m(Row,
                m(Field, { eui: { size: [24, 12] }},
                  m(Label,
                    'Name',
                    m("input", { type: "text", name: "name", placeholder: "Name" })
                  )
                )
              ),
              m(Row,
                m(Field, { eui: { size: [24, 12] }},
                  m(Label,
                    'Description',
                    m('textarea', {  name: "description", placeholder: "Description" })
                  )
                )
              ),
              m(Row,
                m(Field, { eui: { size: [24, 12] }},
                  m('span', { class: 'eui-fieldset' }, 'Some fieldset description')
                )
              ),
              m(Row,
                m(Field, { eui: { size: [24, 12] }},
                  m(Label,
                    'Date',
                    m("input", { type: "text", name: "date", placeholder: "Date" }),
                    m(Button, { eui: { context: 'notice' }}, m(Icon, { eui: { type: "calendar" } }))
                  )
                )
              ),
              m(Row,
                m(Field, { eui: { size: [24, 12] }},
                  m(Label, { eui: { inline: true }}, 'Choose a car:'),
                  m(Radio, { eui: { inline: true }, name: 'car', value: 'audi' }, 'Audi'),
                  m(Radio, { eui: { inline: true }, name: 'car', value: 'bmw' }, 'BMW'),
                  m(Radio, { eui: { inline: true }, name: 'car', value: 'porsche', checked: 'checked', disabled: 'disabled' }, 'Porsche'),
                  m(Radio, { eui: { inline: true }, name: 'car', value: 'mercedes' }, 'Mercedes')
                )
              ),
              m(Row,
                m(Field, { eui: { size: [24, 12] }},
                  m(Label, 'Other options:'),
                  m(Checkbox, { name: 'virtual', value: 'true' }, 'Virtual'),
                  m(Checkbox, { name: 'administrator', value: 'true', disabled: 'disabled' }, 'Administrator'),
                  m(Checkbox, { name: 'active', value: 'true', checked: 'checked', disabled: 'disabled' }, 'Active')
                )
              ),
              m(Row,
                m(Gutter, { eui: { fit: false }},
                  m(Button, 'Cancel')
                ),
                m(Gutter, { eui: { fit: false }},
                  m(Button, { eui: { context: 'safety' } }, 'Save')
                )
              )
            ])
          )
        ],
        source: `
import {Grid, Row} from 'eutsiv-ui/layout/Grid'
import {Gutter} from 'eutsiv-ui/layout/Gutter'
import {Checkbox, Field, Form, Label, Radio} from 'eutsiv-ui/widget/Form'
import {Button} from 'eutsiv-ui/widget/Button'

m(Form,
  m(Grid, [
    m(Row,
      m(Field, { eui: { size: [24, 12] }},
        m(Label,
          'Id',
          m("input", { type: "text", name: "id", placeholder: "Id", disabled: "disabled" })
        )
      )
    ),
    m(Row,
      m(Field, { eui: { size: [24, 12] }},
        m(Label,
          'E-mail',
          m("input", { type: "text", name: "email", value: "test@test.com", placeholder: "E-mail", readonly: "readonly" })
        )
      )
    ),
    m(Row,
      m(Field, { eui: { size: [24, 12] }},
        m(Label,
          'Name',
          m("input", { type: "text", name: "name", placeholder: "Name" })
        )
      )
    ),
    m(Row,
      m(Field, { eui: { size: [24, 12] }},
        m(Label,
          'Description',
          m('textarea', {  name: "description", placeholder: "Description" })
        )
      )
    ),
    m(Row,
      m(Field, { eui: { size: [24, 12] }},
        m('span', { class: 'eui-fieldset' }, 'Some fieldset description')
      )
    ),
    m(Row,
      m(Field, { eui: { size: [24, 12] }},
        m(Label, { eui: { inline: true }}, 'Choose a car:'),
        m(Radio, { eui: { inline: true }, name: 'car', value: 'audi' }, 'Audi'),
        m(Radio, { eui: { inline: true }, name: 'car', value: 'bmw' }, 'BMW'),
        m(Radio, { eui: { inline: true }, name: 'car', value: 'porsche', checked: 'checked', disabled: 'disabled' }, 'Porsche'),
        m(Radio, { eui: { inline: true }, name: 'car', value: 'mercedes' }, 'Mercedes')
      )
    ),
    m(Row,
      m(Field, { eui: { size: [24, 12] }},
        m(Label, 'Other options:'),
        m(Checkbox, { name: 'virtual', value: 'true' }, 'Virtual'),
        m(Checkbox, { name: 'administrator', value: 'true', disabled: 'disabled' }, 'Administrator'),
        m(Checkbox, { name: 'active', value: 'true', checked: 'checked', disabled: 'disabled' }, 'Active')
      )
    ),
    m(Row,
      m(Gutter, { eui: { fit: false }},
        m(Button, 'Cancel')
      ),
      m(Gutter, { eui: { fit: false }},
        m(Button, { eui: { context: 'safety' } }, 'Save')
      )
    )
  ])
)
        `
      }),


      m(Section, { 
        documentation: [
          m("h1", "Month Picker"),
          m(Form,
            m(Grid, [
              m(Row,
                m(Field, { eui: { size: [24, 12] }},
                  m(Label,
                    'Date',
                    m(MonthPicker)
                  )
                )
              ),
              m(Row,
                m(Field, { eui: { size: [24, 12] }},
                  m(MonthPicker)
                )
              )
            ])
          )
        ],
        source: `

        `
      }),


      m(Section, { 
        documentation: [
          m("h1", "Select"),
          m(Form,
            m(Grid, [
              m(Row,
                m(Field, { eui: { size: [24, 12] }},
                  m(Label,
                    'Select',
                    m(Select, { onSelect: () => { console.log('test') }, remote: { url: "https://api.github.com/search/repositories?term=sel&_type=query&q=sel", processResponse: function(d) { return d.items.map((i) => { return { id: i.id, text: i.name } }) } } })
                  )
                )
              )
            ])
          )
        ],
        source: `

        `
      })


    ]
  }
}

export { View }