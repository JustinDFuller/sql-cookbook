const _ = require('lodash')

function includesIds (t, rows, expected) {
  t.is(rows.length, expected.length)

  _.forEach(rows, row => t.true(expected.includes(row.EMPNO)))
}

module.exports = includesIds
