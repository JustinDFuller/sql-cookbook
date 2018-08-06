const test = require('ava')

const includesIds = require('../../helpers/includesIds')
const selectMultipleConditions = require('../../src/retrieving/selectMultipleConditions')

test('selectMultipleConditions()', async function (t) {
  const res = await selectMultipleConditions()

  includesIds(t, res, [7782, 7839, 7934, 7499, 7521, 7844, 7876, 7369, 7654])
})
