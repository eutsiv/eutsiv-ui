import m from 'mithril'

import {Grid, Row, Column} from 'eutsiv-ui/layout/Grid'


const colorMap = {
  Primary: {
    "light-3": "dbe5f5",
    "light-2": "89acdf",
    "light-1": "3872c8",
    "base": "214478",
    "dark-1": "19335a",
    "dark-2": "11223c"
  },
  Secondary: {
    "light-3": "e9f6e0",
    "light-2": "b7e39a",
    "light-1": "86d055",
    "base": "5aa02c",
    "dark-1": "447821",
    "dark-2": "2d5016"
  },
  Black: {
    "light-3": "e7e7e7",
    "light-2": "b0b0b0",
    "light-1": "7a7a7a",
    "base": "444444",
    "dark-1": "333333",
    "dark-2": "222222"
  },
  Gray: {
    "light-3": "f8f8f8",
    "light-2": "eaeaea",
    "light-1": "dbdbdb",
    "base": "cccccc",
    "dark-1": "999999",
    "dark-2": "666666"
  },
  Danger: {
    "light-3": "fde1e0",
    "light-2": "faa099",
    "light-1": "f65e53",
    "base": "f21c0d",
    "dark-1": "b6150a",
    "dark-2": "790e07"
  },
  Warning: {
    "light-3": "fff2de",
    "light-2": "ffd494",
    "light-1": "ffb74a",
    "base": "ff9900",
    "dark-1": "bf7300",
    "dark-2": "804d00"
  },
  Caution: {
    "light-3": "fffcde",
    "light-2": "fff494",
    "light-1": "ffed4a",
    "base": "ffe500",
    "dark-1": "bfac00",
    "dark-2": "807300"
  },
  Notice: {
    "light-3": "e0f0fd",
    "light-2": "99cefa",
    "light-1": "53adf6",
    "base": "0d8bf2",
    "dark-1": "0a68b6",
    "dark-2": "074679"
  },
  Safety: {
    "light-3": "e8f5e8",
    "light-2": "b5deb6",
    "light-1": "81c883",
    "base": "4eb151",
    "dark-1": "3b853d",
    "dark-2": "275929"
  }
}

let View = {
  view: () => {
    return m(Grid, [
      m(Row, [
        m("h1", "Color palette")
      ]),
      m(Row, [
        Object.entries(colorMap).map(([color, map]) => {
          return m(Column, { size: [24, 6] }, [
            m("h1", color),
            m("table", [
              Object.entries(map).map(([type, code]) => {
                return m("tr", [
                  m("td", { style: "padding:4px" }, `${type} = ${code}`),
                  m("td", { style: `width: 100px; background: #${code}` }, "")
                ])
              })
            ])
          ])
        })
      ])
    ])
  }
}

export { View }