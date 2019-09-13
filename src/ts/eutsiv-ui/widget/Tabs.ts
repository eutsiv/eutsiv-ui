import m from 'mithril'

import {pipeAttrsHandlers} from 'eutsiv-ui'
import {handleComponentClass} from 'eutsiv-ui/Component'

import {Button} from 'eutsiv-ui/widget/Button'
import {Gutter} from 'eutsiv-ui/layout/Gutter'


const Tabs = () => {

  let activeTab = 0

  return {
    view: (vn) => {
      return m('div', pipeAttrsHandlers(handleComponentClass, handleTabsClass)(vn.attrs), [
        ...vn.attrs.eui.tabs.map((tab, idx) => {
          return m(Button, { onclick: () => { activeTab = idx }, disabled: (activeTab == idx) }, 
            tab.title
          )
        }),
        m(Gutter,
          vn.attrs.eui.tabs[activeTab].content
        )
      ])
    }
  }

}

const handleTabsClass = (attrs) => {
  attrs.class.push('eui-tabs')
  return attrs
}


export { Tabs }