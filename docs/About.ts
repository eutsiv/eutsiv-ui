import m from 'mithril'

import {Grid, Row, Column} from 'eutsiv-ui/layout/Grid'
import {Link} from 'eutsiv-ui/widget/Link'


let View = {
  view: () => {
    return m(Grid, [
      m(Row, [
        m("h1", "eutsiv UI")
      ]),
      m(Row, [
        m(Link, { href: 'https://github.com/eutsiv/eutsiv-ui' }, 'https://github.com/eutsiv/eutsiv-ui')
      ])
    ])
  }
}

export { View }