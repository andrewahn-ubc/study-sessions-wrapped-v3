const express = require('express')

const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get('/', (req, res) => {
    res.json({mssg: "get request received!"})
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})