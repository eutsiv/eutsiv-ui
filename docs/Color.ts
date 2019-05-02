import m from 'mithril'

import {Grid, Row, Column} from 'eutsiv-ui/layout/Grid'


const colorMap = {
  /*
  primary: {
    "light-3": "d7e3f4",
    "light-2": "87aade",
    "light-1": "3771c8",
    "base": "214478",
    "dark-1": "172f54",
    "dark-2": "0d1b30",
    "dark-3": "03070c"
  },
  */
  Primary: {
    "light-3": "e9ecf2",
    "light-2": "a6b4c9",
    "light-1": "647ca1",
    "base": "214478",
    "dark-1": "173054",
    "dark-2": "0d1b30"
  },
  /*
  secondary: {
    "light-3": "d4efc3",
    "light-2": "aade87",
    "light-1": "7fce4b",
    "base": "5AA02C",
    "dark-1": "467c22",
    "dark-2": "325818",
    "dark-3": "1d340e"
  },
  */
  Secondary: {
    "light-3": "eff6ea",
    "light-2": "bdd9ab",
    "light-1": "8cbd6b",
    "base": "5aa02c",
    "dark-1": "3f701f",
    "dark-2": "244012"
  },
  Black: {
    "light-3": "aaaaaa",
    "light-2": "888888",
    "light-1": "666666",
    "base": "444444",
    "dark-1": "222222",
    "dark-2": "000000"
  },
  /*
  gray: {
    "light-3": "f2f2f2",
    "light-2": "e6e6e6",
    "light-1": "d9d9d9",
    "base": "cccccc",
    "dark-1": "b8b8b8",
    "dark-2": "a3a3a3",
    "dark-3": "8f8f8f"
  },
  */
  Gray: {
    "light-3": "fafafa",
    "light-2": "ebebeb",
    "light-1": "dbdbdb",
    "base": "cccccc",
    "dark-1": "8f8f8f",
    "dark-2": "525252"
  },
  /*
  danger: {
    "light-3": "fccdca",
    "light-2": "f9928b",
    "light-1": "f6574c",
    "base": "f21c0d",
    "dark-1": "d5190b",
    "dark-2": "b8150a",
    "dark-3": "9b1208"
  },
  */
  Danger: {
    "light-3": "fee8e7",
    "light-2": "faa49e",
    "light-1": "f66056",
    "base": "f21c0d",
    "dark-1": "a91409",
    "dark-2": "610b05"
  },
  /*
  warning: {
    "light-3": "ffe9c7",
    "light-2": "ffce85",
    "light-1": "ffb442",
    "base": "ff9900",
    "dark-1": "eb8d00",
    "dark-2": "d68100",
    "dark-3": "c27400"
  },
  */
  Warning: {
    "light-3": "fff5e6",
    "light-2": "ffd699",
    "light-1": "ffb84d",
    "base": "ff9900",
    "dark-1": "cc7a00",
    "dark-2": "995c00"
  },
  /*
  caution: {
    "light-3": "fffce5",
    "light-2": "fff599",
    "light-1": "ffed4d",
    "base": "ffe500",
    "dark-1": "ebd300",
    "dark-2": "d6c100",
    "dark-3": "c2ae00"
  },
  */
  Caution: {
    "light-3": "fffce6",
    "light-2": "fff599",
    "light-1": "ffed4d",
    "base": "ffe500",
    "dark-1": "ccb700",
    "dark-2": "998900"
  },
  /*
  notice: {
    "light-3": "cae5fc",
    "light-2": "8bc7f9",
    "light-1": "4ca9f6",
    "base": "0d8bf2",
    "dark-1": "0b7ad5",
    "dark-2": "0a6ab8",
    "dark-3": "08599b"
  },
  */
  Notice: {
    "light-3": "e7f3fe",
    "light-2": "9ed1fa",
    "light-1": "56aef6",
    "base": "0d8bf2",
    "dark-1": "0961a9",
    "dark-2": "053861"
  },
  /*
  safety: {
    "light-3": "d8eed9",
    "light-2": "aadaac",
    "light-1": "7cc57e",
    "base": "4eb151",
    "dark-1": "449c47",
    "dark-2": "3b873e",
    "dark-3": "327134"
  },
  */
  Safety: {
    "light-3": "edf7ee",
    "light-2": "b8e0b9",
    "light-1": "83c885",
    "base": "4eb151",
    "dark-1": "377c39",
    "dark-2": "1f4720"
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