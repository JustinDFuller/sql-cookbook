const test = require('ava')

const limit = require('../../src/retrieving/limit')

test('limit()', async function (t) {
  const res = await limit()

  t.is(res.length, 5)

  const first = Object.assign({}, res[0])

  t.deepEqual(first, {
    EMPNO: 7369,
    ENAME: 'SMITH',
    JOB: 'CLERK',
    MGR: 7902,
    SAL: 800,
    COMM: null,
    DEPTNO: 20,
    HIREDATE: '1980-12-17T05:00:00.000Z'
  })
})
