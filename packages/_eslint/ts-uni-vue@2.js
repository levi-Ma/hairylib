const basic = require('./config/basic')
const typescript = require('./config/typescript')
const vue = require('./config/vue@2')
const uni = require('./config/uni')
const vueBasic = require('./config/vue-basic')
const _ = require('lodash')

module.exports = {
  ..._.merge(basic, typescript, vueBasic, vue, uni),
  extends: _.concat(basic.extends, typescript.extends, vueBasic.extends, vue.extends)
}
