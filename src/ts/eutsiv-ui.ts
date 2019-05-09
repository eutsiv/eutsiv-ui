const applyAttrsModifiers = (attrs, ...fn) => {
  
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

  // copy
  attrs = { ...attrs }
  
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
  HU: 'HU'
}

export { applyAttrsModifiers, Sizes }