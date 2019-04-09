import m from 'mithril'

import {Section} from 'resources/Section'
import {Grid} from 'eutsiv-ui/widget/data/Grid'
import {Sizes} from 'eutsiv-ui'

let people = [
  { id: 1, name: "John", age: 21 },
  { id: 2, name: "Sarah", age: 38 },
  { id: 3, name: "Abnes", age: 24 },
  { id: 4, name: "Stephen", age: 35 },
  { id: 5, name: "Nicholas", age: 27 },
  { id: 6, name: "Bernard", age: 27 },
  { id: 7, name: "Joe", age: 35 },
  { id: 8, name: "John", age: 42 },
  { id: 9, name: "Peter", age: 35 },
  { id: 10, name: "James", age: 33 }
]

let View = {
  view: () => {
    return [

      m(Section, { 
        documentation: [
          m("h1", "Grid"),
          m(Grid, {
            eui: {
              data: people,
              key: 'id',
              columns: [
                {
                  title: "Id",
                  content: "id",
                  sort: (d, o, nth) => { return d.sort((a, b) => { return o == 1 ? a.id - b.id : b.id - a.id }) }
                },
                {
                  title: "Name",
                  content: "name",
                  sort: (d, o, nth) => { return d.sort((a, b) => { return a.name.localeCompare(b.name) * o }) }
                },
                {
                  title: "Age",
                  content: "age",
                  sort: (d, o, nth) => { return d.sort((a, b) => { return o == 1 ? a.age - b.age : b.age - a.age }) }
                },
                {
                  content: (d) => { return m('a', { href: '' }, `View ${d.name} profile`) }
                }
              ],
              height: '250px'
            }
          })
        ],
        source: `
import {Grid} from 'eutsiv-ui/widget/data/Grid'


let people = [
  { id: 1, name: "John", age: 21 },
  { id: 2, name: "Sarah", age: 38 },
  { id: 3, name: "Abnes", age: 24 },
  { id: 4, name: "Stephen", age: 35 },
  { id: 5, name: "Nicholas", age: 27 },
  { id: 6, name: "Bernard", age: 27 },
  { id: 7, name: "Joe", age: 35 },
  { id: 8, name: "John", age: 42 },
  { id: 9, name: "Peter", age: 35 },
  { id: 10, name: "James", age: 33 }
]

m(Grid, {
  eui: {
    data: people,
    key: 'id',
    columns: [
      {
        title: "Id",
        content: "id",
        sort: (d, o, nth) => { return d.sort((a, b) => { return o == 1 ? a.id - b.id : b.id - a.id }) }
      },
      {
        title: "Name",
        content: "name",
        sort: (d, o, nth) => { return d.sort((a, b) => { return a.name.localeCompare(b.name) * o }) }
      },
      {
        title: "Age",
        content: "age",
        sort: (d, o, nth) => { return d.sort((a, b) => { return o == 1 ? a.age - b.age : b.age - a.age }) }
      },
      {
        content: (d) => { return m('a', { href: '' }, \`View \${d.name} profile\`) }
      }
    ],
    height: '250px'
  }
})
        `
      })

    ]
  }
}

export { View }