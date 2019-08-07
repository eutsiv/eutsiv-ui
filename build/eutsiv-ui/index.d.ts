/// <reference types="mithril" />
declare module "eutsiv-ui" {
    const applyAttrsModifiers: (a: any, ...fn: any[]) => any;
    const Sizes: {
        XS: string;
        SM: string;
        DE: string;
        LG: string;
        XL: string;
        HU: string;
        fontSize: {
            XS: string;
            SM: string;
            DE: string;
            LG: string;
            XL: string;
            HU: string;
        };
        unitGrid: {
            XS: string;
            SM: string;
            DE: string;
            LG: string;
            XL: string;
            HU: string;
        };
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
    const applyConfigContext: (attrs: any) => any;
    const applyConfigFit: (attrs: any) => any;
    export { Component, applyClasses, applyConfig, applyConfigContext, applyConfigFit };
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
        oncreate: (vnode: any) => void;
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
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Gutter };
}
declare module "eutsiv-ui/widget/Badge" {
    import m from 'mithril';
    const Badge: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Badge };
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
declare module "eutsiv-ui/widget/form/Checkbox" {
    import m from 'mithril';
    const Checkbox: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Checkbox };
}
declare module "eutsiv-ui/widget/form/Field" {
    import m from 'mithril';
    const Field: () => {
        view: (vn: any) => m.Vnode<{}, {}>;
    };
    export { Field };
}
declare module "eutsiv-ui/widget/form/Label" {
    import m from 'mithril';
    const Label: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Label };
}
declare module "eutsiv-ui/widget/form/Radio" {
    import m from 'mithril';
    const Radio: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Radio };
}
declare module "eutsiv-ui/widget/Form" {
    import m from 'mithril';
    import { Checkbox } from "eutsiv-ui/widget/form/Checkbox";
    import { Field } from "eutsiv-ui/widget/form/Field";
    import { Label } from "eutsiv-ui/widget/form/Label";
    import { Radio } from "eutsiv-ui/widget/form/Radio";
    const Form: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Form, Checkbox, Field, Label, Radio };
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
declare module "eutsiv-ui/widget/Tabs" {
    import m from 'mithril';
    const Tabs: () => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Tabs };
}
declare module "eutsiv-ui/widget/calendar/Calendar" {
    import m from 'mithril';
    const Calendar: ({ attrs }: {
        attrs: any;
    }) => {
        view: (vn: any) => m.Vnode<any, any>;
    };
    export { Calendar };
}
declare module "eutsiv-ui/widget/data/Grid" {
    import m from 'mithril';
    const Grid: () => {
        oncreate: (vn: any) => void;
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
declare module "eutsiv-ui/widget/form/MonthPicker" {
    import m from 'mithril';
    const MonthPicker: () => {
        view: () => m.Vnode<any, any>[];
    };
    export { MonthPicker };
}
declare module "eutsiv-ui/widget/form/Select" {
    const Select: () => void;
    export { Select };
}
declare module "eutsiv-ui/widget/tree/Tree" {
    import m from 'mithril';
    const Tree: () => {
        onbeforeupdate: () => void;
        view: ({ attrs }: {
            attrs: any;
        }) => m.Vnode<any, any>;
    };
    export { Tree };
}
