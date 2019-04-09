import m from 'mithril'


let SourceView = {
  view: (vn) => {
    return m("pre", [
      m("code", { class: "javascript" }, vn.attrs.content)
    ])
  },
  oncreate: (vn) => {
    hljs.highlightBlock(vn.dom.childNodes[0])
  }
}

export { SourceView }