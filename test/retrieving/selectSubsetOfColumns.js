const test = require('ava')

const selectSubsetOfColumns = require('../../src/retrieving/selectSubsetOfColumns')

test('selectSubsetOfColumns()', async function (t) {
  const res = await selectSubsetOfColumns()

  t.is(res.length, 14)

  const first = Object.assign({}, res[0])

  t.deepEqual(first, {
    ENAME: 'SMITH',
    SAL: 800,
    DEPTNO: 20
  })
})
