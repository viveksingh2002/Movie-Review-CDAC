const express = require('express')
const cors = require('cors')


const userRouter = require('./routes/user')
const reviewRouter = require('./routes/reviewList')
const profileRouter = require('./routes/profile')
const myReviewRouter = require('./routes/myReviewList')
const movieRouter = require('./routes/moviesList')
//creating the express object
const app = express()

//add the middlewares
app.use(cors())
app.use(express.json())
// app.use(authorization)

app.use('/user', userRouter)
// app.use('/reviewList', reviewRouter)
// app.use('/profile', profileRouter)
// app.use('/myReviewList', myReviewRouter)
// app.use('/moviesList', movieRouter)


//starting the server at port 4000
app.listen(4000, 'localhost', () => {
  console.log('server started at port 4000')
})
