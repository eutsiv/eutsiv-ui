import m from 'mithril'


const applyAttrsModifiers = (a, ...fn) => {
  
  // copy
  let attrs = { ...a }

  // ensure eui is an object
  attrs.eui = { ...attrs.eui }

  // if not defined, create an empty array
  !Array.isArray(attrs.class) && ( attrs.class = attrs.class ? [attrs.class] : [] )
  // init style object
  !attrs.style && ( attrs.style = {} )

  // apply modifiers
  fn.forEach(e => {
    attrs = e(attrs)
  })

  // special param route, if the component has a route, when clicked (onclick) 
  // the route will be called with m.route.set (mithril) and href will be discarded
  if(attrs.route) {
    
    let oc = attrs.onclick
    let route = attrs.route
    let params = attrs.params

    if((/\?/).test(route) && params) throw new SyntaxError('Route contains a ? so params should not be defined')

    attrs.href = params ? `#!${route}?` + m.buildQueryString(params) : `#!${route}`
    
    attrs.onclick = (e) => {
      if(oc) oc(e)
      e.preventDefault()
      m.route.set(route, params)
    }

  }

  // if class is an array, join the classes
  Array.isArray(attrs.class) && ( attrs.class = attrs.class.length ? attrs.class.join(' '): undefined )

  // if style is empty
  if(Object.keys(attrs.style).length === 0 && attrs.style.constructor === Object) attrs.style = undefined
  
  // delete some special properties to not polute DOM
  attrs.eui = undefined
  attrs.params = undefined
  attrs.route = undefined
  
  return attrs

}


const pipeAttrsHandlers = (...fn) => {
  
  return (a) => {

    // copy
    let attrs = { ...a }

    // ensure eui is an object
    attrs.eui = { ...attrs.eui }

    // if not defined, create an empty array
    !Array.isArray(attrs.class) && ( attrs.class = attrs.class ? [attrs.class] : [] )
    // init style object
    !attrs.style && ( attrs.style = {} )

    // apply modifiers
    fn.forEach(e => {
      attrs = e(attrs)
    })

    // special param route, if the component has a route, when clicked (onclick) 
    // the route will be called with m.route.set (mithril) and href will be discarded
    if(attrs.route) {
      
      let oc = attrs.onclick
      let route = attrs.route
      let params = attrs.params

      if((/\?/).test(route) && params) throw new SyntaxError('Route contains a ? so params should not be defined')

      attrs.href = params ? `#!${route}?` + m.buildQueryString(params) : `#!${route}`
      
      attrs.onclick = (e) => {
        if(oc) oc(e)
        e.preventDefault()
        m.route.set(route, params)
      }

    }

    // if class is an array, join the classes
    Array.isArray(attrs.class) && ( attrs.class = attrs.class.length ? attrs.class.join(' '): undefined )

    // if style is empty
    if(Object.keys(attrs.style).length === 0 && attrs.style.constructor === Object) attrs.style = undefined
    
    // delete some special properties to not polute DOM
    attrs.eui = undefined
    attrs.params = undefined
    attrs.route = undefined
    
    return attrs

  }

}


const Sizes = {
  XS: 'XS',
  SM: 'SM',
  DE: 'DE',
  LG: 'LG',
  XL: 'XL',
  HU: 'HU',
  fontSize: {
    XS: '0.64em',
    SM: '0.82em',
    DE: '1.00em',
    LG: '1.32em',
    XL: '1.64em',
    HU: '2.28em'
  },
  unitGrid: {
    XS: '2px',
    SM: '4px',
    DE: '8px',
    LG: '12px',
    XL: '16px',
    HU: '24px'
  }
}

export { applyAttrsModifiers, pipeAttrsHandlers, Sizes }