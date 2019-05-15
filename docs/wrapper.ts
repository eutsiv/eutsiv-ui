import m from 'mithril'

import {Grid, Row, Column} from 'eutsiv-ui/layout/Grid'
import {Gutter} from 'eutsiv-ui/layout/Gutter'
import {Tree} from 'eutsiv-ui/widget/tree/Tree'
import {Viewport} from 'eutsiv-ui/Viewport'


const menuTree = [
  {
    type: 'leaf',
    text: 'About',
    onclick: () => setRoute('#!/index?path=About')
  },
  {
    type: 'leaf',
    text: 'Color',
    onclick: () => setRoute('#!/index?path=Color')
  },
  {
    type: 'branch',
    text: 'layout',
    open: true,
    children: [
      {
        type: 'leaf',
        text: 'Grid',
        onclick: () => setRoute('#!/index?path=layout/Grid')
      },
      {
        type: 'leaf',
        text: 'Gutter',
        onclick: () => setRoute('#!/index?path=layout/Gutter')
      }
      /*
      {
        type: 'leaf',
        text: 'VSpace',
        onclick: () => setRoute('#!/index?path=Color')
      }
      */
    ]
  },
  {
    type: 'branch',
    text: 'widget',
    open: true,
    children: [
      {
        type: 'branch',
        text: 'calendar',
        children: [
          {
            type: 'leaf',
            text: 'Calendar',
            onclick: () => setRoute('#!/index?path=widget/calendar/Calendar')
          }
        ]
      },
      {
        type: 'branch',
        text: 'data',
        children: [
          {
            type: 'leaf',
            text: 'Grid',
            onclick: () => setRoute('#!/index?path=widget/data/Grid')
          },
          {
            type: 'leaf',
            text: 'Paging',
            onclick: () => setRoute('#!/index?path=widget/data/Paging')
          }
        ]
      },
      {
        type: 'branch',
        text: 'tree',
        children: [
          {
            type: 'leaf',
            text: 'Tree',
            onclick: () => setRoute('#!/index?path=widget/tree/Tree')
          }
        ]
      },
      {
        type: 'leaf',
        text: 'Badge',
        onclick: () => setRoute('#!/index?path=widget/Badge')
      },
      {
        type: 'leaf',
        text: 'Breadcrumb',
        onclick: () => setRoute('#!/index?path=widget/Breadcrumb')
      },
      {
        type: 'leaf',
        text: 'Button',
        onclick: () => setRoute('#!/index?path=widget/Button')
      },
      {
        type: 'leaf',
        text: 'Form',
        onclick: () => setRoute('#!/index?path=widget/Form')
      },
      {
        type: 'leaf',
        text: 'Icon',
        onclick: () => setRoute('#!/index?path=widget/Icon')
      },
      {
        type: 'leaf',
        text: 'Link',
        onclick: () => setRoute('#!/index?path=widget/Link')
      },
      {
        type: 'leaf',
        text: 'Loading',
        onclick: () => setRoute('#!/index?path=widget/Loading')
      },
      {
        type: 'leaf',
        text: 'Notification',
        onclick: () => setRoute('#!/index?path=widget/Notification')
      },
      {
        type: 'leaf',
        text: 'Progress',
        onclick: () => setRoute('#!/index?path=widget/Progress')
      },
      {
        type: 'leaf',
        text: 'Table',
        onclick: () => setRoute('#!/index?path=widget/Table')
      },
      {
        type: 'leaf',
        text: 'Tabs',
        onclick: () => setRoute('#!/index?path=widget/Tabs')
      }
    ]
  }
]

const setRoute = (path) => {
  location.href = path
}

const wrapperContainer = {
  view: (vnode) => {
    return m(Viewport, [ 
      m(Grid, { style: 'height:100%' }, [
        m(Row, [
          m(Column, { eui: { size: [24, 5] } },
            m(Gutter,
              m("h1", "eutsiv UI"),
              m(Tree, {
                eui: {
                  items: menuTree
                }
              })
            )
          ),
          m(Column, { eui: { size: [24, 19] } },
            m(Grid, { style: "overflow: auto;" },
              m(Gutter, vnode.children)
            )
          )
        ])
      ])
    ])
  }
}

let wrapper = () => {

  let appContainer = document.getElementById("app-container")
  let mo = {
    View: {
      view: () => m('div')
    }
  }
  let allowRedraw = true

  m.route(appContainer, "/index", {
    "/index": () => {

      let args = m.route.param()
      let path = args.path

      if(!path) path = "index"
      let previousPath = path

      System.import(path).then((v) => {
        mo = v
        m.redraw()
      })

      return  {
        onbeforeupdate: () => {

          args = m.route.param()
          path = args.path

          if(!path) path = "index"

          if(previousPath != path) {

            previousPath = path

            allowRedraw = false
            System.import(path).then((v) => {
              mo = v
              allowRedraw = true
              m.redraw()
            })
          }

          return allowRedraw

        },
        view: () => {
          return m(wrapperContainer, 
            m(mo.View, args)
          )
        }
      }

    }
  })

}

export { wrapper }