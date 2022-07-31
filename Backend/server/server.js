
const express = require('express')
const app = express()
const cors = require('cors')
const  {db, data} = require('./database/dataUser.js')

const routerUser = require('./routers/user')
const Router = require('./routers/quiz')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

//create
app.use('/', routerUser)

//read
app.use('/', routerUser)

//update
app.use('/', routerUser)

//quiz data
app.use('/quiz', Router)

app.listen(3001, ()=>{
    console.log("CONEXAO ESTABELECIDA")
})