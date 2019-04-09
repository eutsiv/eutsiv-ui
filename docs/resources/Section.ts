import m from 'mithril'

import {SourceView} from 'SourceView'
import {Row, Column} from 'eutsiv-ui/layout/Grid'
import {Gutter} from 'eutsiv-ui/layout/Gutter'


let Section = {
  view: (vn) => {
    return m(Row, [
      m(Column, { eui: { size: [24, 24] } },
        m(Gutter, vn.attrs.documentation)
      ),
      m(Column, { eui: { size: [24, 24] } },
        m(Gutter,
          m(SourceView, {
            content: vn.attrs.source
          })
        )
      )
    ])
  }
}

export { Section }