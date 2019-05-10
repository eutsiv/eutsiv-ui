import m from 'mithril'

import {Column} from 'eutsiv-ui/layout/Grid'
import {Gutter} from 'eutsiv-ui/layout/Gutter'


const Field = () => {

  return {
    view: (vn) => {
      return m(Column, vn.attrs, 
        m(Gutter, vn.children)
      )
    }
  }

}

export { Field }