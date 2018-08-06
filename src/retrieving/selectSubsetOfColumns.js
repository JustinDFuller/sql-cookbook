const { query } = require('../')

module.exports = function () {
  return query('select ENAME, DEPTNO, SAL from EMP;')
}
