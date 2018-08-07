const _ = require('lodash')
const test = require('ava')

const conditionalLogic = require('../../src/retrieving/conditionalLogic')

test('conditionalLogic()', async function (t) {
  const res = await conditionalLogic()

  t.plan(14)

  _.forEach(res, (row) => {
    if (row.sal <= 2000) {
      t.is(row.status, 'UNDERPAID')
    } else if (row.sal >= 4000) {
      t.is(row.status, 'OVERPAID')
    } else {
      t.is(row.status, 'OK')
    }
  })
})
