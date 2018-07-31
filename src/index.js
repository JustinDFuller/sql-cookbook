const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'dev'
})

connection.connect()

function query (queryString) {
  return new Promise((resolve, reject) => {
    connection.query(queryString, function (error, results, fields) {
      if (error) return reject(error)
      return resolve(results)
    })
  })
}

async function setup () {
  await query('DROP TABLE IF EXISTS emp;')
  await query('CREATE TABLE emp (EMPNO int, ENAME varchar(250), JOB varchar(250), MGR int, HIREDATE date, SAL int, COMM int, DEPTNO int);')
  await query(`INSERT INTO emp (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO) VALUES (7360, 'SMITH', 'CLERK', 7902, '1980-12-17', 800, NULL, 20);`)
  return query('SELECT * FROM emp;')
}

module.exports = {
  connection,
  query,
  setup
}
