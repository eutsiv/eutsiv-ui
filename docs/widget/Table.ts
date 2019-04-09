import m from 'mithril'

import {Section} from 'resources/Section'
import {Table} from 'eutsiv-ui/widget/Table'
import {Sizes} from 'eutsiv-ui'

let tableData = [
  { id: 1, name: "Whale", age: 3 },
  { id: 2, name: "Wolf", age: 1 },
  { id: 3, name: "Lion", age: 2 }
]

let View = {
  view: () => {
    return [

      m(Section, { 
        documentation: [
          m("h1", "Table"),
          m(Table, {
            eui: { 
              data: tableData,
              key: 'id',
              columns: [
                { title: "Id", content: (d) => { return d.id } },
                { title: ["Name", () => { alert("Header Name clicked") }], content: (d) => { return d.name } },
                { title: "Age", content: (d) => { return d.age } }
              ]
            }
          })
        ],
        source: `
import {Table} from 'eutsiv-ui/widget/Table'

let tableData = [
{ id: 1, name: "Whale", age: 3 },
{ id: 2, name: "Wolf", age: 1 },
{ id: 3, name: "Lion", age: 2 }
]

m(Table, {
eui: { 
  data: tableData,
  key: 'id',
  columns: [
    { title: "Id", content: (d) => { return d.id } },
    { title: ["Name", () => { alert("Header Name clicked") }], content: (d) => { return d.name } },
    { title: "Age", content: (d) => { return d.age } }
  ]
}
})
        `
      })

    ]
  }
}

export { View }