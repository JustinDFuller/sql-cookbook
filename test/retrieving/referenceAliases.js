const test = require('ava')

const referenceAliases = require('../../src/retrieving/referenceAliases')

test('referenceAliases()', async function (t) {
  const res = await referenceAliases()

  t.is(res.length, 13)

  const first = Object.assign({}, res[0])

  t.deepEqual(first, {
    salary: 800,
    commission: null
  })
})
