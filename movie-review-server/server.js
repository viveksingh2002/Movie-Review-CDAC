const express = require('express')
const cors = require('cors')

//user defined modules
const myAuth = require('./utils/auth')
const userRouter = require('./routes/user')
const moviesListRouter = require('./routes/moviesList')
const profileRouter =require('./routes/profile')
const reviewRouter =require('./routes/reviewList')

const app = express()

//middleware
app.use(cors())
app.use(express.json())

app.use(myAuth)
app.use('/user', userRouter)
app.use('/moviesList',moviesListRouter)
app.use('/profile',profileRouter)
app.use('/reviewList',reviewRouter)
app.listen(4000, 'localhost', () => {
    console.log('server started at port 4000')
})