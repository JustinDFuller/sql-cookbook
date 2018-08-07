const { query } = require('../')

module.exports = function () {
  return query(`
    select ename, sal,
        case when sal <= 2000 then 'UNDERPAID'
             when sal >= 4000 then 'OVERPAID'
             else 'OK'
        end as status
    from EMP;`)
}
