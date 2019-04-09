import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent} from 'eutsiv-ui/Component'
import {Field} from 'eutsiv-ui/widget/form/Field'


const Form = () => {

  return {
    view: (vn) => {
      return m('form', applyAttrsModifiers(vn.attrs, applyClasses), vn.children)
    }
  }

}

const applyClasses = (attrs) => {

  attrs = applyClassesComponent(attrs)
  attrs.class.push('eui-form')

  return attrs
  
}


export { Form, Field }




