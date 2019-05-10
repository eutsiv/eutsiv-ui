import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent} from 'eutsiv-ui/Component'

import {Checkbox} from 'eutsiv-ui/widget/form/Checkbox'
import {Field} from 'eutsiv-ui/widget/form/Field'
import {Label} from 'eutsiv-ui/widget/form/Label'
import {Radio} from 'eutsiv-ui/widget/form/Radio'


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


export { Form, Checkbox, Field, Label, Radio }




