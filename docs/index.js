System.register("About", ["mithril", "eutsiv-ui/layout/Grid", "eutsiv-ui/widget/Link"], function (exports_1, context_1) {
    "use strict";
    var mithril_1, Grid_1, Link_1, View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (mithril_1_1) {
                mithril_1 = mithril_1_1;
            },
            function (Grid_1_1) {
                Grid_1 = Grid_1_1;
            },
            function (Link_1_1) {
                Link_1 = Link_1_1;
            }
        ],
        execute: function () {
            View = {
                view: () => {
                    return mithril_1.default(Grid_1.Grid, [
                        mithril_1.default(Grid_1.Row, [
                            mithril_1.default("h1", "eutsiv UI")
                        ]),
                        mithril_1.default(Grid_1.Row, [
                            mithril_1.default(Link_1.Link, { href: 'https://github.com/eutsiv/eutsiv-ui' }, 'https://github.com/eutsiv/eutsiv-ui')
                        ])
                    ]);
                }
            };
            exports_1("View", View);
        }
    };
});
System.register("Color", ["mithril", "eutsiv-ui/layout/Grid"], function (exports_2, context_2) {
    "use strict";
    var mithril_2, Grid_2, colorMap, View;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (mithril_2_1) {
                mithril_2 = mithril_2_1;
            },
            function (Grid_2_1) {
                Grid_2 = Grid_2_1;
            }
        ],
        execute: function () {
            colorMap = {
                Primary: {
                    "light-3": "e9ecf2",
                    "light-2": "a6b4c9",
                    "light-1": "647ca1",
                    "base": "214478",
                    "dark-1": "173054",
                    "dark-2": "0d1b30"
                },
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
                Gray: {
                    "light-3": "fafafa",
                    "light-2": "ebebeb",
                    "light-1": "dbdbdb",
                    "base": "cccccc",
                    "dark-1": "8f8f8f",
                    "dark-2": "525252"
                },
                Danger: {
                    "light-3": "fee8e7",
                    "light-2": "faa49e",
                    "light-1": "f66056",
                    "base": "f21c0d",
                    "dark-1": "a91409",
                    "dark-2": "610b05"
                },
                Warning: {
                    "light-3": "fff5e6",
                    "light-2": "ffd699",
                    "light-1": "ffb84d",
                    "base": "ff9900",
                    "dark-1": "cc7a00",
                    "dark-2": "995c00"
                },
                Caution: {
                    "light-3": "fffce6",
                    "light-2": "fff599",
                    "light-1": "ffed4d",
                    "base": "ffe500",
                    "dark-1": "ccb700",
                    "dark-2": "998900"
                },
                Notice: {
                    "light-3": "e7f3fe",
                    "light-2": "9ed1fa",
                    "light-1": "56aef6",
                    "base": "0d8bf2",
                    "dark-1": "0961a9",
                    "dark-2": "053861"
                },
                Safety: {
                    "light-3": "edf7ee",
                    "light-2": "b8e0b9",
                    "light-1": "83c885",
                    "base": "4eb151",
                    "dark-1": "377c39",
                    "dark-2": "1f4720"
                }
            };
            View = {
                view: () => {
                    return mithril_2.default(Grid_2.Grid, [
                        mithril_2.default(Grid_2.Row, [
                            mithril_2.default("h1", "Color palette")
                        ]),
                        mithril_2.default(Grid_2.Row, [
                            Object.entries(colorMap).map(([color, map]) => {
                                return mithril_2.default(Grid_2.Column, { size: [24, 6] }, [
                                    mithril_2.default("h1", color),
                                    mithril_2.default("table", [
                                        Object.entries(map).map(([type, code]) => {
                                            return mithril_2.default("tr", [
                                                mithril_2.default("td", { style: "padding:4px" }, `${type} = ${code}`),
                                                mithril_2.default("td", { style: `width: 100px; background: #${code}` }, "")
                                            ]);
                                        })
                                    ])
                                ]);
                            })
                        ])
                    ]);
                }
            };
            exports_2("View", View);
        }
    };
});
System.register("index", ["mithril"], function (exports_3, context_3) {
    "use strict";
    var mithril_3, View;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (mithril_3_1) {
                mithril_3 = mithril_3_1;
            }
        ],
        execute: function () {
            View = () => {
                return {
                    view: () => {
                        return mithril_3.default("div", "index");
                    }
                };
            };
            exports_3("View", View);
        }
    };
});
System.register("wrapper", ["mithril", "eutsiv-ui/layout/Grid", "eutsiv-ui/layout/Gutter", "eutsiv-ui/widget/tree/Tree", "eutsiv-ui/Viewport"], function (exports_4, context_4) {
    "use strict";
    var mithril_4, Grid_3, Gutter_1, Tree_1, Viewport_1, menuTree, setRoute, wrapperContainer, wrapper;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (mithril_4_1) {
                mithril_4 = mithril_4_1;
            },
            function (Grid_3_1) {
                Grid_3 = Grid_3_1;
            },
            function (Gutter_1_1) {
                Gutter_1 = Gutter_1_1;
            },
            function (Tree_1_1) {
                Tree_1 = Tree_1_1;
            },
            function (Viewport_1_1) {
                Viewport_1 = Viewport_1_1;
            }
        ],
        execute: function () {
            menuTree = [
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
                        }
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
                        }
                    ]
                }
            ];
            setRoute = (path) => {
                location.href = path;
            };
            wrapperContainer = {
                view: (vnode) => {
                    return mithril_4.default(Viewport_1.Viewport, [
                        mithril_4.default(Grid_3.Grid, { style: 'height:100%' }, [
                            mithril_4.default(Grid_3.Row, [
                                mithril_4.default(Grid_3.Column, { eui: { size: [24, 5] } }, mithril_4.default(Gutter_1.Gutter, mithril_4.default("h1", "eutsiv UI"), mithril_4.default(Tree_1.Tree, {
                                    eui: {
                                        items: menuTree
                                    }
                                }))),
                                mithril_4.default(Grid_3.Column, { eui: { size: [24, 19] } }, mithril_4.default(Grid_3.Grid, { style: "overflow: auto;" }, mithril_4.default(Gutter_1.Gutter, vnode.children)))
                            ])
                        ])
                    ]);
                }
            };
            wrapper = () => {
                let appContainer = document.getElementById("app-container");
                let mo = {
                    View: {
                        view: () => mithril_4.default('div')
                    }
                };
                let allowRedraw = true;
                mithril_4.default.route(appContainer, "/index", {
                    "/index": () => {
                        let args = mithril_4.default.route.param();
                        let path = args.path;
                        if (!path)
                            path = "index";
                        let previousPath = path;
                        System.import(path).then((v) => {
                            mo = v;
                            mithril_4.default.redraw();
                        });
                        return {
                            onbeforeupdate: () => {
                                args = mithril_4.default.route.param();
                                path = args.path;
                                if (!path)
                                    path = "index";
                                if (previousPath != path) {
                                    previousPath = path;
                                    allowRedraw = false;
                                    System.import(path).then((v) => {
                                        mo = v;
                                        allowRedraw = true;
                                        mithril_4.default.redraw();
                                    });
                                }
                                return allowRedraw;
                            },
                            view: () => {
                                return mithril_4.default(wrapperContainer, mithril_4.default(mo.View, args));
                            }
                        };
                    }
                });
            };
            exports_4("wrapper", wrapper);
        }
    };
});
System.register("resources/SourceView", ["mithril"], function (exports_5, context_5) {
    "use strict";
    var mithril_5, SourceView;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (mithril_5_1) {
                mithril_5 = mithril_5_1;
            }
        ],
        execute: function () {
            SourceView = {
                view: (vn) => {
                    return mithril_5.default("pre", [
                        mithril_5.default("code", { class: "javascript" }, vn.attrs.content)
                    ]);
                },
                oncreate: (vn) => {
                    hljs.highlightBlock(vn.dom.childNodes[0]);
                }
            };
            exports_5("SourceView", SourceView);
        }
    };
});
System.register("resources/Section", ["mithril", "resources/SourceView", "eutsiv-ui/layout/Grid", "eutsiv-ui/layout/Gutter"], function (exports_6, context_6) {
    "use strict";
    var mithril_6, SourceView_1, Grid_4, Gutter_2, Section;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (mithril_6_1) {
                mithril_6 = mithril_6_1;
            },
            function (SourceView_1_1) {
                SourceView_1 = SourceView_1_1;
            },
            function (Grid_4_1) {
                Grid_4 = Grid_4_1;
            },
            function (Gutter_2_1) {
                Gutter_2 = Gutter_2_1;
            }
        ],
        execute: function () {
            Section = {
                view: (vn) => {
                    return mithril_6.default(Grid_4.Row, [
                        mithril_6.default(Grid_4.Column, { eui: { size: [24, 24] } }, mithril_6.default(Gutter_2.Gutter, vn.attrs.documentation)),
                        mithril_6.default(Grid_4.Column, { eui: { size: [24, 24] } }, mithril_6.default(Gutter_2.Gutter, mithril_6.default(SourceView_1.SourceView, {
                            content: vn.attrs.source
                        })))
                    ]);
                }
            };
            exports_6("Section", Section);
        }
    };
});
System.register("layout/Grid", ["mithril", "resources/Section", "eutsiv-ui/layout/Grid"], function (exports_7, context_7) {
    "use strict";
    var mithril_7, Section_1, Grid_5, View;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (mithril_7_1) {
                mithril_7 = mithril_7_1;
            },
            function (Section_1_1) {
                Section_1 = Section_1_1;
            },
            function (Grid_5_1) {
                Grid_5 = Grid_5_1;
            }
        ],
        execute: function () {
            View = {
                view: () => {
                    return [
                        mithril_7.default(Section_1.Section, {
                            documentation: [
                                mithril_7.default("h1", "Grid"),
                                mithril_7.default(Grid_5.Grid, mithril_7.default(Grid_5.Row, [
                                    mithril_7.default(Grid_5.Column, { class: 'layout-grid-test', eui: { size: [24, 24] } }, "24")
                                ]), mithril_7.default(Grid_5.Row, [
                                    mithril_7.default(Grid_5.Column, { class: 'layout-grid-test', eui: { size: [12, 12] } }, "12"),
                                    mithril_7.default(Grid_5.Column, { class: 'layout-grid-test', eui: { size: [12, 12] } }, "12")
                                ]), mithril_7.default(Grid_5.Row, [
                                    mithril_7.default(Grid_5.Column, { class: 'layout-grid-test', eui: { size: [1, 1] } }, "1"),
                                    mithril_7.default(Grid_5.Column, { class: 'layout-grid-test', eui: { size: [2, 2] } }, "2"),
                                    mithril_7.default(Grid_5.Column, { class: 'layout-grid-test', eui: { size: [3, 3] } }, "3"),
                                    mithril_7.default(Grid_5.Column, { class: 'layout-grid-test', eui: { size: [4, 4] } }, "4"),
                                    mithril_7.default(Grid_5.Column, { class: 'layout-grid-test', eui: { size: [5, 5] } }, "5"),
                                    mithril_7.default(Grid_5.Column, { class: 'layout-grid-test', eui: { size: [6, 6] } }, "6"),
                                    mithril_7.default(Grid_5.Column, { class: 'layout-grid-test', eui: { size: [3, 3] } }, "3")
                                ]), mithril_7.default(Grid_5.Row, [
                                    mithril_7.default(Grid_5.Column, { class: 'layout-grid-test', eui: { size: [24, 12] } }, "24/12"),
                                    mithril_7.default(Grid_5.Column, { class: 'layout-grid-test', eui: { size: [24, 8] } }, "24/8"),
                                    mithril_7.default(Grid_5.Column, { class: 'layout-grid-test', eui: { size: [24, 4] } }, "24/4"),
                                ]), mithril_7.default(Grid_5.Row, [
                                    mithril_7.default(Grid_5.Column, { class: 'layout-grid-test', eui: { size: [8, 8] } }, "8/8"),
                                    mithril_7.default(Grid_5.Column, { class: 'layout-grid-test', eui: { size: [8, 8], offset: [8, 8] } }, "8/8 offset 8/8"),
                                ]), mithril_7.default(Grid_5.Row, [
                                    mithril_7.default(Grid_5.Column, { class: 'layout-grid-test', eui: { size: [12, 8], offset: [6, 8] } }, "12/8 offset 6/8"),
                                ]))
                            ],
                            source: `
import {Grid, Row, Column} from 'eutsiv-ui/layout/Grid'

m(Grid,
  m(Row, [
    m(Column, { class: 'layout-grid-test', eui: { size: [24, 24] } }, "24")
  ]),
  m(Row, [
    m(Column, { class: 'layout-grid-test', eui: { size: [12, 12] } }, "12"),
    m(Column, { class: 'layout-grid-test', eui: { size: [12, 12] } }, "12")
  ]),
  m(Row, [
    m(Column, { class: 'layout-grid-test', eui: { size: [1, 1] } }, "1"),
    m(Column, { class: 'layout-grid-test', eui: { size: [2, 2] } }, "2"),
    m(Column, { class: 'layout-grid-test', eui: { size: [3, 3] } }, "3"),
    m(Column, { class: 'layout-grid-test', eui: { size: [4, 4] } }, "4"),
    m(Column, { class: 'layout-grid-test', eui: { size: [5, 5] } }, "5"),
    m(Column, { class: 'layout-grid-test', eui: { size: [6, 6] } }, "6"),
    m(Column, { class: 'layout-grid-test', eui: { size: [3, 3] } }, "3")
  ]),
  m(Row, [
    m(Column, { class: 'layout-grid-test', eui: { size: [24, 12] } }, "24/12"),
    m(Column, { class: 'layout-grid-test', eui: { size: [24, 8] } }, "24/8"),
    m(Column, { class: 'layout-grid-test', eui: { size: [24, 4] } }, "24/4"),
  ]),
  m(Row, [
    m(Column, { class: 'layout-grid-test', eui: { size: [8, 8] } }, "8/8"),
    m(Column, { class: 'layout-grid-test', eui: { size: [8, 8], offset: [8, 8] } }, "8/8 offset 8/8"),
  ]),
  m(Row, [
    m(Column, { class: 'layout-grid-test', eui: { size: [12, 8], offset: [6, 8] } }, "12/8 offset 6/8"),
  ])
)

        `
                        })
                    ];
                }
            };
            exports_7("View", View);
        }
    };
});
System.register("widget/Breadcrumb", ["mithril", "resources/Section", "eutsiv-ui/widget/Breadcrumb", "eutsiv-ui"], function (exports_8, context_8) {
    "use strict";
    var mithril_8, Section_2, Breadcrumb_1, eutsiv_ui_1, View;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [
            function (mithril_8_1) {
                mithril_8 = mithril_8_1;
            },
            function (Section_2_1) {
                Section_2 = Section_2_1;
            },
            function (Breadcrumb_1_1) {
                Breadcrumb_1 = Breadcrumb_1_1;
            },
            function (eutsiv_ui_1_1) {
                eutsiv_ui_1 = eutsiv_ui_1_1;
            }
        ],
        execute: function () {
            View = {
                view: () => {
                    return [
                        mithril_8.default(Section_2.Section, {
                            documentation: [
                                mithril_8.default("h1", "Breadcrumb"),
                                mithril_8.default(Breadcrumb_1.Breadcrumb, {
                                    eui: {
                                        items: [
                                            { text: "Depeche Mode" },
                                            { text: "Pearl Jam", disabled: true },
                                            { text: "Radiohead", href: "http://radiohead.com" },
                                            { text: "Sigur Ros" },
                                            { text: "The National" }
                                        ]
                                    }
                                })
                            ],
                            source: `
import {Breadcrumb} from 'eutsiv-ui/widget/Breadcrumb'

m(Breadcrumb, { 
  eui: {
    items: [
      { text: "Depeche Mode" },
      { text: "Pearl Jam", disabled: true },
      { text: "Radiohead", href: "http://radiohead.com" },
      { text: "Sigur Ros" },
      { text: "The National" }
    ]
  }
})
        `
                        }),
                        mithril_8.default(Section_2.Section, {
                            documentation: [
                                mithril_8.default("h2", "Context"),
                                mithril_8.default(Breadcrumb_1.Breadcrumb, {
                                    eui: {
                                        items: [
                                            { text: "Depeche Mode", context: "danger" },
                                            { text: "Pearl Jam", context: "warning" },
                                            { text: "Radiohead", href: "http://radiohead.com", context: "caution" },
                                            { text: "Sigur Ros", context: "safety" },
                                            { text: "The National" }
                                        ]
                                    }
                                })
                            ],
                            source: `
import {Breadcrumb} from 'eutsiv-ui/widget/Breadcrumb'

m(Breadcrumb, {
  eui: { 
    items: [
      { text: "Depeche Mode", context: "danger" },
      { text: "Pearl Jam", context: "warning" },
      { text: "Radiohead", href: "http://radiohead.com", context: "caution" },
      { text: "Sigur Ros", context: "safety" },
      { text: "The National" }
    ]
  }
})
        `
                        }),
                        mithril_8.default(Section_2.Section, {
                            documentation: [
                                mithril_8.default("h2", "Size"),
                                mithril_8.default(Breadcrumb_1.Breadcrumb, {
                                    eui: {
                                        size: eutsiv_ui_1.Sizes.HU,
                                        items: [
                                            { text: "Depeche Mode" },
                                            { text: "Pearl Jam", disabled: true },
                                            { text: "Radiohead", href: "http://radiohead.com" },
                                            { text: "Sigur Ros" },
                                            { text: "The National" }
                                        ]
                                    }
                                })
                            ],
                            source: `
import {Breadcrumb} from 'eutsiv-ui/widget/Breadcrumb'
import {Sizes} from 'eutsiv-ui'

m(Breadcrumb, {
  eui: {
    size: Sizes.HU,
    items: [
      { text: "Depeche Mode" },
      { text: "Pearl Jam", disabled: true },
      { text: "Radiohead", href: "http://radiohead.com" },
      { text: "Sigur Ros" },
      { text: "The National" }
    ]
  }
})
        `
                        })
                    ];
                }
            };
            exports_8("View", View);
        }
    };
});
System.register("widget/Button", ["mithril", "resources/Section", "eutsiv-ui/widget/Button", "eutsiv-ui/widget/Icon", "eutsiv-ui"], function (exports_9, context_9) {
    "use strict";
    var mithril_9, Section_3, Button_1, Icon_1, eutsiv_ui_2, View;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [
            function (mithril_9_1) {
                mithril_9 = mithril_9_1;
            },
            function (Section_3_1) {
                Section_3 = Section_3_1;
            },
            function (Button_1_1) {
                Button_1 = Button_1_1;
            },
            function (Icon_1_1) {
                Icon_1 = Icon_1_1;
            },
            function (eutsiv_ui_2_1) {
                eutsiv_ui_2 = eutsiv_ui_2_1;
            }
        ],
        execute: function () {
            View = {
                view: () => {
                    return [
                        mithril_9.default(Section_3.Section, {
                            documentation: [
                                mithril_9.default("h1", "Button"),
                                mithril_9.default(Button_1.Button, "Default"),
                                mithril_9.default(Button_1.Button, { disabled: true }, "Disabled"),
                                mithril_9.default(Button_1.Button, { eui: { context: "primary" } }, "Primary"),
                                mithril_9.default(Button_1.Button, { eui: { context: "secondary" } }, "Secondary"),
                                mithril_9.default(Button_1.Button, { eui: { context: "reverse" } }, "Reverse")
                            ],
                            source: `
import {Button} from 'eutsiv-ui/widget/Button'

m(Button, "Default"),
m(Button, { disabled: true }, "Disabled"),
m(Button, { eui: { context: "primary" } }, "Primary"),
m(Button, { eui: { context: "secondary" } }, "Secondary"),
m(Button, { eui: { context: "reverse" } }, "Reverse")
        `
                        }),
                        mithril_9.default(Section_3.Section, {
                            documentation: [
                                mithril_9.default("h2", "Context"),
                                mithril_9.default(Button_1.Button, { eui: { context: "danger" } }, "Danger"),
                                mithril_9.default(Button_1.Button, { eui: { context: "warning" } }, "Warning"),
                                mithril_9.default(Button_1.Button, { eui: { context: "caution" } }, "Caution"),
                                mithril_9.default(Button_1.Button, { eui: { context: "notice" } }, "Notice"),
                                mithril_9.default(Button_1.Button, { eui: { context: "safety" } }, "Safety")
                            ],
                            source: `
import {Button} from 'eutsiv-ui/widget/Button'

m(Button, { eui: { context: "danger" } }, "Danger"),
m(Button, { eui: { context: "warning" } }, "Warning"),
m(Button, { eui: { context: "caution" } }, "Caution"),
m(Button, { eui: { context: "notice" } }, "Notice"),
m(Button, { eui: { context: "safety" } }, "Safety")
        `
                        }),
                        mithril_9.default(Section_3.Section, {
                            documentation: [
                                mithril_9.default("h2", "Flat"),
                                mithril_9.default(Button_1.Button, { eui: { flat: true } }, "Default"),
                                mithril_9.default(Button_1.Button, { disabled: true, eui: { flat: true } }, "Disabled"),
                                mithril_9.default(Button_1.Button, { eui: { context: "primary", flat: true } }, "Primary"),
                                mithril_9.default(Button_1.Button, { eui: { context: "secondary", flat: true } }, "Secondary"),
                                mithril_9.default(Button_1.Button, { eui: { context: "reverse", flat: true } }, "Reverse"),
                                mithril_9.default(Button_1.Button, { eui: { context: "danger", flat: true } }, "Danger"),
                                mithril_9.default(Button_1.Button, { eui: { context: "warning", flat: true } }, "Warning"),
                                mithril_9.default(Button_1.Button, { eui: { context: "caution", flat: true } }, "Caution"),
                                mithril_9.default(Button_1.Button, { eui: { context: "notice", flat: true } }, "Notice"),
                                mithril_9.default(Button_1.Button, { eui: { context: "safety", flat: true } }, "Safety")
                            ],
                            source: `
import {Button} from 'eutsiv-ui/widget/Button'

m(Button, { eui: { flat: true } }, "Default"),
m(Button, { disabled: true, eui: { flat: true } }, "Disabled"),
m(Button, { eui: { context: "primary", flat: true } }, "Primary"),
m(Button, { eui: { context: "secondary", flat: true } }, "Secondary"),
m(Button, { eui: { context: "reverse", flat: true } }, "Reverse"),
m(Button, { eui: { context: "danger", flat: true } }, "Danger"),
m(Button, { eui: { context: "warning", flat: true } }, "Warning"),
m(Button, { eui: { context: "caution", flat: true } }, "Caution"),
m(Button, { eui: { context: "notice", flat: true } }, "Notice"),
m(Button, { eui: { context: "safety", flat: true } }, "Safety")
        `
                        }),
                        mithril_9.default(Section_3.Section, {
                            documentation: [
                                mithril_9.default("h2", "Size"),
                                mithril_9.default(Button_1.Button, { eui: { size: eutsiv_ui_2.Sizes.XS } }, "Extra small"),
                                mithril_9.default(Button_1.Button, { disabled: true, eui: { size: eutsiv_ui_2.Sizes.SM } }, "Small"),
                                mithril_9.default(Button_1.Button, { eui: { context: "primary", size: eutsiv_ui_2.Sizes.DE } }, "Default"),
                                mithril_9.default(Button_1.Button, { eui: { context: "secondary", size: eutsiv_ui_2.Sizes.LG } }, "Large"),
                                mithril_9.default(Button_1.Button, { eui: { context: "reverse", size: eutsiv_ui_2.Sizes.XL } }, "Extra large"),
                                mithril_9.default(Button_1.Button, { eui: { context: "danger", size: eutsiv_ui_2.Sizes.HU } }, "Huge")
                            ],
                            source: `
import {Button} from 'eutsiv-ui/widget/Button'
import {Sizes} from 'eutsiv-ui'

m(Button, { eui: { size: Sizes.XS } }, "Extra small"),
m(Button, { disabled: true, eui: { size: Sizes.SM } }, "Small"),
m(Button, { eui: { context: "primary", size: Sizes.DE } }, "Default"),
m(Button, { eui: { context: "secondary", size: Sizes.LG } }, "Large"),
m(Button, { eui: { context: "reverse", size: Sizes.XL } }, "Extra large"),
m(Button, { eui: { context: "danger", size: Sizes.HU } }, "Huge")
        `
                        }),
                        mithril_9.default(Section_3.Section, {
                            documentation: [
                                mithril_9.default("h2", "Block"),
                                mithril_9.default(Button_1.Button, { eui: { block: true } }, "Default"),
                                mithril_9.default(Button_1.Button, { disabled: true, eui: { block: true } }, "Disabled"),
                                mithril_9.default(Button_1.Button, { eui: { context: "primary", block: true } }, "Primary"),
                                mithril_9.default(Button_1.Button, { eui: { context: "secondary", block: true } }, "Secondary"),
                                mithril_9.default(Button_1.Button, { eui: { context: "reverse", block: true } }, "Reverse")
                            ],
                            source: `
import {Button} from 'eutsiv-ui/widget/Button'

m(Button, { eui: { block: true } }, "Default"),
m(Button, { disabled: true, eui: { block: true } }, "Disabled"),
m(Button, { eui: { context: "primary", block: true } }, "Primary"),
m(Button, { eui: { context: "secondary", block: true } }, "Secondary"),
m(Button, { eui: { context: "reverse", block: true } }, "Reverse")
        `
                        }),
                        mithril_9.default(Section_3.Section, {
                            documentation: [
                                mithril_9.default("h2", "Compact"),
                                mithril_9.default(Button_1.Button, { eui: { compact: true } }, "Default"),
                                mithril_9.default(Button_1.Button, { disabled: true, eui: { compact: true } }, "Disabled"),
                                mithril_9.default(Button_1.Button, { eui: { context: "primary", compact: true } }, "Primary"),
                                mithril_9.default(Button_1.Button, { eui: { context: "secondary", compact: true } }, "Secondary"),
                                mithril_9.default(Button_1.Button, { eui: { context: "reverse", compact: true } }, "Reverse")
                            ],
                            source: `
import {Button} from 'eutsiv-ui/widget/Button'

m(Button, { eui: { compact: true } }, "Default"),
m(Button, { disabled: true, eui: { compact: true } }, "Disabled"),
m(Button, { eui: { context: "primary", compact: true } }, "Primary"),
m(Button, { eui: { context: "secondary", compact: true } }, "Secondary"),
m(Button, { eui: { context: "reverse", compact: true } }, "Reverse")
        `
                        }),
                        mithril_9.default(Section_3.Section, {
                            documentation: [
                                mithril_9.default("h2", "Spaced"),
                                mithril_9.default(Button_1.Button, { eui: { spaced: true } }, "Default"),
                                mithril_9.default(Button_1.Button, { disabled: true, eui: { spaced: true } }, "Disabled"),
                                mithril_9.default(Button_1.Button, { eui: { context: "primary", spaced: true } }, "Primary"),
                                mithril_9.default(Button_1.Button, { eui: { context: "secondary", spaced: true } }, "Secondary"),
                                mithril_9.default(Button_1.Button, { eui: { context: "reverse", spaced: true } }, "Reverse")
                            ],
                            source: `
import {Button} from 'eutsiv-ui/widget/Button'

m(Button, { eui: { spaced: true } }, "Default"),
m(Button, { disabled: true, eui: { spaced: true } }, "Disabled"),
m(Button, { eui: { context: "primary", spaced: true } }, "Primary"),
m(Button, { eui: { context: "secondary", spaced: true } }, "Secondary"),
m(Button, { eui: { context: "reverse", spaced: true } }, "Reverse")
        `
                        }),
                        mithril_9.default(Section_3.Section, {
                            documentation: [
                                mithril_9.default("h2", "Icon"),
                                mithril_9.default(Button_1.Button, [mithril_9.default(Icon_1.Icon, { eui: { type: "user" } }), mithril_9.default("span", "Default")]),
                                mithril_9.default(Button_1.Button, { disabled: true }, [mithril_9.default(Icon_1.Icon, { eui: { type: "user" } }), mithril_9.default("span", "Disabled")]),
                                mithril_9.default(Button_1.Button, { eui: { context: "primary" } }, [mithril_9.default(Icon_1.Icon, { eui: { type: "user" } }), mithril_9.default("span", "Primary")]),
                                mithril_9.default(Button_1.Button, { eui: { context: "secondary" } }, [mithril_9.default("span", "Secondary"), mithril_9.default(Icon_1.Icon, { eui: { type: "user" } })]),
                                mithril_9.default(Button_1.Button, { eui: { context: "reverse" } }, [mithril_9.default(Icon_1.Icon, { eui: { type: "user" } }), mithril_9.default("span", "Reverse")])
                            ],
                            source: `
import {Button} from 'eutsiv-ui/widget/Button'
import {Icon} from 'eutsiv-ui/widget/Icon'

m(Button, [ m(Icon, { eui: { type: "user" } }), m("span", "Default") ]),
m(Button, { disabled: true }, [ m(Icon, { eui: { type: "user" } }), m("span", "Disabled") ]),
m(Button, { eui: { context: "primary" } }, [ m(Icon, { eui: { type: "user" } }), m("span", "Primary") ]),
m(Button, { eui: { context: "secondary" } }, [ m("span", "Secondary"), m(Icon, { eui: { type: "user" } }) ]),
m(Button, { eui: { context: "reverse" } }, [ m(Icon, { eui: { type: "user" } }), m("span", "Reverse") ])
        `
                        })
                    ];
                }
            };
            exports_9("View", View);
        }
    };
});
System.register("widget/Form", ["mithril", "resources/Section", "eutsiv-ui/layout/Grid", "eutsiv-ui/widget/Form", "eutsiv-ui/widget/Button"], function (exports_10, context_10) {
    "use strict";
    var mithril_10, Section_4, Grid_6, Form_1, Button_2, View;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [
            function (mithril_10_1) {
                mithril_10 = mithril_10_1;
            },
            function (Section_4_1) {
                Section_4 = Section_4_1;
            },
            function (Grid_6_1) {
                Grid_6 = Grid_6_1;
            },
            function (Form_1_1) {
                Form_1 = Form_1_1;
            },
            function (Button_2_1) {
                Button_2 = Button_2_1;
            }
        ],
        execute: function () {
            View = {
                view: () => {
                    return [
                        mithril_10.default(Section_4.Section, {
                            documentation: [
                                mithril_10.default("h1", "Form"),
                                mithril_10.default(Form_1.Form, mithril_10.default(Grid_6.Grid, [
                                    mithril_10.default(Grid_6.Row, [
                                        mithril_10.default(Form_1.Field, mithril_10.default("input", { placeholder: "Id" })),
                                        mithril_10.default(Form_1.Field, mithril_10.default("input", { placeholder: "Name" }))
                                    ]),
                                    mithril_10.default(Grid_6.Row, [
                                        mithril_10.default(Form_1.Field, mithril_10.default("input", { placeholder: "E-mail" })),
                                        mithril_10.default(Form_1.Field, mithril_10.default("input", { placeholder: "Password" }))
                                    ]),
                                    mithril_10.default(Grid_6.Row, [
                                        mithril_10.default(Form_1.Field, mithril_10.default("input", { placeholder: "File" })),
                                        mithril_10.default(Form_1.Field, mithril_10.default(Button_2.Button, { eui: { context: "danger" } }, "Test"))
                                    ])
                                ]))
                            ],
                            source: `
import {Grid, Row} from 'eutsiv-ui/layout/Grid'
import {Field, Form} from 'eutsiv-ui/widget/Form'
import {Button} from 'eutsiv-ui/widget/Button'

m(Form,
  m(Grid, 
    m(Row, [
      m(Field, 
        m("input", { placeholder: "Id" })
      ),
      m(Field, 
        m(Button, { context: "danger" }, "Test")
      )
    ])
  )
)
        `
                        }),
                        mithril_10.default(Section_4.Section, {
                            documentation: [
                                mithril_10.default("h1", "Form"),
                                mithril_10.default("div", { oncreate: (vn) => {
                                        vn.dom.innerHTML = `

  <form class="e e-form" method="post" action="">

    <div class="e-grid">
      <div class="e-col e-sm-12 e-lg-6 e-field">
        <label>
          Id
          <input type="text" name="id" placeholder="Id" disabled="disabled">
        </label>
      </div>
    </div>

    <div class="e-grid">
      <div class="e-col e-sm-12 e-lg-6 e-field">
        <label>
          E-mail
          <input type="text" name="email" value="test@test.com" placeholder="E-mail" readonly="readonly">
        </label>
      </div>
    </div>

    <div class="e-grid">
      <div class="e-col e-sm-12 e-lg-6 e-field">
        <label>
          Nome
          <input type="text" name="name" placeholder="Nome">
        </label>
      </div>
    </div>

    <div class="e-grid">
      <div class="e-col e-sm-12 e-lg-6 e-field">
        <label>
          Descricao
          <textarea name="description" rows="5" placeholder="Descricao"></textarea>
        </label>
      </div>
    </div>

    <div class="e-grid">
      <div class="e-col e-sm-12 e-lg-6">
        <span class="e-fieldset">Data de captura das vendas</span>
      </div>
    </div>
    <div class="e-grid">
      <div class="e-col e-sm-6 e-lg-3 e-field">
        <label>
          Nome
          <input type="text" name="name" placeholder="Nome">
        </label>
      </div>
      <div class="e-col e-sm-6 e-lg-3 e-field">
        <label>
          Nome
          <input type="text" name="name" placeholder="Nome">
        </label>
      </div>
    </div>

    <div class="e-grid">
      <div class="e-col e-sm-12 e-lg-6 e-field">
        <label class="e-inline">Choose a car:</label>
        <label class="e-radio e-inline">
          <input type="radio" name="car" value="true" checked="checked">
          <span class="e-fake"></span>Audi
        </label>
        <label class="e-radio e-inline">
          <input type="radio" name="car" value="true" checked="checked">
          <span class="e-fake"></span>BMW
        </label>
        <label class="e-radio e-inline">
          <input type="radio" name="car" value="true" checked="checked" disabled="disabled">
          <span class="e-fake"></span>Ferrari
        </label>
        <label class="e-radio e-inline">
          <input type="radio" name="car" value="true" checked="checked" disabled="disabled">
          <span class="e-fake"></span>Mercedes
        </label>
      </div>
    </div>

    <div class="e-grid">
      <div class="e-col e-sm-12 e-lg-6 e-field">
        <label>Other options:</label>
        <label class="e-checkbox">
          <input type="checkbox" name="virtual" value="true" checked="checked">
          <span class="e-fake"></span>Virtual
        </label>
        <label class="e-checkbox">
          <input type="checkbox" name="administrator" value="true" disabled="disabled">
          <span class="e-fake"></span>Administrator
        </label>
        <label class="e-checkbox">
          <input type="checkbox" name="active" value="true" checked="checked" disabled="disabled">
          <span class="e-fake"></span>Ativo
        </label>
      </div>
    </div>

    <div class="e-grid">
      <div class="e-col e-sm-12 e-lg-6 e-field">
        <button class="e e-btn">Cancelar</button>
        <button type="submit" class="e e-btn e-primary">Salvar</button>
      </div>
    </div>
  </form>


            `;
                                    } })
                            ],
                            source: `

        `
                        })
                    ];
                }
            };
            exports_10("View", View);
        }
    };
});
System.register("widget/Icon", ["mithril", "resources/Section", "eutsiv-ui/widget/Icon", "eutsiv-ui"], function (exports_11, context_11) {
    "use strict";
    var mithril_11, Section_5, Icon_2, eutsiv_ui_3, iconMap, View;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [
            function (mithril_11_1) {
                mithril_11 = mithril_11_1;
            },
            function (Section_5_1) {
                Section_5 = Section_5_1;
            },
            function (Icon_2_1) {
                Icon_2 = Icon_2_1;
            },
            function (eutsiv_ui_3_1) {
                eutsiv_ui_3 = eutsiv_ui_3_1;
            }
        ],
        execute: function () {
            iconMap = [
                { type: "attach", context: "primary" },
                { type: "attention", size: eutsiv_ui_3.Sizes.XS },
                { type: "calendar" },
                { type: "cancel", context: "secondary" },
                { type: "chart-bar" },
                { type: "clock", size: eutsiv_ui_3.Sizes.SM },
                { type: "cog", context: "danger" },
                { type: "doc" },
                { type: "down-open" },
                { type: "ellipsis-vert" },
                { type: "folder-open", size: eutsiv_ui_3.Sizes.LG },
                { type: "left-open", context: "warning" },
                { type: "list-bullet" },
                { type: "menu" },
                { type: "minus", size: eutsiv_ui_3.Sizes.XL },
                { type: "off" },
                { type: "ok" },
                { type: "plus", context: "caution" },
                { type: "right-open" },
                { type: "sort-alt-down", size: eutsiv_ui_3.Sizes.HU },
                { type: "sort-alt-up", context: "notice" },
                { type: "sort-name-down" },
                { type: "sort-name-up" },
                { type: "sort-number-down", context: "safety" },
                { type: "sort-number-up" },
                { type: "spinner", spin: true },
                { type: "table" },
                { type: "trash" },
                { type: "up-open" },
                { type: "user" }
            ];
            View = {
                view: () => {
                    return [
                        mithril_11.default(Section_5.Section, {
                            documentation: [
                                mithril_11.default("h1", "Icon"),
                                iconMap.map((i) => {
                                    return mithril_11.default(Icon_2.Icon, { eui: { type: i.type, spin: i.spin } });
                                })
                            ],
                            source: `
import {Icon} from 'eutsiv-ui/widget/Icon'

let iconMap = [
  { type: "attach", context: "primary" },
  { type: "attention", size: Sizes.XS },
  { type: "calendar" },
  { type: "cancel", context: "secondary" },
  { type: "chart-bar" },
  { type: "clock", size: Sizes.SM },
  { type: "cog", context: "danger" },
  { type: "doc" },
  { type: "down-open" },
  { type: "ellipsis-vert" },
  { type: "folder-open", size: Sizes.LG },
  { type: "left-open", context: "warning" },
  { type: "list-bullet" },
  { type: "menu" },
  { type: "minus", size: Sizes.XL },
  { type: "off" },
  { type: "ok" },
  { type: "plus", context: "caution" },
  { type: "right-open" },
  { type: "sort-alt-down", size: Sizes.HU },
  { type: "sort-alt-up", context: "notice" },
  { type: "sort-name-down" },
  { type: "sort-name-up" },
  { type: "sort-number-down", context: "safety" },
  { type: "sort-number-up" },
  { type: "spinner", spin: true },
  { type: "table" },
  { type: "trash" },
  { type: "up-open" },
  { type: "user" }
]

iconMap.map((i) => {
  return m(Icon, { eui: { type: i.type, spin: i.spin } })
})
        `
                        }),
                        mithril_11.default(Section_5.Section, {
                            documentation: [
                                mithril_11.default("h2", "Context"),
                                iconMap.map((i) => {
                                    return mithril_11.default(Icon_2.Icon, { eui: { type: i.type, spin: i.spin, context: i.context } });
                                })
                            ],
                            source: `
import {Icon} from 'eutsiv-ui/widget/Icon'

iconMap.map((i) => {
  return m(Icon, { eui: { type: i.type, spin: i.spin, context: i.context } })
})
        `
                        }),
                        mithril_11.default(Section_5.Section, {
                            documentation: [
                                mithril_11.default("h2", "Size"),
                                iconMap.map((i) => {
                                    return mithril_11.default(Icon_2.Icon, { eui: { type: i.type, spin: i.spin, size: i.size } });
                                })
                            ],
                            source: `
import {Icon} from 'eutsiv-ui/widget/Icon'
import {Sizes} from 'eutsiv-ui'

iconMap.map((i) => {
  return m(Icon, { eui: { type: i.type, spin: i.spin, size: i.size } })
})
        `
                        })
                    ];
                }
            };
            exports_11("View", View);
        }
    };
});
System.register("widget/Link", ["mithril", "resources/Section", "eutsiv-ui/widget/Link", "eutsiv-ui"], function (exports_12, context_12) {
    "use strict";
    var mithril_12, Section_6, Link_2, eutsiv_ui_4, View;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [
            function (mithril_12_1) {
                mithril_12 = mithril_12_1;
            },
            function (Section_6_1) {
                Section_6 = Section_6_1;
            },
            function (Link_2_1) {
                Link_2 = Link_2_1;
            },
            function (eutsiv_ui_4_1) {
                eutsiv_ui_4 = eutsiv_ui_4_1;
            }
        ],
        execute: function () {
            View = {
                view: () => {
                    return [
                        mithril_12.default(Section_6.Section, {
                            documentation: [
                                mithril_12.default("h1", "Link"),
                                mithril_12.default(Link_2.Link, "Default"),
                                mithril_12.default(Link_2.Link, { disabled: true }, "Disabled"),
                                mithril_12.default(Link_2.Link, { eui: { context: "primary" } }, "Primary"),
                                mithril_12.default(Link_2.Link, { eui: { context: "secondary" } }, "Secondary"),
                                mithril_12.default(Link_2.Link, { eui: { context: "danger" } }, "Danger"),
                                mithril_12.default(Link_2.Link, { eui: { context: "warning" } }, "Warning"),
                                mithril_12.default(Link_2.Link, { eui: { context: "caution" } }, "Caution"),
                                mithril_12.default(Link_2.Link, { eui: { context: "notice" } }, "Notice"),
                                mithril_12.default(Link_2.Link, { eui: { context: "safety" } }, "Safety"),
                                mithril_12.default(Link_2.Link, { eui: { context: "black" } }, "Black"),
                                mithril_12.default(Link_2.Link, { eui: { context: "white" } }, "White")
                            ],
                            source: `
import {Link} from 'eutsiv-ui/widget/Link'

m(Link, "Default"),
m(Link, { disabled: true }, "Disabled"),
m(Link, { eui: { context: "primary" } }, "Primary"),
m(Link, { eui: { context: "secondary" } }, "Secondary"),
m(Link, { eui: { context: "danger" } }, "Danger"),
m(Link, { eui: { context: "warning" } }, "Warning"),
m(Link, { eui: { context: "caution" } }, "Caution"),
m(Link, { eui: { context: "notice" } }, "Notice"),
m(Link, { eui: { context: "safety" } }, "Safety"),
m(Link, { eui: { context: "black" } }, "Black"),
m(Link, { eui: { context: "white" } }, "White")
        `
                        }),
                        mithril_12.default(Section_6.Section, {
                            documentation: [
                                mithril_12.default("h2", "Size"),
                                mithril_12.default(Link_2.Link, { eui: { size: eutsiv_ui_4.Sizes.XS } }, "Default extra small"),
                                mithril_12.default(Link_2.Link, { disabled: true, eui: { size: eutsiv_ui_4.Sizes.SM } }, "Disabled small"),
                                mithril_12.default(Link_2.Link, { eui: { context: "primary", size: eutsiv_ui_4.Sizes.LG } }, "Primary large"),
                                mithril_12.default(Link_2.Link, { eui: { context: "secondary", size: eutsiv_ui_4.Sizes.XL } }, "Secondary extra large"),
                                mithril_12.default(Link_2.Link, { eui: { context: "danger", size: eutsiv_ui_4.Sizes.HU } }, "Danger huge")
                            ],
                            source: `
import {Link} from 'eutsiv-ui/widget/Link'
import {Sizes} from 'eutsiv-ui'

m(Link, { eui: { size: Sizes.XS } }, "Default extra small"),
m(Link, { disabled: true, eui: { size: Sizes.SM } }, "Disabled small"),
m(Link, { eui: { context: "primary", size: Sizes.LG } }, "Primary large"),
m(Link, { eui: { context: "secondary", size: Sizes.XL } }, "Secondary extra large"),
m(Link, { eui: { context: "danger", size: Sizes.HU } }, "Danger huge")
        `
                        })
                    ];
                }
            };
            exports_12("View", View);
        }
    };
});
System.register("widget/Loading", ["mithril", "resources/Section", "eutsiv-ui/widget/Loading"], function (exports_13, context_13) {
    "use strict";
    var mithril_13, Section_7, Loading_1, View;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [
            function (mithril_13_1) {
                mithril_13 = mithril_13_1;
            },
            function (Section_7_1) {
                Section_7 = Section_7_1;
            },
            function (Loading_1_1) {
                Loading_1 = Loading_1_1;
            }
        ],
        execute: function () {
            View = {
                view: () => {
                    return [
                        mithril_13.default(Section_7.Section, {
                            documentation: [
                                mithril_13.default("h1", "Loading"),
                                mithril_13.default(Loading_1.Loading)
                            ],
                            source: `
import {Loading} from 'eutsiv-ui/widget/Loading'

m(Loading)
        `
                        })
                    ];
                }
            };
            exports_13("View", View);
        }
    };
});
System.register("widget/Notification", ["mithril", "resources/Section", "eutsiv-ui/widget/Notification", "eutsiv-ui"], function (exports_14, context_14) {
    "use strict";
    var mithril_14, Section_8, Notification_1, eutsiv_ui_5, View;
    var __moduleName = context_14 && context_14.id;
    return {
        setters: [
            function (mithril_14_1) {
                mithril_14 = mithril_14_1;
            },
            function (Section_8_1) {
                Section_8 = Section_8_1;
            },
            function (Notification_1_1) {
                Notification_1 = Notification_1_1;
            },
            function (eutsiv_ui_5_1) {
                eutsiv_ui_5 = eutsiv_ui_5_1;
            }
        ],
        execute: function () {
            View = {
                view: () => {
                    return [
                        mithril_14.default(Section_8.Section, {
                            documentation: [
                                mithril_14.default("h1", "Notification"),
                                mithril_14.default(Notification_1.Notification, "Default"),
                                mithril_14.default(Notification_1.Notification, { eui: { context: "primary" } }, "Primary"),
                                mithril_14.default(Notification_1.Notification, { eui: { context: "secondary" } }, "Secondary"),
                                mithril_14.default(Notification_1.Notification, { eui: { context: "reverse" } }, "Reverse")
                            ],
                            source: `
import {Notification} from 'eutsiv-ui/widget/Notification'

m(Notification, "Default"),
m(Notification, { eui: { context: "primary" } }, "Primary"),
m(Notification, { eui: { context: "secondary" } }, "Secondary"),
m(Notification, { eui: { context: "reverse" } }, "Reverse")
        `
                        }),
                        mithril_14.default(Section_8.Section, {
                            documentation: [
                                mithril_14.default("h2", "Context"),
                                mithril_14.default(Notification_1.Notification, { eui: { context: "danger" } }, "Danger"),
                                mithril_14.default(Notification_1.Notification, { eui: { context: "warning" } }, "Warning"),
                                mithril_14.default(Notification_1.Notification, { eui: { context: "caution" } }, "Caution"),
                                mithril_14.default(Notification_1.Notification, { eui: { context: "notice" } }, "Notice"),
                                mithril_14.default(Notification_1.Notification, { eui: { context: "safety" } }, "Safety")
                            ],
                            source: `
import {Notification} from 'eutsiv-ui/widget/Notification'

m(Notification, { eui: { context: "danger" } }, "Danger"),
m(Notification, { eui: { context: "warning" } }, "Warning"),
m(Notification, { eui: { context: "caution" } }, "Caution"),
m(Notification, { eui: { context: "notice" } }, "Notice"),
m(Notification, { eui: { context: "safety" } }, "Safety")
        `
                        }),
                        mithril_14.default(Section_8.Section, {
                            documentation: [
                                mithril_14.default("h2", "Size"),
                                mithril_14.default(Notification_1.Notification, { eui: { size: eutsiv_ui_5.Sizes.XS } }, "Default extra small"),
                                mithril_14.default(Notification_1.Notification, { eui: { context: "primary", size: eutsiv_ui_5.Sizes.SM } }, "Primary small"),
                                mithril_14.default(Notification_1.Notification, { eui: { context: "secondary", size: eutsiv_ui_5.Sizes.LG } }, "Secondary large"),
                                mithril_14.default(Notification_1.Notification, { eui: { context: "reverse", size: eutsiv_ui_5.Sizes.XL } }, "Reverse extra large"),
                                mithril_14.default(Notification_1.Notification, { eui: { context: "danger", size: eutsiv_ui_5.Sizes.HU } }, "Danger huge")
                            ],
                            source: `
import {Notification} from 'eutsiv-ui/widget/Notification'
import {Sizes} from 'eutsiv-ui'

m(Notification, { eui: { size: Sizes.XS } }, "Default extra small"),
m(Notification, { eui: { context: "primary", size: Sizes.SM } }, "Primary small"),
m(Notification, { eui: { context: "secondary", size: Sizes.LG } }, "Secondary large"),
m(Notification, { eui: { context: "reverse", size: Sizes.XL } }, "Reverse extra large"),
m(Notification, { eui: { context: "danger", size: Sizes.HU } }, "Danger huge")
        `
                        })
                    ];
                }
            };
            exports_14("View", View);
        }
    };
});
System.register("widget/Progress", ["mithril", "resources/Section", "eutsiv-ui/widget/Progress"], function (exports_15, context_15) {
    "use strict";
    var mithril_15, Section_9, Progress_1, View;
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [
            function (mithril_15_1) {
                mithril_15 = mithril_15_1;
            },
            function (Section_9_1) {
                Section_9 = Section_9_1;
            },
            function (Progress_1_1) {
                Progress_1 = Progress_1_1;
            }
        ],
        execute: function () {
            View = {
                view: () => {
                    return [
                        mithril_15.default(Section_9.Section, {
                            documentation: [
                                mithril_15.default("h1", "Progress"),
                                mithril_15.default(Progress_1.Progress, { eui: { percent: 35 } })
                            ],
                            source: `
import {Loading} from 'eutsiv-ui/widget/Progress'

m(Progress, { eui: { percent: 35 } })
        `
                        })
                    ];
                }
            };
            exports_15("View", View);
        }
    };
});
System.register("widget/Table", ["mithril", "resources/Section", "eutsiv-ui/widget/Table"], function (exports_16, context_16) {
    "use strict";
    var mithril_16, Section_10, Table_1, tableData, View;
    var __moduleName = context_16 && context_16.id;
    return {
        setters: [
            function (mithril_16_1) {
                mithril_16 = mithril_16_1;
            },
            function (Section_10_1) {
                Section_10 = Section_10_1;
            },
            function (Table_1_1) {
                Table_1 = Table_1_1;
            }
        ],
        execute: function () {
            tableData = [
                { id: 1, name: "Whale", age: 3 },
                { id: 2, name: "Wolf", age: 1 },
                { id: 3, name: "Lion", age: 2 }
            ];
            View = {
                view: () => {
                    return [
                        mithril_16.default(Section_10.Section, {
                            documentation: [
                                mithril_16.default("h1", "Table"),
                                mithril_16.default(Table_1.Table, {
                                    eui: {
                                        data: tableData,
                                        key: 'id',
                                        columns: [
                                            { title: "Id", content: (d) => { return d.id; } },
                                            { title: ["Name", () => { alert("Header Name clicked"); }], content: (d) => { return d.name; } },
                                            { title: "Age", content: (d) => { return d.age; } }
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
                    ];
                }
            };
            exports_16("View", View);
        }
    };
});
System.register("widget/calendar/Calendar", ["mithril", "resources/Section", "eutsiv-ui/widget/calendar/Calendar"], function (exports_17, context_17) {
    "use strict";
    var mithril_17, Section_11, Calendar_1, View;
    var __moduleName = context_17 && context_17.id;
    return {
        setters: [
            function (mithril_17_1) {
                mithril_17 = mithril_17_1;
            },
            function (Section_11_1) {
                Section_11 = Section_11_1;
            },
            function (Calendar_1_1) {
                Calendar_1 = Calendar_1_1;
            }
        ],
        execute: function () {
            View = {
                view: () => {
                    var now = new Date();
                    return [
                        mithril_17.default(Section_11.Section, {
                            documentation: [
                                mithril_17.default("h1", "Calendar"),
                                mithril_17.default(Calendar_1.Calendar, {
                                    month: now.getMonth(),
                                    year: now.getFullYear()
                                })
                            ],
                            source: `
import {Calendar} from 'eutsiv-ui/widget/calendar/Calendar'

var now = new Date()

m(Calendar, {
  month: now.getMonth(),
  year: now.getFullYear()
})
        `
                        })
                    ];
                }
            };
            exports_17("View", View);
        }
    };
});
System.register("widget/data/Grid", ["mithril", "resources/Section", "eutsiv-ui/widget/data/Grid"], function (exports_18, context_18) {
    "use strict";
    var mithril_18, Section_12, Grid_7, people, View;
    var __moduleName = context_18 && context_18.id;
    return {
        setters: [
            function (mithril_18_1) {
                mithril_18 = mithril_18_1;
            },
            function (Section_12_1) {
                Section_12 = Section_12_1;
            },
            function (Grid_7_1) {
                Grid_7 = Grid_7_1;
            }
        ],
        execute: function () {
            people = [
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
            ];
            View = {
                view: () => {
                    return [
                        mithril_18.default(Section_12.Section, {
                            documentation: [
                                mithril_18.default("h1", "Grid"),
                                mithril_18.default(Grid_7.Grid, {
                                    eui: {
                                        data: people,
                                        key: 'id',
                                        columns: [
                                            {
                                                title: "Id",
                                                content: "id",
                                                sort: (d, o, nth) => { return d.sort((a, b) => { return o == 1 ? a.id - b.id : b.id - a.id; }); }
                                            },
                                            {
                                                title: "Name",
                                                content: "name",
                                                sort: (d, o, nth) => { return d.sort((a, b) => { return a.name.localeCompare(b.name) * o; }); }
                                            },
                                            {
                                                title: "Age",
                                                content: "age",
                                                sort: (d, o, nth) => { return d.sort((a, b) => { return o == 1 ? a.age - b.age : b.age - a.age; }); }
                                            },
                                            {
                                                content: (d) => { return mithril_18.default('a', { href: '' }, `View ${d.name} profile`); }
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
                    ];
                }
            };
            exports_18("View", View);
        }
    };
});
System.register("widget/data/Paging", ["mithril", "resources/Section", "eutsiv-ui/widget/data/Paging"], function (exports_19, context_19) {
    "use strict";
    var mithril_19, Section_13, Paging_1, View;
    var __moduleName = context_19 && context_19.id;
    return {
        setters: [
            function (mithril_19_1) {
                mithril_19 = mithril_19_1;
            },
            function (Section_13_1) {
                Section_13 = Section_13_1;
            },
            function (Paging_1_1) {
                Paging_1 = Paging_1_1;
            }
        ],
        execute: function () {
            View = {
                view: () => {
                    return [
                        mithril_19.default(Section_13.Section, {
                            documentation: [
                                mithril_19.default("h1", "Paging"),
                                mithril_19.default(Paging_1.Paging, {
                                    eui: {
                                        page: 3,
                                        rows: {
                                            perPage: 10,
                                            total: 73
                                        },
                                        buildHref: (page, rowsPerPage) => {
                                            return "/index?path=/fi/entry/list" + "&" + mithril_19.default.buildQueryString({ rowsPerPage, page });
                                        }
                                    }
                                })
                            ],
                            source: `
import {Paging} from 'eutsiv-ui/widget/data/Paging'

m(Paging, {
  eui: {
    page: 3,
    rows: {
      perPage: 10,
      total: 73
    },
    buildHref: (page, rowsPerPage) => {
      return "/index?path=/fi/entry/list" + "&" + m.buildQueryString({ rowsPerPage, page })
    }
  }
})
        `
                        })
                    ];
                }
            };
            exports_19("View", View);
        }
    };
});
System.register("widget/tree/Tree", ["mithril", "resources/Section", "eutsiv-ui/widget/tree/Tree"], function (exports_20, context_20) {
    "use strict";
    var mithril_20, Section_14, Tree_2, treeItems, View;
    var __moduleName = context_20 && context_20.id;
    return {
        setters: [
            function (mithril_20_1) {
                mithril_20 = mithril_20_1;
            },
            function (Section_14_1) {
                Section_14 = Section_14_1;
            },
            function (Tree_2_1) {
                Tree_2 = Tree_2_1;
            }
        ],
        execute: function () {
            treeItems = [
                {
                    type: "branch",
                    text: "Reports",
                    children: [
                        {
                            type: "leaf",
                            text: "Sales Balance",
                            onclick: () => { alert("Sales Balance"); }
                        },
                        {
                            type: "leaf",
                            text: "Financial entries",
                            onclick: () => { alert("Financial entries"); }
                        }
                    ]
                },
                {
                    type: "branch",
                    text: "Tree Branch Level 1",
                    open: true,
                    children: [
                        {
                            type: "branch",
                            text: "Tree Branch Level 2",
                            children: [
                                {
                                    type: "leaf",
                                    text: "Tree leaf",
                                    onclick: () => { alert("Tree leaf"); }
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "leaf",
                    text: "Exit",
                    href: "/logout",
                    oncreate: () => { console.log("component created"); }
                }
            ];
            View = {
                view: () => {
                    return [
                        mithril_20.default(Section_14.Section, {
                            documentation: [
                                mithril_20.default("h1", "Tree"),
                                mithril_20.default(Tree_2.Tree, {
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
    open: true,
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
                    ];
                }
            };
            exports_20("View", View);
        }
    };
});
//# sourceMappingURL=index.js.map