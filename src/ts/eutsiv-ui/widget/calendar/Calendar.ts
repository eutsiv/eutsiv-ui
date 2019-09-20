import m from 'mithril'

import {pipeAttrsHandlers} from 'eutsiv-ui'
import {handleComponentClass} from 'eutsiv-ui/Component'


const numberOfWeeks = 6

const daysLabels = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
const  monthsLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const numberOfDaysInTheMonth = (y, m) => {
  return new Date(y, m + 1, 0).getDate()
}

const calculateCalendarDays = (year, month) => {
  
  let numberDaysMonth = numberOfDaysInTheMonth(year, month)
  let numberInWeekFirstDayOfMonth = new Date(year, month, 1).getDay()

  let previousMonth = month == 0 ? 11 : month - 1
  let previousYear = previousMonth == 11 ? year - 1 : year
  let numberDaysPreviousMonth = numberOfDaysInTheMonth(previousYear, previousMonth)

  let w = []
  let n = 1 // next month days date
  let c = 1 // current date
  
  return [ ...Array(numberOfWeeks * daysLabels.length).keys() ].reduce((acc, v) => {
    
    // day in the previous month
    if (v < numberInWeekFirstDayOfMonth) {
      w.push({ day: (numberDaysPreviousMonth - numberInWeekFirstDayOfMonth + v + 1), intruder: true })
    } 
    // day in the next month
    else if (c > numberDaysMonth) {
      w.push({ day: n++, intruder: true })
    } else {
      w.push({ day: c++, intruder: false })
    }
    
    // new week
    if((v + 1) % daysLabels.length == 0) {
      acc.push(w)
      w = []
    }

    return acc
    
  }, [])
}

const CalendarHeader = {
  view: () => {
    return m('div', { class: 'eui-week-days' }, daysLabels.map(v => {
      return m('div', { class: 'eui-day' }, v)
    }))
  }
}

const Calendar = ({ attrs }) => { 

  return {

    view: (vn) => {

      return m('div', pipeAttrsHandlers(handleComponentClass, handleCalendarClass)(vn.attrs), 
        m('h2', monthsLabels[vn.attrs.month] + ' ' + vn.attrs.year),
        m(CalendarHeader),
        m('div', { class: 'eui-calendar-grid' },
          calculateCalendarDays(vn.attrs.year, vn.attrs.month).map(week => {
            return m('div', { class: 'eui-calendar-row'},
              week.map(d => {
                let classes = 'eui-day'
                
                if(d.intruder) classes += ' eui-other-month'

                let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
                let title = new Date(vn.attrs.year, vn.attrs.month, d.day).toLocaleDateString('en-GB', options)

                return m('div', { class: classes, title }, d.day)
              })
            )
          })
        )
      )

    }
    
  }

}

const handleCalendarClass = (attrs) => {
  attrs.class.push('eui-calendar')
  return attrs 
}


export { Calendar }