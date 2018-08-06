const test = require('ava')

const includesIds = require('../../helpers/includesIds')
const selectWhere = require('../../src/retrieving/selectWhere')

test('selectWhere()', async function (t) {
  const res = await selectWhere()

  includesIds(t, res, [7782, 7839, 7934])
})
