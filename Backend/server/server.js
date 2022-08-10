
const express = require('express')
const app = express()
const cors = require('cors')
const  {db, data} = require('./database/dataUser.js')

const routerUser = require('./routers/user')
const Router = require('./routers/quiz')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, X-Api-Key')
    res.setHeader('Content-Type', 'application/json')
    app.use(cors());
    
    next();
})



//create
app.use('/', routerUser)

//read
app.use('/', routerUser)

//update
app.use('/', routerUser)

//quiz data
app.use('/quiz', Router)

app.use('/quiz', Router)

app.listen(process.env.PORT || 3001, ()=>{
    console.log("CONEXAO ESTABELECIDA")
})