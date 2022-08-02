
const express = require('express')
const app = express()
const cors = require('cors')
const  {db, data} = require('./database/dataUser.js')

const routerUser = require('./routers/user')
const Router = require('./routers/quiz')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
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

app.listen(3001, ()=>{
    console.log("CONEXAO ESTABELECIDA")
})