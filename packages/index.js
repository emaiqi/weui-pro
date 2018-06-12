import Grid from './grid/index.js'

console.warn(
  'You are using a whole package of weui-pro, ' +
  'please use https://www.npmjs.com/package/babel-plugin-transform-imports to reduce app bundle size.',
  'warn'
)

const components = [
  Grid
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  ...components
}

module.exports.default = module.exports
