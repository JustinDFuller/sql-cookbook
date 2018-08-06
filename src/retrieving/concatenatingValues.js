const { query } = require('../')

module.exports = function () {
  return query(`
    select concat(ename, ' WORKS AS A ', job) as msg
      from EMP
    where deptno=10;`)
}
