const test = require('ava')

const randomRows = require('../../src/retrieving/randomRows')

test('randomRows()', async function (t) {
  const res = await randomRows()

  t.is(res.length, 5)
})
