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

  // if class is an array, join the classes
  Array.isArray(attrs.class) && ( attrs.class = attrs.class.length ? attrs.class.join(' '): undefined )

  // if style is empty
  if(Object.keys(attrs.style).length === 0 && attrs.style.constructor === Object) attrs.style = undefined
  
  // delete eui config container
  attrs.eui = undefined
  
  return attrs

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

export { applyAttrsModifiers, Sizes }