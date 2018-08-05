const { query } = require('../')

module.exports = function () {
  return query('SELECT * FROM EMP;')
}
