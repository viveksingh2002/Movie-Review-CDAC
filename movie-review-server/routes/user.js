const express = require('express')
const  cryptoJs= require ('crypto-js')
const jwt = require('json-web-token')

const pool =require('../db')
const result= require('../utils/result')

const router = express.Router()

// router.post('/signin',(req,res)=>{
//     const{email ,password}=req.body
//     const encryptPassword = String(cryptoJs.SHA256(password))
//   const sql = `SELECT * FROM user WHERE email = ? AND password = ?`
//   pool.query(sql, [email, encryptPassword], (error, data) => {
//     if (data) {
//       if (data.length != 0) {
//         const payload = {
//           userId: data[0].id,
//         }
//         const token = jwt.sign(payload, config.secret)
//         const body = {
//           token: token,
//           firstName: data[0].firstName,
//           lastName: data[0].lastName,
//         }
//         res.send(result.createSuccess(body))
//       } else res.send(result.createFailed('Invalid email or password'))
//     } else res.send(result.createFailed(error))
//   })

// })

router.post('/singup',(req,res)=>{
    const {first_name ,last_name ,email,password,mobile,birth} =req.body
    const encryptPassword = String(cryptoJs.SHA256(password))
  const sql = `INSERT INTO users(first_name ,last_name ,email,password,mobile,birth) VALUES(?,?,?,?,?,?)`
  pool.query(
    sql,
    [first_name ,last_name ,email,encryptPassword,mobile ,birth ],
    (error, data) => {
      res.send(result.createResult(error, data))
    }
  )
})
module.exports = router