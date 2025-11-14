const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// userdefined modules
const pool = require('../db')
const config = require('../utils/config')
const result = require('../utils/result')

const router = express.Router()

router.post('/register', async (req, res) => {
    const { first_name,last_name, email, password, mobile, birth } = req.body
    const sql = `INSERT INTO users(first_name,last_name,email,password,mobile,birth) VALUES(?,?,?,?,?,?)`
    try {
        const hashpassword = await bcrypt.hash(password, config.saltRounds)
        pool.query(sql, [first_name,last_name, email, hashpassword, mobile,birth], (error, data) => {
            res.send(result.createResult(error, data))
        })
    }
    catch (error) {
        res.send(result.createResult(error))
    }
})

router.post('/login', (req, res) => {
    const { email, password } = req.body
    const sql = `SELECT * FROM users WHERE email = ?`
    pool.query(sql, [email], async (error, data) => {
        if (data != '') {
            const dbUser = data[0]
            const userValid = await bcrypt.compare(password, dbUser.password)
            if (userValid) {
                // body part inside the jwt that needs to be encrypted
                const payload = {
                    uid: dbUser.uid
                }
                // create the jwt token
                const token = jwt.sign(payload, config.secret)
                const user = {
                    token: token,
                    name: dbUser.first_name,
                    email: dbUser.email
                }
                res.send(result.createResult(error, user))
            }
            else
                res.send(result.createResult('Invalid Password'))
        }
        else
            res.send(result.createResult('Invalid Email'))
    })
})


router.delete('/', (req, res) => {
    const user_id = req.user_id
    const sql = `DELETE FROM users WHERE user_id = ?`
    pool.query(sql, [user_id], (error, data) => res.send(result.createResult(error, data)))
})


module.exports = router