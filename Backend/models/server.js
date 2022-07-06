const { urlencoded } = require('express')
const express = require('express')
const app = express()
const cors = cors()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res)=>{
    res.send("Ola Mundo")
})


app.listen(3001, ()=>{
    console.log("CONEXAO ESTABELECIDA")
})