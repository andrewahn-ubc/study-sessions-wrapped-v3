const express = require('express')
const router = require('./routes/mainRoutes')

const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/api/study-sessions', router)

app.listen(3000, () => {
    console.log('Listening on port 3000')
})