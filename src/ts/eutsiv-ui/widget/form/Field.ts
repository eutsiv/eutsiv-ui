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

const handleFieldInline = (attrs) => {
  let c = attrs.eui
  if(c.inline) attrs.class.push('eui-inline')
  return attrs 
}


export { Field, handleFieldInline }