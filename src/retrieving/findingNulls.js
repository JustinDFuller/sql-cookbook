const { query } = require('../')

module.exports = function () {
  return query(`
    select * 
    from EMP 
    where comm is null;`)
}
