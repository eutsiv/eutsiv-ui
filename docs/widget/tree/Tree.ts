import m from 'mithril'

import {Section} from 'resources/Section'
import {Tree} from 'eutsiv-ui/widget/tree/Tree'
import {Sizes} from 'eutsiv-ui'


let treeItems = [
  {
    type: "branch",
    text: "Reports",
    children: [
      {
        type: "leaf",
        text: "Sales Balance",
        onclick: () => { alert("Sales Balance") }
      },
      {
        type: "leaf",
        text: "Financial entries",
        onclick: () => { alert("Financial entries") }
      }
    ]
  },
  {
    type: "branch",
    text: "Tree Branch Level 1",
    children: [
      {
        type: "branch",
        text: "Tree Branch Level 2",
        children: [
          {
            type: "leaf",
            text: "Tree leaf",
            onclick: () => { alert("Tree leaf") }
          }
        ]
      }
    ]
  },
  {
    type: "leaf",
    text: "Exit",
    href: "/logout",
    oncreate: () => { console.log("component created") }
  }
]


let View = {
  view: () => {
    return [

      m(Section, { 
        documentation: [
          m("h1", "Tree"),
          m(Tree, {
            eui: { 
              items: treeItems,
            }
          })
        ],
        source: `
import {Tree} from 'eutsiv-ui/widget/tree/Tree'

let treeItems = [
  {
    type: "branch",
    text: "Reports",
    children: [
      {
        type: "leaf",
        text: "Sales Balance",
        onclick: () => { alert("Sales Balance") }
      },
      {
        type: "leaf",
        text: "Financial entries",
        onclick: () => { alert("Financial entries") }
      }
    ]
  },
  {
    type: "branch",
    text: "Tree Branch Level 1",
    children: [
      {
        type: "branch",
        text: "Tree Branch Level 2",
        children: [
          {
            type: "leaf",
            text: "Tree leaf",
            onclick: () => { alert("Tree leaf") }
          }
        ]
      }
    ]
  },
  {
    type: "leaf",
    text: "Exit",
    href: "/logout",
    oncreate: () => { console.log("component created") }
  }
]

m(Tree, {
  eui: { 
    items: treeItems,
  }
})
          `
      })

    ]
  }
}

export { View }