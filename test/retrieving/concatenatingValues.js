const _ = require('lodash')
const test = require('ava')

const concatenatingValues = require('../../src/retrieving/concatenatingValues')

test('concatenatingValues()', async function (t) {
  const res = await concatenatingValues()

  t.deepEqual(res, [
    {
      msg: 'clark works as a manager'.toUpperCase()
    },
    {
      msg: 'king works as a president'.toUpperCase()
    },
    {
      msg: 'miller works as a clerk'.toUpperCase()
    }
  ])
})
