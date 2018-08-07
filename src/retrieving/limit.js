const { query } = require('../')

module.exports = function () {
  return query('select * from EMP limit 5;')
}
