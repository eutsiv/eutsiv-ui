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
      }),

      m(Section, { 
        documentation: [
          m("h1", "Form"),
          m("div", { oncreate: (vn) => {
            vn.dom.innerHTML = `

  <form class="e e-form" method="post" action="">

    <div class="e-grid">
      <div class="e-col e-sm-12 e-lg-6 e-field">
        <label>
          Id
          <input type="text" name="id" placeholder="Id" disabled="disabled">
        </label>
      </div>
    </div>

    <div class="e-grid">
      <div class="e-col e-sm-12 e-lg-6 e-field">
        <label>
          E-mail
          <input type="text" name="email" value="test@test.com" placeholder="E-mail" readonly="readonly">
        </label>
      </div>
    </div>

    <div class="e-grid">
      <div class="e-col e-sm-12 e-lg-6 e-field">
        <label>
          Nome
          <input type="text" name="name" placeholder="Nome">
        </label>
      </div>
    </div>

    <div class="e-grid">
      <div class="e-col e-sm-12 e-lg-6 e-field">
        <label>
          Descricao
          <textarea name="description" rows="5" placeholder="Descricao"></textarea>
        </label>
      </div>
    </div>

    <div class="e-grid">
      <div class="e-col e-sm-12 e-lg-6">
        <span class="e-fieldset">Data de captura das vendas</span>
      </div>
    </div>
    <div class="e-grid">
      <div class="e-col e-sm-6 e-lg-3 e-field">
        <label>
          Nome
          <input type="text" name="name" placeholder="Nome">
        </label>
      </div>
      <div class="e-col e-sm-6 e-lg-3 e-field">
        <label>
          Nome
          <input type="text" name="name" placeholder="Nome">
        </label>
      </div>
    </div>

    <div class="e-grid">
      <div class="e-col e-sm-12 e-lg-6 e-field">
        <label class="e-inline">Choose a car:</label>
        <label class="e-radio e-inline">
          <input type="radio" name="car" value="true" checked="checked">
          <span class="e-fake"></span>Audi
        </label>
        <label class="e-radio e-inline">
          <input type="radio" name="car" value="true" checked="checked">
          <span class="e-fake"></span>BMW
        </label>
        <label class="e-radio e-inline">
          <input type="radio" name="car" value="true" checked="checked" disabled="disabled">
          <span class="e-fake"></span>Ferrari
        </label>
        <label class="e-radio e-inline">
          <input type="radio" name="car" value="true" checked="checked" disabled="disabled">
          <span class="e-fake"></span>Mercedes
        </label>
      </div>
    </div>

    <div class="e-grid">
      <div class="e-col e-sm-12 e-lg-6 e-field">
        <label>Other options:</label>
        <label class="e-checkbox">
          <input type="checkbox" name="virtual" value="true" checked="checked">
          <span class="e-fake"></span>Virtual
        </label>
        <label class="e-checkbox">
          <input type="checkbox" name="administrator" value="true" disabled="disabled">
          <span class="e-fake"></span>Administrator
        </label>
        <label class="e-checkbox">
          <input type="checkbox" name="active" value="true" checked="checked" disabled="disabled">
          <span class="e-fake"></span>Ativo
        </label>
      </div>
    </div>

    <div class="e-grid">
      <div class="e-col e-sm-12 e-lg-6 e-field">
        <button class="e e-btn">Cancelar</button>
        <button type="submit" class="e e-btn e-primary">Salvar</button>
      </div>
    </div>
  </form>


            `
          } })
        ],
        source: `

        `
      })

    ]
  }
}

export { View }