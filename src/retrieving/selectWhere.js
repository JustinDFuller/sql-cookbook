const { query } = require('../')

module.exports = function () {
  return query(`select * from EMP where deptno = 10;`)
}
