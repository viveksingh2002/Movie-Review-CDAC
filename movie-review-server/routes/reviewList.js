const express = require('express')

const router = express.Router()

const pool = require('../db')
const result = require('../utils/result')


router.get('/',(req,res)=>{
    const sql =`select * from reviews`
    pool.query(sql,(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

router.get('/',(req,res)=>{
    const sql =`select * from reviews where user_id= ?`
    pool.query(sql,(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

router.post('/add', async (req, res) => {
    const { movie_id,review,rating,user_id} = req.body
    const sql = `INSERT INTO reviews(movie_id,review,rating,user_id) VALUES(?,?,?,?)`
    try {
        pool.query(sql, [movie_id,review,rating,user_id], (error, data) => {
            res.send(result.createResult(error, data))
        })
    }
    catch (error) {
        res.send(result.createResult(error))
    }
})
module.exports = router 