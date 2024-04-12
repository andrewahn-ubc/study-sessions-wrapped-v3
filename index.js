const express = require('express')
const router = require('./routes/mainRoutes')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors');

const app = express()


app.use(cors());

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})



app.use('/api/study-sessions', router)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })