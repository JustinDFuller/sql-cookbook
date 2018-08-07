const { query } = require('../')

module.exports = function () {
  return query('select coalesce(comm, 0) as comm from EMP;')
}
