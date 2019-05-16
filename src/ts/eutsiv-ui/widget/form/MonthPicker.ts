import m from 'mithril'

import {Button} from 'eutsiv-ui/widget/Button'
import {Icon} from 'eutsiv-ui/widget/Icon'


const increment = (d) => {
  let y = d.getFullYear()
  let m = d.getMonth()

  if(m == 11) {
    m = 0
    y++
  } else m++

  return new Date(y, m, 1)
}

const decrement = (d) => {
  let y = d.getFullYear()
  let m = d.getMonth()

  if(m == 0) {
    m = 11
    y--
  } else m--

  return new Date(y, m, 1)
}

const MonthPicker = () => {

  let month = new Date()

  return {
    view: () => {
      return [
        m('input', { style: 'display:none' }), // fix to disable mouseover on minus button when inside a form label
        m(Button, { onclick: () => { month = decrement(month) } }, m(Icon, { eui: { type: 'minus' } })),
        m('input', { value: `${month.getMonth() + 1} - ${month.getFullYear()}` }),
        m(Button, { onclick: () => { month = increment(month) } }, m(Icon, { eui: { type: 'plus' } }))
      ]
    }
  }

}


export { MonthPicker }