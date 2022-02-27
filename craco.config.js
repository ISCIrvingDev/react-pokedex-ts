const path = require('path')

const joinSrc = (s/*: string */) => path.resolve(__dirname, 'src', s)

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@app': joinSrc('application'),
      '@mod': joinSrc('modules')
    }
  }
}
