import m from 'mithril'

import {applyAttrsModifiers} from 'eutsiv-ui'
import {applyClasses as applyClassesComponent} from 'eutsiv-ui/Component'


const buildTreeNodes = (data, indentation, open) => {

  indentation += 1

  return data.map(value => {
    return value.type == 'branch' ? 
      m(Branch, { item: value, indentation, open }) :
      m(Leaf, { item: value, indentation })
  })

}

const Branch = (vc) => {

  let open = vc.attrs.open || false
  let clicked = false

  return {
    onbeforeupdate: (vn) => {
      if(typeof vn.attrs.open == 'boolean') open = vn.attrs.open
    },
    view: (vn) => {

      let classes = 'eui-branch'

      classes += open ? ' eui-open' : ''

      return m('li', 
        {
          class: classes,
          onclick: (e) => { e.stopPropagation(); open = !open; clicked = true }
        }, 
        [ 
          m(Item, { item: vn.attrs.item, indentation: vn.attrs.indentation }),
          m('ul', buildTreeNodes(vn.attrs.item.children, vn.attrs.indentation, vn.attrs.open)) 
        ] 
      )
    }
  }
}

const Leaf = {
  view: (vn) => {
    return m('li', { class: 'eui-leaf' }, 
      m(Item, { item: vn.attrs.item, indentation: vn.attrs.indentation })
    )
  }
}

const Item = {
  view: (vn) => {

    let item = vn.attrs.item,
      text = typeof item.text == 'function' ? item.text() : item.text,
      attrs = { style: `padding-left: ${vn.attrs.indentation}em;`, href: undefined, onclick: undefined, oncreate: undefined }

    if(item.onclick) attrs.onclick = (e) => { e.stopPropagation(); e.preventDefault(); item.onclick(e) }

    if(item.oncreate) attrs.oncreate = item.oncreate

    // if attr href is undefined it is just discarded by mithril
    attrs.href = item.href

    return m('a', attrs, text)

  }
}

const Tree = () => {

  return {
    view: (vn) => {

      let params = vn.attrs.eui
      return m('ul', applyAttrsModifiers(vn.attrs, applyClasses), buildTreeNodes(params.items, 0, params.open))

    }
  }

}

const applyClasses = (attrs) => {

  attrs = applyClassesComponent(attrs)
  attrs.class.push('eui-tree')

  return attrs
  
}


export { Tree }