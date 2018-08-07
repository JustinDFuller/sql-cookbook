const _ = require('lodash')
const test = require('ava')

const transformingNulls = require('../../src/retrieving/transformingNulls')

test('transformingNulls()', async function (t) {
  const res = await transformingNulls()

  t.plan(28)

  _.forEach(res, (row) => {
    t.true(typeof row.comm === 'number')
    t.false(isNaN(row.comm))
  })
})
