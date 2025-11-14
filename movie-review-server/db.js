const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'D1_92994_Avinash',
    password: 'manager',
    database: 'movies_review_db'
})

module.exports = pool