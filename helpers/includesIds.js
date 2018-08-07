const _ = require('lodash')

function includesIds (t, rows, expected) {
  const ids = _.sortBy(_.map(rows, 'EMPNO'))
  t.deepEqual(_.sortBy(expected), ids)
  t.is(rows.length, expected.length)
}

module.exports = includesIds
