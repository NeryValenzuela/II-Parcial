const express = require('express')
const bodyparser = require('body-parser')
const Routes = require('./src/config/Routes')
const cors = require('cors')

var app = express()
const corsOptions = {
    origin:'*'
}
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors(corsOptions))
app.use('/',Routes.Routes)


const server = app.listen(3000,()=>{
    console.log(`http://localhost:${server.address().port}`)
}) 