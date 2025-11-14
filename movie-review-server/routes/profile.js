const express = require('express')

const router = express.Router()

const pool = require('../db')
const result = require('../utils/result')


// router.get('/',(req,res)=>{
//     const sql =`select * from users where user_id = ?`
//     pool.query(sql,[req.headers.user_id],(error,data)=>{
//         res.send(result.createResult(error,data))
//     })
// })

// router.put('/update', async (req, res) => {
//     const { first_name,last_name, email, password, mobile, birth} = req.body
//     const sql = `update users(title ,release_date) VALUES(?,?)`
//     try {
//         pool.query(sql, [title ,release_date], (error, data) => {
//             res.send(result.createResult(error, data))
//         })
//     }
//     catch (error) {
//         res.send(result.createResult(error))
//     }
// })
module.exports = router 