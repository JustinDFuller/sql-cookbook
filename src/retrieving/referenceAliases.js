const { query } = require('../')

module.exports = function () {
  return query(`
    select * FROM (
      select sal as salary, comm as commission 
        from EMP
    ) x
    where salary < 5000;`)
}
