const express = require('express')
const app = express()
require('dotenv').config()
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const ctrl = require('./controller.js')
const massive = require('massive')
const session = require('express-session')


//app.use top level middleware
app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))


//endpoints
app.post('/auth/register', ctrl.register)



massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is listening all of the time`))

}).catch(err => console.log(err, 'not connecting to database stu'))
