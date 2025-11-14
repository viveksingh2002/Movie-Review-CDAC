const express = require('express')

const router = express.Router()

const pool = require('../db')
const result = require('../utils/result')


router.get('/',(req,res)=>{
    const sql =`select * from movies`
    pool.query(sql,(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

router.post('/add', async (req, res) => {
    const { title ,release_date} = req.body
    const sql = `INSERT INTO movies(title ,release_date) VALUES(?,?)`
    try {
        pool.query(sql, [title ,release_date], (error, data) => {
            res.send(result.createResult(error, data))
        })
    }
    catch (error) {
        res.send(result.createResult(error))
    }
})
module.exports = router 