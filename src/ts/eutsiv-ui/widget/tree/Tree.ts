import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent} from 'eutsiv-ui/Component'


const buildTreeNodes = (data, indentation, treeState) => {

  indentation += 16

  return data.map(item => {
    return item.type == 'branch' ? 
      m(Branch, { item, indentation, treeState }) :
      m(Leaf, { ...item, indentation })
  })

}

const Branch = ({ attrs }) => {

  let open = false

  return {
    view: ({ attrs }) => {

      let classes = 'eui-branch'

      if(attrs.treeState.outsideUpdate) {
        if(typeof attrs.item.open == 'boolean') open = attrs.item.open
        else if(typeof attrs.treeState.open == 'boolean') open = attrs.treeState.open
      }

      classes += open ? ' eui-open' : ''

      return m('li', 
        {
          class: classes,
          onclick: (e) => { 
            e.stopPropagation() 
            open = !open
            attrs.treeState.clicked = true
          }
        }, 
        [ 
          m(Item, { ...attrs.item, indentation: attrs.indentation }),
          m('ul', buildTreeNodes(attrs.item.children, attrs.indentation, attrs.treeState)) 
        ] 
      )
    }
  }
}

const Leaf = {
  view: ({ attrs }) => {
    return m('li', { class: 'eui-leaf' }, 
      m(Item, attrs)
    )
  }
}

const Item = {
  view: ({ attrs }) => {

    let text = typeof attrs.text == 'function' ? attrs.text() : attrs.text,
      na = { style: `padding-left:${attrs.indentation}px`, href: undefined, onclick: undefined, oncreate: undefined }

    if(attrs.onclick) na.onclick = (e) => { 
      e.stopPropagation()
      e.preventDefault()
      attrs.onclick(e) 
    }

    if(attrs.oncreate) na.oncreate = attrs.oncreate

    // if attr href is undefined it is just discarded by mithril
    na.href = attrs.href

    return m('a', na, text)

  }
}

const Tree = () => {

  let treeState = {
    clicked: false,
    open: false,
    outsideUpdate: true
  }

  return {
    onbeforeupdate: () => {
      if(treeState.clicked) {
        treeState.clicked = false
        treeState.outsideUpdate = false
      } else treeState.outsideUpdate = true
    },
    view: ({ attrs }) => {

      treeState.open = attrs.eui.open

      return m('ul', applyAttrsModifiers(attrs, applyClasses), buildTreeNodes(attrs.eui.items, 0, treeState))

    }
  }

}

const applyClasses = (attrs) => {

  attrs = applyClassesComponent(attrs)
  attrs.class.push('eui-tree')

  return attrs
  
}


export { Tree }