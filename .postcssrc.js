// https://github.com/michael-ciniawsky/postcss-load-config

var plugins = {}

if (process.env.NODE_ENV !== 'document') {
  plugins = {
    "postcss-mpvue-wxss": {}
  }
}

module.exports = {
  "plugins": {
    ...plugins
  }
}
