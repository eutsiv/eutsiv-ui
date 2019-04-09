import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent, applyConfig} from 'eutsiv-ui/Component'


const Calendar = (vc) => {

  const getDaysInMonth = (month, year) => {
    // 0 = last day of the previous month
    return new Date(year, month + 1, 0).getDate()
  }  
  
  let days_labels = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
      months_labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  
  let days_in_month = getDaysInMonth(vc.attrs.month, vc.attrs.year),
      first_day_date = new Date(vc.attrs.year, vc.attrs.month, 1),
      first_day_weekday = first_day_date.getDay()
  
  let prev_month = vc.attrs.month == 0 ? 11 : vc.attrs.month - 1,
      prev_year = prev_month == 11 ? vc.attrs.year - 1 : vc.attrs.year,
      prev_days = getDaysInMonth(prev_month, prev_year)

  const buildHeader = () => {
    return m('div', { class: 'eui-week-days' }, days_labels.map(v => {
      return m('div', { class: 'eui-day' }, v)
    }))
  }

  const calculateGridsDays = () => {
    
    let w = []
    let n = 1 // next month days date
    let c = 1 // current date
    
    return [...Array(6*days_labels.length).keys()].reduce((acc, v) => {
      
      if (v < new Date(vc.attrs.year, vc.attrs.month, 1).getDay()) {
        // previous month's day
        w.push({ day: (prev_days - first_day_weekday + v + 1), intruder: true })
      } else if (c > days_in_month) {
        // next month's day
        w.push({ day: n, intruder: true })
        n++;
      } else {
        // current month's day
        w.push({ day: c, intruder: false })
        c++;
      }
      
      if((v + 1) % days_labels.length == 0) {
        acc.push(w)
        w = []
      }

      return acc
      
    }, [])
  }
  

  return {

    view: (vn) => {

      return m('div', applyAttrsModifiers(vn.attrs, applyClasses, applyConfig), 
        m('h2', months_labels[vn.attrs.month] + ' ' + vn.attrs.year),
        buildHeader(),
        m('div', { class: 'eui-calendar-grid' },
          calculateGridsDays().map(w => {
            return m('div', { class: 'eui-calendar-row'},
              w.map(d => {
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

const applyClasses = (attrs) => {

  attrs = applyClassesComponent(attrs)
  attrs.class.push('eui-calendar')

  return attrs
  
}


export { Calendar }