;(function() {

  var selectData = [
    { id: 1, text: "Depeche Mode" },
    { id: 2, text: "Pearl Jam" },
    { id: 3, text: "Radiohead" },
    { id: 4, text: "Sigur Ros" },
    { id: 5, text: "The National" }
  ];

  SystemJS.import('eutsiv-ui/components/form/Select').then(function(c) {

    var select = {
      view: function(vnode) {
        return m("form", { class: "e e-form" }, [
          m("label", "Select"),
          m(c.Select, { data: selectData })
        ])
      }
    }

    var selectMultiple = {
      view: function(vnode) {
        return m("form", { class: "e e-form" }, [
          m("label", "Select multiple"),
          m(c.Select, { multiple: true, data: selectData })
        ])
      }
    }

    var pr = (i) => { return { id: i.id, text: i.name } }
    var selectRemote = {
      view: function(vnode) {
        return m("form", { class: "e e-form" }, [
          m("label", "Select remote"),
          m(c.Select, { remote: { url: "https://api.github.com/search/repositories?term=sel&_type=query&q=sel", processResponse: function(d) { return d.items.map(pr) } } })
        ])
      }
    }

    m.mount(document.getElementById("eutsiv-ui-form-select-example"), select)
    m.mount(document.getElementById("eutsiv-ui-form-select-multiple-example"), selectMultiple)
    m.mount(document.getElementById("eutsiv-ui-form-select-remote-example"), selectRemote)

  })

})()
