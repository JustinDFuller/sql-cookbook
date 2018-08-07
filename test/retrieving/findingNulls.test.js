const test = require('ava')

const includesIds = require('../../helpers/includesIds')
const findingNulls = require('../../src/retrieving/findingNulls')

test('findingNulls()', async function (t) {
  const res = await findingNulls()

  includesIds(t, res, [7369, 7566, 7698, 7788, 7839, 7876, 7900, 7902, 7934, 7782])
})
