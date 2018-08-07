const { query } = require('../')

module.exports = function () {
  return query(`
    select * 
    from EMP 
    order by rand() 
    limit 5;`)
}
