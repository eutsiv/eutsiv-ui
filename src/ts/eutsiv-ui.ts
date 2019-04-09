const applyAttrsModifiers = (attrs, ...fn) => {
  
  // ensure eui is an object
  attrs.eui = { ...attrs.eui }

  // if not defined, create an empty array
  !Array.isArray(attrs.class) && ( attrs.class = attrs.class ? [attrs.class] : [] )
  !Array.isArray(attrs.style) && ( attrs.style = attrs.style ? [attrs.style] : [] )

  // apply modifiers
  fn.forEach(e => {
    attrs = e(attrs)
  })

  // if class is an array, join the classes
  Array.isArray(attrs.class) && ( attrs.class = attrs.class.length ? attrs.class.join(' '): undefined )
  
  // if style is an array, join the styles
  Array.isArray(attrs.style) && ( attrs.style = attrs.style.length ? attrs.style.join(';') : undefined )

  // copy
  attrs = { ...attrs }
  
  // delete eui config container
  attrs.eui = undefined
  
  return attrs

}

const Sizes = {
  XS: "0.72em",
  SM: "0.88em",
  DE: "1.00em",
  LG: "1.28em",
  XL: "1.52em",
  HU: "1.76em"
}

export { applyAttrsModifiers, Sizes }