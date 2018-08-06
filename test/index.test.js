const test = require('ava')

const { connection, query, setup } = require('../src')

test('It exports a connection object', (t) => {
  t.is(typeof connection, 'object')
})

test('It exports a query function', (t) => {
  t.is(typeof query, 'function')
})

test('It exports a setup function', (t) => {
  t.is(typeof setup, 'function')
})

test('Setup function returns initial values', async (t) => {
  const res = await setup()

  t.is(res.length, 14)

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
