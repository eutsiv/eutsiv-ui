import m from 'mithril'

import {pipeAttrsHandlers} from 'eutsiv-ui'
import {handleComponentClass} from 'eutsiv-ui/Component'

import {Checkbox} from 'eutsiv-ui/widget/form/Checkbox'
import {Field} from 'eutsiv-ui/widget/form/Field'
import {Label} from 'eutsiv-ui/widget/form/Label'
import {Radio} from 'eutsiv-ui/widget/form/Radio'


const Form = () => {

  return {
    view: (vn) => {
      return m('form',  pipeAttrsHandlers(handleComponentClass, handleFormClass)(vn.attrs), vn.children)
    }
  }

}

const handleFormClass = (attrs) => {
  attrs.class.push('eui-form')
  return attrs 
}


export { Form, Checkbox, Field, Label, Radio }




