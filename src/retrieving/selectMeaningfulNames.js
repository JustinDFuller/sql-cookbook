const { query } = require('../')

module.exports = function () {
  return query('select sal as salary, comm as commission from EMP;')
}
