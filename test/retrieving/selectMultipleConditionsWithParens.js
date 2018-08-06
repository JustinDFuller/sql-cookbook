const test = require('ava')

const includesIds = require('../../helpers/includesIds')
const selectMultipleConditionsWithParens = require('../../src/retrieving/selectMultipleConditionsWithParens')

test('selectMultipleConditionsWithParens()', async function (t) {
  const res = await selectMultipleConditionsWithParens()

  includesIds(t, res, [7876, 7369])
})
