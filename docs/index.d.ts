/// <reference types="mithril" />
declare module "About" {
    import m from 'mithril';
    let View: {
        view: () => m.Vnode<{}, {}>;
    };
    export { View };
}
declare module "Color" {
    import m from 'mithril';
    let View: {
        view: () => m.Vnode<{}, {}>;
    };
    export { View };
}
declare module "index" {
    import m from 'mithril';
    let View: () => {
        view: () => m.Vnode<any, any>;
    };
    export { View };
}
declare module "wrapper" {
    let wrapper: () => void;
    export { wrapper };
}
declare module "resources/SourceView" {
    import m from 'mithril';
    let SourceView: {
        view: (vn: any) => m.Vnode<any, any>;
        oncreate: (vn: any) => void;
    };
    export { SourceView };
}
declare module "resources/Section" {
    import m from 'mithril';
    let Section: {
        view: (vn: any) => m.Vnode<{}, {}>;
    };
    export { Section };
}
declare module "layout/Grid" {
    import m from 'mithril';
    let View: {
        view: () => m.Vnode<{
            documentation: m.Vnode<any, any>[];
            source: string;
        }, {}>[];
    };
    export { View };
}
declare module "layout/Gutter" {
    import m from 'mithril';
    let View: {
        view: () => m.Vnode<{
            documentation: m.Vnode<any, any>[];
            source: string;
        }, {}>[];
    };
    export { View };
}
declare module "widget/Breadcrumb" {
    import m from 'mithril';
    let View: {
        view: () => m.Vnode<{
            documentation: m.Vnode<any, any>[];
            source: string;
        }, {}>[];
    };
    export { View };
}
declare module "widget/Button" {
    import m from 'mithril';
    let View: {
        view: () => m.Vnode<{
            documentation: m.Vnode<any, any>[];
            source: string;
        }, {}>[];
    };
    export { View };
}
declare module "widget/Form" {
    import m from 'mithril';
    let View: {
        view: () => m.Vnode<{
            documentation: m.Vnode<any, any>[];
            source: string;
        }, {}>[];
    };
    export { View };
}
declare module "widget/Icon" {
    import m from 'mithril';
    let View: {
        view: () => m.Vnode<{
            documentation: (m.Vnode<any, any> | m.Vnode<{
                eui: {
                    type: string;
                    spin: boolean;
                };
            }, {}>[])[];
            source: string;
        }, {}>[];
    };
    export { View };
}
declare module "widget/Link" {
    import m from 'mithril';
    let View: {
        view: () => m.Vnode<{
            documentation: m.Vnode<any, any>[];
            source: string;
        }, {}>[];
    };
    export { View };
}
declare module "widget/Loading" {
    import m from 'mithril';
    let View: {
        view: () => m.Vnode<{
            documentation: m.Vnode<any, any>[];
            source: string;
        }, {}>[];
    };
    export { View };
}
declare module "widget/Notification" {
    import m from 'mithril';
    let View: {
        view: () => m.Vnode<{
            documentation: m.Vnode<any, any>[];
            source: string;
        }, {}>[];
    };
    export { View };
}
declare module "widget/Progress" {
    import m from 'mithril';
    let View: {
        view: () => m.Vnode<{
            documentation: m.Vnode<any, any>[];
            source: string;
        }, {}>[];
    };
    export { View };
}
declare module "widget/Table" {
    import m from 'mithril';
    let View: {
        view: () => m.Vnode<{
            documentation: m.Vnode<any, any>[];
            source: string;
        }, {}>[];
    };
    export { View };
}
declare module "widget/calendar/Calendar" {
    import m from 'mithril';
    let View: {
        view: () => m.Vnode<{
            documentation: m.Vnode<any, any>[];
            source: string;
        }, {}>[];
    };
    export { View };
}
declare module "widget/data/Grid" {
    import m from 'mithril';
    let View: {
        view: () => m.Vnode<{
            documentation: m.Vnode<any, any>[];
            source: string;
        }, {}>[];
    };
    export { View };
}
declare module "widget/data/Paging" {
    import m from 'mithril';
    let View: {
        view: () => m.Vnode<{
            documentation: m.Vnode<any, any>[];
            source: string;
        }, {}>[];
    };
    export { View };
}
declare module "widget/tree/Tree" {
    import m from 'mithril';
    let View: {
        view: () => m.Vnode<{
            documentation: m.Vnode<any, any>[];
            source: string;
        }, {}>[];
    };
    export { View };
}
