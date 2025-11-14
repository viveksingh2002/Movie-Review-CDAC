const express = require('express')

const router = express.Router()

const pool = require('../db')
const result = require('../utils/result')

router.get('/',(req,res)=>{
    const {user_id}=req.body    
    const sql =`select * from reviews where user_id= ?`
    pool.query(sql,[user_id],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

module.exports = router