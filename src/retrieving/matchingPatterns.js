const { query } = require('../')

module.exports = function () {
  return query(`
    select EMPNO, ENAME, JOB 
      from EMP
    where 
      deptno in (10,20)
      and (ENAME like '%I%' or JOB like '%ER');
  `)
}
