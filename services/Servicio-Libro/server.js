const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: '67.207.80.187',
    port: '3306',
    user: 'sa123',
    password: '1234',
    database: 'SA'

}

// middlewares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

//routes
app.get('/',(req,res)=>{
    res.send('Welcome to my API')
})
app.use('/api',routes)

//server running
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))

})