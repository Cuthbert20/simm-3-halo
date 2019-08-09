const express = require('express')
const app = express()
require('dotenv').config()
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const ctrl = './controller.js'
const massive = require('massive')


//app.use top level middleware
app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is listening all of the time`))

}).catch(err => console.log(err, 'not connecting to database stu'))
