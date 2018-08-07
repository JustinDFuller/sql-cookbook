const test = require('ava')

const includesIds = require('../../helpers/includesIds')
const matchingPatterns = require('../../src/retrieving/matchingPatterns')

test('matchingPatterns()', async function (t) {
  const res = await matchingPatterns()

  includesIds(t, res, [7369, 7566, 7782, 7839, 7934])
})
