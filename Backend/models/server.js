
const express = require('express')
const app = express()
const cors = require('cors')
const  {db, data} = require('./datas')
const { doc, add, id } = require('./datas')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

// ------------- VALIDAÇÃO DE USUARIOS (CREATE)-------------------------
app.post('/usuarios', async (req, res)=>{
    const nome = req.body.name    
    if(nome){
        const ValidName = await db.where("nome", "==", nome).get()

        if(ValidName.empty){
            const uss = await db.add(data)
            const up = db.doc(`${uss.id}`).update({nome: nome})
            console.log("Usuario criado")
            
        }else{
            res.send("Documento ja existe")
            console.log("DOCUMENTO JA EXISTE")
        }
    }  
})

/* ------------------------    (GET)  API DOS USUARIOS    -------------------------- */
app.get('/usuarios/:user', async (req, res)=>{
//-------------- example api --------------------
    const nome = req.params.user
    if(nome == "Exemplo"){
        const example = await db.where("nome", "==", "Exemplo").get()
        example.forEach(doc => {
            res.send(doc.data())
        })
        return;
    }

//------------- USER API -----------------
    const search = await db.where("nome", "==", nome).get()
    if(!search.empty){    
        search.forEach(doc => {
            res.send(doc.data())
        })  
    }else{
        res.send("Documento inxistente")
    }

})


app.listen(3001, ()=>{
    console.log("CONEXAO ESTABELECIDA")
})