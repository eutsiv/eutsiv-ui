System.register("eutsiv-ui", [], function (exports_1, context_1) {
    "use strict";
    var applyAttrsModifiers, Sizes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            applyAttrsModifiers = (attrs, ...fn) => {
                attrs.eui = Object.assign({}, attrs.eui);
                !Array.isArray(attrs.class) && (attrs.class = attrs.class ? [attrs.class] : []);
                !Array.isArray(attrs.style) && (attrs.style = attrs.style ? [attrs.style] : []);
                fn.forEach(e => {
                    attrs = e(attrs);
                });
                Array.isArray(attrs.class) && (attrs.class = attrs.class.length ? attrs.class.join(' ') : undefined);
                Array.isArray(attrs.style) && (attrs.style = attrs.style.length ? attrs.style.join(';') : undefined);
                attrs = Object.assign({}, attrs);
                attrs.eui = undefined;
                return attrs;
            };
            exports_1("applyAttrsModifiers", applyAttrsModifiers);
            Sizes = {
                XS: "0.72em",
                SM: "0.88em",
                DE: "1.00em",
                LG: "1.28em",
                XL: "1.52em",
                HU: "1.76em"
            };
            exports_1("Sizes", Sizes);
        }
    };
});
System.register("eutsiv-ui/Component", ["mithril", "eutsiv-ui"], function (exports_2, context_2) {
    "use strict";
    var mithril_1, eutsiv_ui_1, Component, applyClasses, applyConfig;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (mithril_1_1) {
                mithril_1 = mithril_1_1;
            },
            function (eutsiv_ui_1_1) {
                eutsiv_ui_1 = eutsiv_ui_1_1;
            }
        ],
        execute: function () {
            Component = () => {
                return {
                    view: (vn) => {
                        return mithril_1.default('div', eutsiv_ui_1.applyAttrsModifiers(vn.attrs, applyClasses, applyConfig), vn.children);
                    }
                };
            };
            exports_2("Component", Component);
            applyClasses = (attrs) => {
                attrs.class.push('eui-component');
                return attrs;
            };
            exports_2("applyClasses", applyClasses);
            applyConfig = (attrs) => {
                let config = attrs.eui;
                if (config.context)
                    attrs.class.push(`eui-${config.context}`);
                if (config.size)
                    attrs.style.push(`font-size:${config.size}`);
                return attrs;
            };
            exports_2("applyConfig", applyConfig);
        }
    };
});
System.register("eutsiv-ui/Viewport", ["mithril", "eutsiv-ui", "eutsiv-ui/Component"], function (exports_3, context_3) {
    "use strict";
    var mithril_2, eutsiv_ui_2, Component_1, Viewport, applyClasses;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (mithril_2_1) {
                mithril_2 = mithril_2_1;
            },
            function (eutsiv_ui_2_1) {
                eutsiv_ui_2 = eutsiv_ui_2_1;
            },
            function (Component_1_1) {
                Component_1 = Component_1_1;
            }
        ],
        execute: function () {
            Viewport = () => {
                return {
                    view: (vn) => {
                        return mithril_2.default('div', eutsiv_ui_2.applyAttrsModifiers(vn.attrs, applyClasses), vn.children);
                    }
                };
            };
            exports_3("Viewport", Viewport);
            applyClasses = (attrs) => {
                attrs = Component_1.applyClasses(attrs);
                attrs.class.push('eui-viewport');
                return attrs;
            };
        }
    };
});
System.register("eutsiv-ui/components/form/Select", ["mithril"], function (exports_4, context_4) {
    "use strict";
    var mithril_3, buildFormFields, emptyFn, filterFn, onSelectHandler, refreshFromRemote, showSelected, Select;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (mithril_3_1) {
                mithril_3 = mithril_3_1;
            }
        ],
        execute: function () {
            buildFormFields = (vnode) => {
                return vnode.state.selected.map((i) => {
                    return mithril_3.default("div", [
                        mithril_3.default("input", { type: "hidden", name: vnode.state.fields.id, value: i.id }),
                        mithril_3.default("input", { type: "hidden", name: vnode.state.fields.text, value: i.text })
                    ]);
                });
            };
            emptyFn = () => { };
            filterFn = (i, q) => {
                let re = new RegExp(q, "i");
                return i.text && (i.text.search(re) != -1);
            };
            onSelectHandler = (e, i, vnode) => {
                if (vnode.state.multiple) {
                    e.stopPropagation();
                    vnode.state.selected.push(i);
                }
                else {
                    vnode.state.selected = [i];
                }
                vnode.state.onSelect(e, i, vnode);
                vnode.state.dirty = true;
            };
            refreshFromRemote = (vnode) => {
                return mithril_3.default.request({
                    method: "GET",
                    url: vnode.state.remote.url,
                    data: vnode.state.remote.params,
                    useBody: true
                }).then(vnode.state.remote.processResponse)
                    .then((d) => { vnode.state.data = d; });
            };
            showSelected = (vnode) => {
                let showMultiple = (i) => { return mithril_3.default("a", { class: "eui-button eui-sm eui-compact eui-primary" }, [i.text, mithril_3.default.trust("&nbsp;&times;")]); };
                let showUnique = (i) => { return mithril_3.default("span", i.text); };
                let s = vnode.state.multiple ? vnode.state.selected.map(showMultiple) : vnode.state.selected.map(showUnique);
                return s.length ? s : mithril_3.default.trust("&nbsp;");
            };
            Select = () => {
                let width = 0;
                let updateWidth = (vn) => { width = vn.dom.offsetWidth; };
                return {
                    oninit: function (vnode) {
                        vnode.state.data = vnode.attrs.data || [];
                        vnode.state.open = vnode.attrs.open || false;
                        vnode.state.multiple = vnode.attrs.multiple || false;
                        vnode.state.fields = vnode.attrs.fields || { id: "select[id]", text: "select[text]" };
                        vnode.state.onSelect = vnode.attrs.onSelect || emptyFn;
                        vnode.state.onInput = vnode.attrs.onInput || emptyFn;
                        vnode.state.query = vnode.attrs.query || "";
                        vnode.state.selected = vnode.attrs.selected || [];
                        vnode.state.remote = vnode.attrs.remote || false;
                        vnode.state.dirty = false;
                        if (vnode.state.remote)
                            refreshFromRemote(vnode);
                        document.addEventListener("click", function (e) {
                            if (e.target.parentNode != vnode.dom) {
                                vnode.state.open = false;
                                vnode.dom.querySelector("div.eui-select-content").children.item(0).blur();
                                mithril_3.default.redraw();
                            }
                        });
                    },
                    onupdate: function (vnode) {
                        if (vnode.state.open) {
                            vnode.dom.querySelector("div.eui-select-content").children.item(0).focus();
                            vnode.dom.style.zIndex = "9999";
                        }
                        else {
                            vnode.dom.style.zIndex = "1";
                        }
                    },
                    view: function (vnode) {
                        if (!vnode.state.dirty && vnode.attrs.selected)
                            vnode.state.selected = vnode.attrs.selected;
                        return mithril_3.default("div", { class: "eui-select", oncreate: updateWidth, onupdate: updateWidth }, [
                            mithril_3.default("div", { class: (vnode.state.open ? "eui-input eui-open" : "eui-input"), onclick: () => { vnode.state.open = !vnode.state.open; } }, showSelected(vnode)),
                            mithril_3.default("div", buildFormFields(vnode)),
                            mithril_3.default("div", { class: (vnode.state.open ? "eui-select-container eui-open" : "eui-select-container") }, [
                                mithril_3.default("div", Object.assign({ class: "eui-select-content" }, (width && { style: `width:${width}px` })), [
                                    mithril_3.default("input", { oninput: mithril_3.default.withAttr("value", (v) => { vnode.state.query = v; vnode.state.onInput(v, vnode); if (vnode.state.remote)
                                            refreshFromRemote(vnode); }) }),
                                    mithril_3.default("ul", vnode.state.data.filter((i) => { return filterFn(i, vnode.state.query); }).map((r) => {
                                        return mithril_3.default("li", mithril_3.default("a", { onclick: (e) => { onSelectHandler(e, r, vnode); } }, r.text));
                                    }))
                                ])
                            ])
                        ]);
                    }
                };
            };
            exports_4("Select", Select);
        }
    };
});
System.register("eutsiv-ui/layout/grid/Grid", ["mithril", "eutsiv-ui", "eutsiv-ui/Component"], function (exports_5, context_5) {
    "use strict";
    var mithril_4, eutsiv_ui_3, Component_2, Grid, applyClasses;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (mithril_4_1) {
                mithril_4 = mithril_4_1;
            },
            function (eutsiv_ui_3_1) {
                eutsiv_ui_3 = eutsiv_ui_3_1;
            },
            function (Component_2_1) {
                Component_2 = Component_2_1;
            }
        ],
        execute: function () {
            Grid = () => {
                return {
                    view: (vn) => {
                        return mithril_4.default('div', eutsiv_ui_3.applyAttrsModifiers(vn.attrs, applyClasses), vn.children);
                    }
                };
            };
            exports_5("Grid", Grid);
            applyClasses = (attrs) => {
                attrs = Component_2.applyClasses(attrs);
                attrs.class.push('eui-grid');
                return attrs;
            };
        }
    };
});
System.register("eutsiv-ui/layout/grid/Row", ["mithril", "eutsiv-ui", "eutsiv-ui/Component"], function (exports_6, context_6) {
    "use strict";
    var mithril_5, eutsiv_ui_4, Component_3, Row, applyClasses;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (mithril_5_1) {
                mithril_5 = mithril_5_1;
            },
            function (eutsiv_ui_4_1) {
                eutsiv_ui_4 = eutsiv_ui_4_1;
            },
            function (Component_3_1) {
                Component_3 = Component_3_1;
            }
        ],
        execute: function () {
            Row = () => {
                return {
                    view: (vn) => {
                        return mithril_5.default('div', eutsiv_ui_4.applyAttrsModifiers(vn.attrs, applyClasses), vn.children);
                    }
                };
            };
            exports_6("Row", Row);
            applyClasses = (attrs) => {
                attrs = Component_3.applyClasses(attrs);
                attrs.class.push('eui-row');
                return attrs;
            };
        }
    };
});
System.register("eutsiv-ui/layout/grid/Column", ["mithril", "eutsiv-ui", "eutsiv-ui/Component"], function (exports_7, context_7) {
    "use strict";
    var mithril_6, eutsiv_ui_5, Component_4, Column, applyClasses, applyConfig;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (mithril_6_1) {
                mithril_6 = mithril_6_1;
            },
            function (eutsiv_ui_5_1) {
                eutsiv_ui_5 = eutsiv_ui_5_1;
            },
            function (Component_4_1) {
                Component_4 = Component_4_1;
            }
        ],
        execute: function () {
            Column = () => {
                return {
                    view: (vn) => {
                        return mithril_6.default('div', eutsiv_ui_5.applyAttrsModifiers(vn.attrs, applyClasses, applyConfig), vn.children);
                    }
                };
            };
            exports_7("Column", Column);
            applyClasses = (attrs) => {
                attrs = Component_4.applyClasses(attrs);
                attrs.class.push('eui-column');
                return attrs;
            };
            exports_7("applyClasses", applyClasses);
            applyConfig = (attrs) => {
                let params = attrs.eui;
                let s = params.size || [], o = params.offset || [];
                let buildSizeOffsetClasses = (a, p) => {
                    return a.map((e, i) => { if (e)
                        return `${p[i]}-${e}`; }).filter(e => { if (e)
                        return true; });
                };
                attrs.class.push(...buildSizeOffsetClasses(s, ['eui-sm', 'eui']));
                attrs.class.push(...buildSizeOffsetClasses(o, ['eui-sm-offset', 'eui-offset']));
                return attrs;
            };
            exports_7("applyConfig", applyConfig);
        }
    };
});
System.register("eutsiv-ui/layout/Grid", ["eutsiv-ui/layout/grid/Grid", "eutsiv-ui/layout/grid/Row", "eutsiv-ui/layout/grid/Column"], function (exports_8, context_8) {
    "use strict";
    var Grid_1, Row_1, Column_1;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [
            function (Grid_1_1) {
                Grid_1 = Grid_1_1;
            },
            function (Row_1_1) {
                Row_1 = Row_1_1;
            },
            function (Column_1_1) {
                Column_1 = Column_1_1;
            }
        ],
        execute: function () {
            exports_8("Grid", Grid_1.Grid);
            exports_8("Row", Row_1.Row);
            exports_8("Column", Column_1.Column);
        }
    };
});
System.register("eutsiv-ui/layout/Gutter", ["mithril", "eutsiv-ui", "eutsiv-ui/Component"], function (exports_9, context_9) {
    "use strict";
    var mithril_7, eutsiv_ui_6, Component_5, Gutter, applyClasses;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [
            function (mithril_7_1) {
                mithril_7 = mithril_7_1;
            },
            function (eutsiv_ui_6_1) {
                eutsiv_ui_6 = eutsiv_ui_6_1;
            },
            function (Component_5_1) {
                Component_5 = Component_5_1;
            }
        ],
        execute: function () {
            Gutter = () => {
                return {
                    view: (vn) => {
                        return mithril_7.default('div', eutsiv_ui_6.applyAttrsModifiers(vn.attrs, applyClasses, Component_5.applyConfig), vn.children);
                    }
                };
            };
            exports_9("Gutter", Gutter);
            applyClasses = (attrs) => {
                attrs = Component_5.applyClasses(attrs);
                attrs.class.push('eui-gutter');
                return attrs;
            };
        }
    };
});
System.register("eutsiv-ui/layout/VSpace", ["mithril", "eutsiv-ui", "eutsiv-ui/Component"], function (exports_10, context_10) {
    "use strict";
    var mithril_8, eutsiv_ui_7, Component_6, VSpace, applyClasses;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [
            function (mithril_8_1) {
                mithril_8 = mithril_8_1;
            },
            function (eutsiv_ui_7_1) {
                eutsiv_ui_7 = eutsiv_ui_7_1;
            },
            function (Component_6_1) {
                Component_6 = Component_6_1;
            }
        ],
        execute: function () {
            VSpace = () => {
                return {
                    view: (vn) => {
                        return mithril_8.default('div', eutsiv_ui_7.applyAttrsModifiers(vn.attrs, applyClasses, Component_6.applyConfig), mithril_8.default.trust('&nbsp;'));
                    }
                };
            };
            exports_10("VSpace", VSpace);
            applyClasses = (attrs) => {
                attrs = Component_6.applyClasses(attrs);
                attrs.class.push('eui-vspace');
                return attrs;
            };
        }
    };
});
System.register("eutsiv-ui/widget/Link", ["mithril", "eutsiv-ui", "eutsiv-ui/Component"], function (exports_11, context_11) {
    "use strict";
    var mithril_9, eutsiv_ui_8, Component_7, Link, applyClasses;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [
            function (mithril_9_1) {
                mithril_9 = mithril_9_1;
            },
            function (eutsiv_ui_8_1) {
                eutsiv_ui_8 = eutsiv_ui_8_1;
            },
            function (Component_7_1) {
                Component_7 = Component_7_1;
            }
        ],
        execute: function () {
            Link = () => {
                return {
                    view: (vn) => {
                        return mithril_9.default('a', eutsiv_ui_8.applyAttrsModifiers(vn.attrs, applyClasses, Component_7.applyConfig), vn.children);
                    }
                };
            };
            exports_11("Link", Link);
            applyClasses = (attrs) => {
                attrs = Component_7.applyClasses(attrs);
                attrs.class.push('eui-link');
                return attrs;
            };
        }
    };
});
System.register("eutsiv-ui/widget/Icon", ["mithril", "eutsiv-ui", "eutsiv-ui/Component"], function (exports_12, context_12) {
    "use strict";
    var mithril_10, eutsiv_ui_9, Component_8, Icon, applyClasses, applyConfig;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [
            function (mithril_10_1) {
                mithril_10 = mithril_10_1;
            },
            function (eutsiv_ui_9_1) {
                eutsiv_ui_9 = eutsiv_ui_9_1;
            },
            function (Component_8_1) {
                Component_8 = Component_8_1;
            }
        ],
        execute: function () {
            Icon = () => {
                return {
                    view: (vn) => {
                        return mithril_10.default('i', eutsiv_ui_9.applyAttrsModifiers(vn.attrs, applyClasses, applyConfig), vn.children);
                    }
                };
            };
            exports_12("Icon", Icon);
            applyClasses = (attrs) => {
                attrs = Component_8.applyClasses(attrs);
                attrs.class.push('eui-icon');
                return attrs;
            };
            applyConfig = (attrs) => {
                attrs = Component_8.applyConfig(attrs);
                let config = attrs.eui;
                if (config.type)
                    attrs.class.push(`eui-icon-${config.type}`);
                if (config.spin)
                    attrs.class.push('eui-spin');
                return attrs;
            };
        }
    };
});
System.register("eutsiv-ui/widget/Breadcrumb", ["mithril", "eutsiv-ui", "eutsiv-ui/Component", "eutsiv-ui/widget/Link", "eutsiv-ui/widget/Icon"], function (exports_13, context_13) {
    "use strict";
    var mithril_11, eutsiv_ui_10, Component_9, Link_1, Icon_1, Breadcrumb, applyClasses;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [
            function (mithril_11_1) {
                mithril_11 = mithril_11_1;
            },
            function (eutsiv_ui_10_1) {
                eutsiv_ui_10 = eutsiv_ui_10_1;
            },
            function (Component_9_1) {
                Component_9 = Component_9_1;
            },
            function (Link_1_1) {
                Link_1 = Link_1_1;
            },
            function (Icon_1_1) {
                Icon_1 = Icon_1_1;
            }
        ],
        execute: function () {
            Breadcrumb = () => {
                return {
                    view: (vn) => {
                        return mithril_11.default('ul', eutsiv_ui_10.applyAttrsModifiers(vn.attrs, applyClasses, Component_9.applyConfig), [
                            vn.attrs.eui.items.map((v, i, a) => {
                                let text = typeof v.text == 'function' ? v.text() : v.text;
                                let it = (i == (a.length - 1)) ? mithril_11.default('span', { class: 'eui-active' }, text) : [
                                    mithril_11.default(Link_1.Link, { href: v.href, disabled: v.disabled, oncreate: v.oncreate, eui: { context: v.context } }, text),
                                    mithril_11.default(Icon_1.Icon, { disabled: true, eui: { type: 'right-open' } })
                                ];
                                return mithril_11.default('li', it);
                            })
                        ]);
                    }
                };
            };
            exports_13("Breadcrumb", Breadcrumb);
            applyClasses = (attrs) => {
                attrs = Component_9.applyClasses(attrs);
                attrs.class.push('eui-breadcrumb');
                return attrs;
            };
        }
    };
});
System.register("eutsiv-ui/widget/Button", ["mithril", "eutsiv-ui", "eutsiv-ui/Component"], function (exports_14, context_14) {
    "use strict";
    var mithril_12, eutsiv_ui_11, Component_10, Button, applyClasses, applyConfig;
    var __moduleName = context_14 && context_14.id;
    return {
        setters: [
            function (mithril_12_1) {
                mithril_12 = mithril_12_1;
            },
            function (eutsiv_ui_11_1) {
                eutsiv_ui_11 = eutsiv_ui_11_1;
            },
            function (Component_10_1) {
                Component_10 = Component_10_1;
            }
        ],
        execute: function () {
            Button = () => {
                return {
                    view: (vn) => {
                        let tag = ((vn.attrs.eui && vn.attrs.eui.tag == 'a') || vn.attrs.href) ? 'a' : 'button';
                        return mithril_12.default(tag, eutsiv_ui_11.applyAttrsModifiers(vn.attrs, applyClasses, applyConfig), vn.children);
                    }
                };
            };
            exports_14("Button", Button);
            applyClasses = (attrs) => {
                attrs = Component_10.applyClasses(attrs);
                attrs.class.push('eui-button');
                return attrs;
            };
            applyConfig = (attrs) => {
                attrs = Component_10.applyConfig(attrs);
                let config = attrs.eui;
                if (config.block)
                    attrs.class.push('eui-block');
                if (config.compact)
                    attrs.class.push('eui-compact');
                if (config.flat)
                    attrs.class.push('eui-flat');
                if (config.spaced)
                    attrs.class.push('eui-spaced');
                return attrs;
            };
        }
    };
});
System.register("eutsiv-ui/widget/form/Field", ["mithril", "eutsiv-ui", "eutsiv-ui/layout/grid/Column"], function (exports_15, context_15) {
    "use strict";
    var mithril_13, eutsiv_ui_12, Column_2, Field, applyClasses;
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [
            function (mithril_13_1) {
                mithril_13 = mithril_13_1;
            },
            function (eutsiv_ui_12_1) {
                eutsiv_ui_12 = eutsiv_ui_12_1;
            },
            function (Column_2_1) {
                Column_2 = Column_2_1;
            }
        ],
        execute: function () {
            Field = () => {
                return {
                    view: (vn) => {
                        return mithril_13.default('div', eutsiv_ui_12.applyAttrsModifiers(vn.attrs, applyClasses, Column_2.applyConfig), vn.children);
                    }
                };
            };
            exports_15("Field", Field);
            applyClasses = (attrs) => {
                attrs = Column_2.applyClasses(attrs);
                attrs.class.push('eui-field');
                return attrs;
            };
        }
    };
});
System.register("eutsiv-ui/widget/Form", ["mithril", "eutsiv-ui", "eutsiv-ui/Component", "eutsiv-ui/widget/form/Field"], function (exports_16, context_16) {
    "use strict";
    var mithril_14, eutsiv_ui_13, Component_11, Field_1, Form, applyClasses;
    var __moduleName = context_16 && context_16.id;
    return {
        setters: [
            function (mithril_14_1) {
                mithril_14 = mithril_14_1;
            },
            function (eutsiv_ui_13_1) {
                eutsiv_ui_13 = eutsiv_ui_13_1;
            },
            function (Component_11_1) {
                Component_11 = Component_11_1;
            },
            function (Field_1_1) {
                Field_1 = Field_1_1;
            }
        ],
        execute: function () {
            exports_16("Field", Field_1.Field);
            Form = () => {
                return {
                    view: (vn) => {
                        return mithril_14.default('form', eutsiv_ui_13.applyAttrsModifiers(vn.attrs, applyClasses), vn.children);
                    }
                };
            };
            exports_16("Form", Form);
            applyClasses = (attrs) => {
                attrs = Component_11.applyClasses(attrs);
                attrs.class.push('eui-form');
                return attrs;
            };
        }
    };
});
System.register("eutsiv-ui/widget/Loading", ["mithril", "eutsiv-ui", "eutsiv-ui/Component"], function (exports_17, context_17) {
    "use strict";
    var mithril_15, eutsiv_ui_14, Component_12, Loading, applyClasses;
    var __moduleName = context_17 && context_17.id;
    return {
        setters: [
            function (mithril_15_1) {
                mithril_15 = mithril_15_1;
            },
            function (eutsiv_ui_14_1) {
                eutsiv_ui_14 = eutsiv_ui_14_1;
            },
            function (Component_12_1) {
                Component_12 = Component_12_1;
            }
        ],
        execute: function () {
            Loading = () => {
                return {
                    view: (vn) => {
                        return mithril_15.default('div', eutsiv_ui_14.applyAttrsModifiers(vn.attrs, applyClasses), [...Array(6).keys()].map(i => { return mithril_15.default('div', { class: `eui-ball eui-ball-${i + 1}` }); }));
                    }
                };
            };
            exports_17("Loading", Loading);
            applyClasses = (attrs) => {
                attrs = Component_12.applyClasses(attrs);
                attrs.class.push('eui-loading');
                return attrs;
            };
        }
    };
});
System.register("eutsiv-ui/widget/Notification", ["mithril", "eutsiv-ui", "eutsiv-ui/Component"], function (exports_18, context_18) {
    "use strict";
    var mithril_16, eutsiv_ui_15, Component_13, Notification, applyClasses;
    var __moduleName = context_18 && context_18.id;
    return {
        setters: [
            function (mithril_16_1) {
                mithril_16 = mithril_16_1;
            },
            function (eutsiv_ui_15_1) {
                eutsiv_ui_15 = eutsiv_ui_15_1;
            },
            function (Component_13_1) {
                Component_13 = Component_13_1;
            }
        ],
        execute: function () {
            Notification = () => {
                return {
                    view: (vn) => {
                        return mithril_16.default('div', eutsiv_ui_15.applyAttrsModifiers(vn.attrs, applyClasses, Component_13.applyConfig), vn.children);
                    }
                };
            };
            exports_18("Notification", Notification);
            applyClasses = (attrs) => {
                attrs = Component_13.applyClasses(attrs);
                attrs.class.push('eui-notification');
                return attrs;
            };
        }
    };
});
System.register("eutsiv-ui/widget/Progress", ["mithril", "eutsiv-ui", "eutsiv-ui/Component"], function (exports_19, context_19) {
    "use strict";
    var mithril_17, eutsiv_ui_16, Component_14, Progress, applyClasses;
    var __moduleName = context_19 && context_19.id;
    return {
        setters: [
            function (mithril_17_1) {
                mithril_17 = mithril_17_1;
            },
            function (eutsiv_ui_16_1) {
                eutsiv_ui_16 = eutsiv_ui_16_1;
            },
            function (Component_14_1) {
                Component_14 = Component_14_1;
            }
        ],
        execute: function () {
            Progress = () => {
                return {
                    view: (vn) => {
                        return mithril_17.default('div', eutsiv_ui_16.applyAttrsModifiers(vn.attrs, applyClasses, Component_14.applyConfig), mithril_17.default('div', { class: 'eui-bar', style: `width:${vn.attrs.eui.percentage}%` }));
                    }
                };
            };
            exports_19("Progress", Progress);
            applyClasses = (attrs) => {
                attrs = Component_14.applyClasses(attrs);
                attrs.class.push('eui-progress');
                return attrs;
            };
        }
    };
});
System.register("eutsiv-ui/widget/Table", ["mithril", "eutsiv-ui", "eutsiv-ui/Component"], function (exports_20, context_20) {
    "use strict";
    var mithril_18, eutsiv_ui_17, Component_15, Table, applyClasses;
    var __moduleName = context_20 && context_20.id;
    return {
        setters: [
            function (mithril_18_1) {
                mithril_18 = mithril_18_1;
            },
            function (eutsiv_ui_17_1) {
                eutsiv_ui_17 = eutsiv_ui_17_1;
            },
            function (Component_15_1) {
                Component_15 = Component_15_1;
            }
        ],
        execute: function () {
            Table = () => {
                return {
                    view: (vn) => {
                        let params = vn.attrs.eui;
                        return mithril_18.default('div', eutsiv_ui_17.applyAttrsModifiers(vn.attrs, applyClasses), mithril_18.default('table', { class: 'eui-table eui-condensed eui-striped' }, [
                            mithril_18.default('thead', [
                                mithril_18.default('tr', params.columns.map((f) => {
                                    return Array.isArray(f.title) ? mithril_18.default('th', { onclick: f.title[1], style: 'cursor:pointer' }, f.title[0]) : mithril_18.default('th', f.title);
                                }))
                            ]),
                            mithril_18.default('tbody', params.data.map((r) => {
                                return mithril_18.default('tr', { key: r[params.key] }, params.columns.map((f) => {
                                    let v = typeof f.content === 'function' ? f.content(r) : r[f.content];
                                    return mithril_18.default('td', v);
                                }));
                            }))
                        ]));
                    }
                };
            };
            exports_20("Table", Table);
            applyClasses = (attrs) => {
                attrs = Component_15.applyClasses(attrs);
                attrs.class.push('eui-table-container');
                return attrs;
            };
        }
    };
});
System.register("eutsiv-ui/widget/calendar/Calendar", ["mithril", "eutsiv-ui", "eutsiv-ui/Component"], function (exports_21, context_21) {
    "use strict";
    var mithril_19, eutsiv_ui_18, Component_16, Calendar, applyClasses;
    var __moduleName = context_21 && context_21.id;
    return {
        setters: [
            function (mithril_19_1) {
                mithril_19 = mithril_19_1;
            },
            function (eutsiv_ui_18_1) {
                eutsiv_ui_18 = eutsiv_ui_18_1;
            },
            function (Component_16_1) {
                Component_16 = Component_16_1;
            }
        ],
        execute: function () {
            Calendar = (vc) => {
                const getDaysInMonth = (month, year) => {
                    return new Date(year, month + 1, 0).getDate();
                };
                let days_labels = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'], months_labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                let days_in_month = getDaysInMonth(vc.attrs.month, vc.attrs.year), first_day_date = new Date(vc.attrs.year, vc.attrs.month, 1), first_day_weekday = first_day_date.getDay();
                let prev_month = vc.attrs.month == 0 ? 11 : vc.attrs.month - 1, prev_year = prev_month == 11 ? vc.attrs.year - 1 : vc.attrs.year, prev_days = getDaysInMonth(prev_month, prev_year);
                const buildHeader = () => {
                    return mithril_19.default('div', { class: 'eui-week-days' }, days_labels.map(v => {
                        return mithril_19.default('div', { class: 'eui-day' }, v);
                    }));
                };
                const calculateGridsDays = () => {
                    let w = [];
                    let n = 1;
                    let c = 1;
                    return [...Array(6 * days_labels.length).keys()].reduce((acc, v) => {
                        if (v < new Date(vc.attrs.year, vc.attrs.month, 1).getDay()) {
                            w.push({ day: (prev_days - first_day_weekday + v + 1), intruder: true });
                        }
                        else if (c > days_in_month) {
                            w.push({ day: n, intruder: true });
                            n++;
                        }
                        else {
                            w.push({ day: c, intruder: false });
                            c++;
                        }
                        if ((v + 1) % days_labels.length == 0) {
                            acc.push(w);
                            w = [];
                        }
                        return acc;
                    }, []);
                };
                return {
                    view: (vn) => {
                        return mithril_19.default('div', eutsiv_ui_18.applyAttrsModifiers(vn.attrs, applyClasses, Component_16.applyConfig), mithril_19.default('h2', months_labels[vn.attrs.month] + ' ' + vn.attrs.year), buildHeader(), mithril_19.default('div', { class: 'eui-calendar-grid' }, calculateGridsDays().map(w => {
                            return mithril_19.default('div', { class: 'eui-calendar-row' }, w.map(d => {
                                let classes = 'eui-day';
                                if (d.intruder)
                                    classes += ' eui-other-month';
                                let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                                let title = new Date(vn.attrs.year, vn.attrs.month, d.day).toLocaleDateString('en-GB', options);
                                return mithril_19.default('div', { class: classes, title }, d.day);
                            }));
                        })));
                    }
                };
            };
            exports_21("Calendar", Calendar);
            applyClasses = (attrs) => {
                attrs = Component_16.applyClasses(attrs);
                attrs.class.push('eui-calendar');
                return attrs;
            };
        }
    };
});
System.register("eutsiv-ui/widget/data/Grid", ["mithril", "eutsiv-ui/Component"], function (exports_22, context_22) {
    "use strict";
    var mithril_20, Component_17, applySort, Resizer, Grid, applyClasses;
    var __moduleName = context_22 && context_22.id;
    return {
        setters: [
            function (mithril_20_1) {
                mithril_20 = mithril_20_1;
            },
            function (Component_17_1) {
                Component_17 = Component_17_1;
            }
        ],
        execute: function () {
            applySort = (d, st) => {
                if (!st.length)
                    return false;
                return st.reduce((a, e, i) => { return e.fn(a, e.order, i); }, [...d]);
            };
            Resizer = {
                view: (vn) => {
                    return mithril_20.default('div', Object.assign({ class: 'resizer' }, vn.attrs));
                }
            };
            Grid = (vni) => {
                let mcols = [];
                let totalWidth = 0;
                let leftScrolled = 0;
                let sortStack = [];
                let sortedData = false;
                const adjustColumnWidth = (cvn, idx) => {
                    if (!mcols[idx]) {
                        mcols[idx] = { sort: {} };
                        mcols[idx].dom = cvn.dom;
                    }
                    if (!mcols[idx].width || mcols[idx].width < cvn.dom.scrollWidth) {
                        let n = cvn.dom.scrollWidth + (parseInt(window.getComputedStyle(cvn.dom, null).getPropertyValue('padding-right').slice(0, -2)) * 2);
                        mcols[idx].width = n;
                        mithril_20.default.redraw();
                    }
                };
                return {
                    view: (vn) => {
                        let params = vn.attrs.eui;
                        let data = sortedData ? sortedData : params.data;
                        let height = params.height || 'auto';
                        return mithril_20.default('div', { class: 'grid', style: `height: ${height}` }, mithril_20.default('div', { class: 'header', style: totalWidth ? `width:${totalWidth}px` : '' }, params.columns.map((col, idx) => {
                            let title = '&nbsp;';
                            if (col.title)
                                title = col.title;
                            if (mcols[idx] && mcols[idx].sort && mcols[idx].sort.fn) {
                                if (mcols[idx].sort.order == 1)
                                    title += ' &#11015;';
                                else if (mcols[idx].sort.order == -1)
                                    title += ' &#11014;';
                                title += ` <small>(${mcols[idx].sort.nth + 1})</small>`;
                            }
                            return [
                                mithril_20.default('div', { class: 'col col-header', style: (mcols[idx] && mcols[idx].width) ? `width:${mcols[idx].width}px` : '',
                                    oncreate: (cvn) => { adjustColumnWidth(cvn, idx); },
                                    onupdate: (cvn) => { adjustColumnWidth(cvn, idx); },
                                    onclick: (e) => {
                                        mcols[idx].sort.fn = col.sort;
                                        if (!mcols[idx].sort.order)
                                            mcols[idx].sort.order = 1;
                                        else if (mcols[idx].sort.order == 1)
                                            mcols[idx].sort.order *= -1;
                                        else
                                            mcols[idx].sort = {};
                                        let meta = mcols[idx].sort.order ? { fn: mcols[idx].sort.fn, order: mcols[idx].sort.order, index: idx } : {};
                                        if (e.ctrlKey) {
                                            let pi = sortStack.findIndex(el => { return el.index == idx; });
                                            if (pi == -1) {
                                                sortStack.unshift(meta);
                                                mcols[idx].sort.nth = sortStack.length - 1;
                                            }
                                            else {
                                                if (meta.fn)
                                                    sortStack[pi] = meta;
                                                else
                                                    sortStack.splice(pi, 1);
                                            }
                                        }
                                        else {
                                            sortStack = meta.fn ? [meta] : [];
                                            mcols.forEach((el, i) => { if (i != idx)
                                                el.sort = {}; });
                                            mcols[idx].sort.nth = 0;
                                        }
                                        sortedData = applySort(params.data, sortStack);
                                    } }, mithril_20.default.trust(title)),
                                mithril_20.default(Resizer, { onmousedown: (e) => {
                                        let marker = document.createElement('div');
                                        let mouseInitPosX = e.clientX;
                                        let colResizerInitPosX = mcols[idx].dom.offsetLeft + mcols[idx].dom.offsetWidth - leftScrolled;
                                        marker.style.position = 'absolute';
                                        marker.style.top = '0';
                                        marker.style.left = `${colResizerInitPosX}px`;
                                        marker.style.width = '1px';
                                        marker.style.height = '100%';
                                        marker.style.zIndex = '1';
                                        marker.style.background = '#e0e0e0';
                                        vn.dom.appendChild(marker);
                                        function disableSelect(event) {
                                            event.preventDefault();
                                        }
                                        function Resize(e) {
                                            let newPosX = colResizerInitPosX + (e.clientX - mouseInitPosX);
                                            mcols[idx].width = newPosX - mcols[idx].dom.offsetLeft + leftScrolled;
                                            marker.style.left = `${newPosX}px`;
                                        }
                                        function stopResize(e) {
                                            vn.dom.removeChild(marker);
                                            let tw = mcols.map(i => { return i.width; }).reduce((acc, i) => { return acc + i + 5; }, 0);
                                            totalWidth = tw > vn.dom.getBoundingClientRect().width ? tw : 0;
                                            mithril_20.default.redraw();
                                            window.removeEventListener('mousemove', Resize, false);
                                            window.removeEventListener('selectstart', disableSelect);
                                            window.removeEventListener('mouseup', stopResize, false);
                                        }
                                        window.addEventListener('selectstart', disableSelect);
                                        window.addEventListener('mousemove', Resize, false);
                                        window.addEventListener('mouseup', stopResize, false);
                                    } })
                            ];
                        })), mithril_20.default('div', { class: 'body', style: 'height: 100%', onscroll: (e) => {
                                e.redraw = false;
                                if (leftScrolled != e.target.scrollLeft) {
                                    vn.dom.querySelector('div.header').style.left = (e.target.scrollLeft * -1) + 'px';
                                    leftScrolled = e.target.scrollLeft;
                                    mithril_20.default.redraw();
                                }
                            },
                            oncreate: (bvn) => {
                                if (height != 'auto')
                                    bvn.dom.style.height = (vn.dom.getBoundingClientRect().height - vn.dom.querySelector('.header').getBoundingClientRect().height) + 'px';
                            } }, data.map(row => {
                            return mithril_20.default('div', { key: row[params.key], class: 'row', style: totalWidth ? `width:${totalWidth}px` : '' }, params.columns.map((col, idx) => {
                                let content = typeof col.content === 'function' ? col.content(row) : row[col.content];
                                return mithril_20.default('div', { class: 'col col-body', style: (mcols[idx] && mcols[idx].width) ? `width:${mcols[idx].width}px` : '', oncreate: (cvn) => {
                                        if (!mcols[idx])
                                            mcols[idx] = {};
                                        if (!mcols[idx].width || mcols[idx].width < cvn.dom.getBoundingClientRect().width) {
                                            mcols[idx].width = cvn.dom.getBoundingClientRect().width;
                                            mithril_20.default.redraw();
                                        }
                                    } }, content);
                            }));
                        })));
                    }
                };
            };
            exports_22("Grid", Grid);
            applyClasses = (attrs) => {
                attrs = Component_17.applyClasses(attrs);
                attrs.class.push('eui-data-grid');
                return attrs;
            };
        }
    };
});
System.register("eutsiv-ui/widget/data/Paging", ["mithril", "eutsiv-ui", "eutsiv-ui/Component", "eutsiv-ui/widget/Button"], function (exports_23, context_23) {
    "use strict";
    var mithril_21, eutsiv_ui_19, Component_18, Button_1, Paging, applyClasses;
    var __moduleName = context_23 && context_23.id;
    return {
        setters: [
            function (mithril_21_1) {
                mithril_21 = mithril_21_1;
            },
            function (eutsiv_ui_19_1) {
                eutsiv_ui_19 = eutsiv_ui_19_1;
            },
            function (Component_18_1) {
                Component_18 = Component_18_1;
            },
            function (Button_1_1) {
                Button_1 = Button_1_1;
            }
        ],
        execute: function () {
            Paging = () => {
                return {
                    view: (vn) => {
                        let params = vn.attrs.eui;
                        let page = params.page || 1;
                        let rows = params.rows.total;
                        let perPage = params.rows.perPage;
                        let last = (rows % perPage > 0) ? (Math.floor(rows / perPage) + 1) : (rows / perPage);
                        let pages = [...Array(last).keys()].map(i => i + 1);
                        return mithril_21.default('nav', eutsiv_ui_19.applyAttrsModifiers(vn.attrs, applyClasses), [
                            mithril_21.default('span', { class: 'eui-status' }, 'Displaying x to x of x'),
                            mithril_21.default('br'),
                            ...pages.map(p => {
                                let ba = { href: params.buildHref(p, perPage), oncreate: mithril_21.default.route.link, eui: { context: p == page ? 'primary' : undefined, spaced: true } };
                                return mithril_21.default(Button_1.Button, ba, p);
                            })
                        ]);
                    }
                };
            };
            exports_23("Paging", Paging);
            applyClasses = (attrs) => {
                attrs = Component_18.applyClasses(attrs);
                attrs.class.push('eui-paging');
                return attrs;
            };
        }
    };
});
System.register("eutsiv-ui/widget/form/ImprovedSelect", [], function (exports_24, context_24) {
    "use strict";
    var ImprovedSelect;
    var __moduleName = context_24 && context_24.id;
    return {
        setters: [],
        execute: function () {
            ImprovedSelect = () => {
            };
            exports_24("ImprovedSelect", ImprovedSelect);
        }
    };
});
System.register("eutsiv-ui/widget/form/Select", [], function (exports_25, context_25) {
    "use strict";
    var Select;
    var __moduleName = context_25 && context_25.id;
    return {
        setters: [],
        execute: function () {
            Select = () => {
            };
            exports_25("Select", Select);
        }
    };
});
System.register("eutsiv-ui/widget/tree/Tree", ["mithril", "eutsiv-ui", "eutsiv-ui/Component"], function (exports_26, context_26) {
    "use strict";
    var mithril_22, eutsiv_ui_20, Component_19, buildTreeNodes, Branch, Leaf, Item, Tree, applyClasses;
    var __moduleName = context_26 && context_26.id;
    return {
        setters: [
            function (mithril_22_1) {
                mithril_22 = mithril_22_1;
            },
            function (eutsiv_ui_20_1) {
                eutsiv_ui_20 = eutsiv_ui_20_1;
            },
            function (Component_19_1) {
                Component_19 = Component_19_1;
            }
        ],
        execute: function () {
            buildTreeNodes = (data, indentation, open) => {
                indentation += 1;
                return data.map(value => {
                    return value.type == 'branch' ?
                        mithril_22.default(Branch, { item: value, indentation, open }) :
                        mithril_22.default(Leaf, { item: value, indentation });
                });
            };
            Branch = (vc) => {
                let open = vc.attrs.open || false;
                let clicked = false;
                return {
                    onbeforeupdate: (vn) => {
                        if (typeof vn.attrs.open == 'boolean')
                            open = vn.attrs.open;
                    },
                    view: (vn) => {
                        let classes = 'eui-branch';
                        classes += open ? ' eui-open' : '';
                        return mithril_22.default('li', {
                            class: classes,
                            onclick: (e) => { e.stopPropagation(); open = !open; clicked = true; }
                        }, [
                            mithril_22.default(Item, { item: vn.attrs.item, indentation: vn.attrs.indentation }),
                            mithril_22.default('ul', buildTreeNodes(vn.attrs.item.children, vn.attrs.indentation, vn.attrs.open))
                        ]);
                    }
                };
            };
            Leaf = {
                view: (vn) => {
                    return mithril_22.default('li', { class: 'eui-leaf' }, mithril_22.default(Item, { item: vn.attrs.item, indentation: vn.attrs.indentation }));
                }
            };
            Item = {
                view: (vn) => {
                    let item = vn.attrs.item, text = typeof item.text == 'function' ? item.text() : item.text, attrs = { style: `padding-left: ${vn.attrs.indentation}em;`, href: undefined, onclick: undefined, oncreate: undefined };
                    if (item.onclick)
                        attrs.onclick = (e) => { e.stopPropagation(); e.preventDefault(); item.onclick(e); };
                    if (item.oncreate)
                        attrs.oncreate = item.oncreate;
                    attrs.href = item.href;
                    return mithril_22.default('a', attrs, text);
                }
            };
            Tree = () => {
                return {
                    view: (vn) => {
                        let params = vn.attrs.eui;
                        return mithril_22.default('ul', eutsiv_ui_20.applyAttrsModifiers(vn.attrs, applyClasses), buildTreeNodes(params.items, 0, params.open));
                    }
                };
            };
            exports_26("Tree", Tree);
            applyClasses = (attrs) => {
                attrs = Component_19.applyClasses(attrs);
                attrs.class.push('eui-tree');
                return attrs;
            };
        }
    };
});
//# sourceMappingURL=eutsiv-ui.js.map