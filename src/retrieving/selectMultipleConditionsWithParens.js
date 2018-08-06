const { query } = require('../')

module.exports = function () {
  return query(`select * from EMP 
    where 
        (deptno = 10
        or comm is not null
        or sal <= 2000) 
        and deptno=20;`)
}
