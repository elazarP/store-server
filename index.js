require('dotenv').config()
const express = require('express'),
    app = express(),
    PORT = process.env.PORT,
    cors = require('cors')

require('./db.js')
// require('./DL/controls/usersControles')
// require('./DL/controls/carsControlers')


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.use('/users',require("./Routers/personRouter"))
app.use('/categories',require("./Routers/categoryRouter"))
app.use('/items',require("./Routers/itemRouter"))


app.listen(PORT,()=>{console.log(`server is runing :${PORT}`)})