import m from 'mithril'

let buildFormFields = (vnode) => {
  return vnode.state.selected.map((i) => {
    return m("div", [
      m("input", { type: "hidden", name: vnode.state.fields.id, value: i.id }),
      m("input", { type: "hidden", name: vnode.state.fields.text, value: i.text })
    ])
  })
}

let emptyFn = () => {}

let filterFn = (i, q) => {
  let re = new RegExp(q, "i");
  return i.text && (i.text.search(re) != -1)
}

let onSelectHandler = (e, i, vnode) => {
  if(vnode.state.multiple) {
    e.stopPropagation()
    vnode.state.selected.push(i)
  } else {
    vnode.state.selected = [i]
  }

  // call onSelect event trigger
  vnode.state.onSelect(e, i, vnode)

  // mark as dirty - already selected by user
  vnode.state.dirty = true
}

let refreshFromRemote = (vnode) => {

  let req: Promise<unknown> 

  if(vnode.state.remote.fn) {
    req = vnode.state.remote.fn(vnode.state.query)
  } else  {
    req = m.request({
      method: "GET",
      url: vnode.state.remote.url,
      params: vnode.state.remote.params
    })
  }

  return req.then(vnode.state.remote.processResponse)
  .then((d) => { vnode.state.data = d })
}

let showSelected = (vnode) => {

  let showMultiple = (i) => { return m("a", { class: "eui-button eui-sm eui-compact eui-primary" }, [ i.text, m.trust("&nbsp;&times;") ] ) }
  let showUnique = (i) => { return m("span", i.text) }

  let s = vnode.state.multiple ? vnode.state.selected.map(showMultiple) : vnode.state.selected.map(showUnique)
  return s.length ? s : m.trust("&nbsp;")
}

const Select = () => {

  let width = 0

  let updateWidth = (vn) => { width = vn.dom.offsetWidth }

  return {
    oninit: function(vnode) {

      vnode.state.data = vnode.attrs.data || []
      vnode.state.open = vnode.attrs.open || false
      vnode.state.multiple = vnode.attrs.multiple || false
      vnode.state.fields = vnode.attrs.fields || { id: "select[id]", text: "select[text]" }
      vnode.state.onSelect = vnode.attrs.onSelect || emptyFn
      vnode.state.onInput = vnode.attrs.onInput || emptyFn
      vnode.state.query = vnode.attrs.query || ""
      vnode.state.selected = vnode.attrs.selected || []
      vnode.state.remote = vnode.attrs.remote || false
      vnode.state.dirty = false

      if(vnode.state.remote) refreshFromRemote(vnode)

      // close if click outside the component
      document.addEventListener("click", function(e) {
        if((<Element>e.target).parentNode != vnode.dom) {
          vnode.state.open = false
          vnode.dom.querySelector("div.eui-select-content").children.item(0).blur()
          m.redraw()
        }
      })

    },
    onupdate: function(vnode) {

      if(vnode.state.open) {
        vnode.dom.querySelector("div.eui-select-content").children.item(0).focus()
        vnode.dom.style.zIndex = "9999";
      } else {
        vnode.dom.style.zIndex = "1"
      }

    },
    view: function(vnode) {

      if(!vnode.state.dirty && vnode.attrs.selected) vnode.state.selected = vnode.attrs.selected

      return m("div", { class: "eui-select",  oncreate: updateWidth, onupdate: updateWidth }, [
        m("div", { class: (vnode.state.open ? "eui-input eui-open" : "eui-input" ), onclick: () => { vnode.state.open = !vnode.state.open } }, showSelected(vnode)),
        m("div", buildFormFields(vnode)),
        m("div", { class: (vnode.state.open ? "eui-select-container eui-open" : "eui-select-container" ) }, [
          m("div", { class: "eui-select-content", ...(width && { style: `width:${width}px` }) }, [
            m("input", { oninput: (e) => { vnode.state.query = e.target.value; vnode.state.onInput(e.target.value, vnode); if(vnode.state.remote) refreshFromRemote(vnode) } }),
            m("ul", vnode.state.data.filter((i) => { return filterFn(i, vnode.state.query) }).map((r) => {
              return m("li", m("a", { onclick: (e) => { onSelectHandler(e, r, vnode) } }, r.text))
            }))
          ])
        ])
      ])
    }
  }

}

export { Select }