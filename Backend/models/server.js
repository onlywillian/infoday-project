
const express = require('express')
const app = express()
const cors = require('cors')
const  db = require('./data')
const { doc, add } = require('./data')

const data = {
    nome: '',
    money: null,
    roupas: {
        calca: {
            nome: '',
            money: null
        },
        chapeu: {
            nome: '',
            money: null
        },
        tenis: {
            nome: '',
            money: null
        },
        blusa: {
            nome: '',
            money: null
        }
    },
    respostas: {
        item: '',
        money: null
    }
}


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.get("/", (req, res)=>{
   db.get().then(snapshot => {
    snapshot.forEach(doc => {
        res.send(doc.data())
    })
   })

})

app.post('/usuarios', (req, res)=>{
// ------------- VALIDAÇÃO DE USUARIOS (CREATE)-------------------------
    const nome = req.body.name    
    if(nome){
       const user = (async function(){
            const ValidName = await db.where("nome", "==", nome).get()
            if(ValidName.empty){
                const uss = await db.add(data)
                const up = db.doc(`${uss.id}`).update({nome: nome})
                console.log("Usuario criado")
               
                return;
            }
            console.log("DOCUMENTO JA EXISTE")
            
       })() 
    }  
})

app.listen(3001, ()=>{
    console.log("CONEXAO ESTABELECIDA")
})