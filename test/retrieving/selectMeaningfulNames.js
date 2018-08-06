const test = require('ava')

const selectMeaningfulNames = require('../../src/retrieving/selectMeaningfulNames')

test('selectMeaningfulNames()', async function (t) {
  const res = await selectMeaningfulNames()

  t.is(res.length, 14)

  const first = Object.assign({}, res[0])

  t.deepEqual(first, {
    salary: 800,
    commission: null
  })
})
