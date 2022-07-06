
const express = require('express')
const app = express()
const cors = require('cors')
const {data, db} = require('./data')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.get("/", (req, res)=>{
    res.send("Ola Mundo")
    res.send(db)
    

})

app.post('/usuarios', (req, res)=>{

})

app.listen(3001, ()=>{
    console.log("CONEXAO ESTABELECIDA")
})