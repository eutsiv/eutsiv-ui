/// <reference types="mithril" />
declare module "eutsiv-ui" {
    const applyAttrsModifiers: (attrs: any, ...fn: any[]) => any;
    const Sizes: {
        XS: string;
        SM: string;
        DE: string;
        LG: string;
        XL: string;
        HU: string;
    };
    export { applyAttrsModifiers, Sizes };
}
declare module "eutsiv-ui/Component" {
    import m from 'mithril';
    const Component: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    const applyClasses: (attrs: any) => any;
    const applyConfig: (attrs: any) => any;
    const applyConfigFit: (attrs: any) => any;
    export { Component, applyClasses, applyConfig, applyConfigFit };
}
declare module "eutsiv-ui/Viewport" {
    import m from 'mithril';
    const Viewport: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Viewport };
}
declare module "eutsiv-ui/components/form/Select" {
    import m from 'mithril';
    const Select: () => {
        oninit: (vnode: any) => void;
        onupdate: (vnode: any) => void;
        view: (vnode: any) => m.Vnode<any, any>;
    };
    export { Select };
}
declare module "eutsiv-ui/layout/grid/Grid" {
    import m from 'mithril';
    const Grid: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Grid };
}
declare module "eutsiv-ui/layout/grid/Row" {
    import m from 'mithril';
    const Row: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Row };
}
declare module "eutsiv-ui/layout/grid/Column" {
    import m from 'mithril';
    const Column: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    const applyClasses: (attrs: any) => any;
    const applyConfig: (attrs: any) => any;
    export { applyClasses, applyConfig, Column };
}
declare module "eutsiv-ui/layout/Grid" {
    import { Grid } from "eutsiv-ui/layout/grid/Grid";
    import { Row } from "eutsiv-ui/layout/grid/Row";
    import { Column } from "eutsiv-ui/layout/grid/Column";
    export { Grid, Row, Column };
}
declare module "eutsiv-ui/layout/Gutter" {
    import m from 'mithril';
    const Gutter: () => {
        view: ({ attrs, children }: {
            attrs: any;
            children: any;
        }) => m.Vnode<any, any>;
    };
    export { Gutter };
}
declare module "eutsiv-ui/layout/VSpace" {
    import m from 'mithril';
    const VSpace: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { VSpace };
}
declare module "eutsiv-ui/widget/Link" {
    import m from 'mithril';
    const Link: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Link };
}
declare module "eutsiv-ui/widget/Icon" {
    import m from 'mithril';
    const Icon: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Icon };
}
declare module "eutsiv-ui/widget/Breadcrumb" {
    import m from 'mithril';
    const Breadcrumb: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Breadcrumb };
}
declare module "eutsiv-ui/widget/Button" {
    import m from 'mithril';
    const Button: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Button };
}
declare module "eutsiv-ui/widget/form/Field" {
    import m from 'mithril';
    const Field: () => {
        view: ({ attrs, children }: {
            attrs: any;
            children: any;
        }) => m.Vnode<any, any>;
    };
    export { Field };
}
declare module "eutsiv-ui/widget/Form" {
    import m from 'mithril';
    import { Field } from "eutsiv-ui/widget/form/Field";
    const Form: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Form, Field };
}
declare module "eutsiv-ui/widget/Loading" {
    import m from 'mithril';
    const Loading: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Loading };
}
declare module "eutsiv-ui/widget/Notification" {
    import m from 'mithril';
    const Notification: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Notification };
}
declare module "eutsiv-ui/widget/Progress" {
    import m from 'mithril';
    const Progress: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Progress };
}
declare module "eutsiv-ui/widget/Table" {
    import m from 'mithril';
    const Table: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Table };
}
declare module "eutsiv-ui/widget/calendar/Calendar" {
    import m from 'mithril';
    const Calendar: (vc: any) => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Calendar };
}
declare module "eutsiv-ui/widget/data/Grid" {
    import m from 'mithril';
    const Grid: (vni: any) => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Grid };
}
declare module "eutsiv-ui/widget/data/Paging" {
    import m from 'mithril';
    const Paging: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Paging };
}
declare module "eutsiv-ui/widget/form/ImprovedSelect" {
    const ImprovedSelect: () => void;
    export { ImprovedSelect };
}
declare module "eutsiv-ui/widget/form/Select" {
    const Select: () => void;
    export { Select };
}
declare module "eutsiv-ui/widget/tree/Tree" {
    import m from 'mithril';
    const Tree: () => {
        view: ({ attrs }: {
            attrs: any;
        }) => m.Vnode<any, any>;
    };
    export { Tree };
}
