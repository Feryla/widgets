import hyper from 'hyperhtml/umd'

import { bootstrap as boot } from '../esm/decorators/component.js'
import { hyper as renderer } from '../esm/renderers/hyper.js'

export { Component } from '../esm/decorators/component.js'
export { Attribute } from '../esm/decorators/attribute.js'
export { Template } from '../esm/decorators/template.js'

export * from '../esm/utils.js'

export function bootstrap(plugins=[]) {
  return boot(plugins.concat([ renderer(hyper) ]))
}
