
const express = require('express')
const app = express()
const cors = require('cors')
const  {db, data} = require('./datas')
const { doc, add, id } = require('./datas')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

// ------------- VALIDAÇÃO DE USUARIOS (CREATE)-------------------------
app.post('/usuarios',  async (req, res)=>{
    const nome = req.body.name
    data.nome = nome
    
        const ValidName = await db.where("nome", "==",nome).get()
        if(ValidName.empty){   
                const uss = await db.add(data)
                console.log("Usuario criado")  

        }else{
            res.send("Documento ja existe")
            console.log("DOCUMENTO JA EXISTE")
        }

})

/* ------------------------    (GET)  API DOS USUARIOS    -------------------------- */
app.get('/usuarios/:user', async (req, res)=>{
    const nome = req.params.user
    const search = await db.where("nome", "==",nome).get()

    if(!search.empty){    
        search.forEach(doc => {
            res.send(doc.data())
        })       
    }else{
        res.send("Documento inxistente")
    }
    
})

//-------------Atualizações dos Usuarios-----------------
app.put('/usuarios/update/:idUser', async (req, res)=>{
   const nome = req.params.idUser
   const NewData = req.body

   try {
        const searchUser = await db.where('nome','==',nome).get()
        searchUser.forEach((doc)=>{
            const id = doc.id
            db.doc(`${id}`).update(NewData)
        })

        if(!searchUser.empty){
            res.send("Documento atualizado")
        }else{
            res.send("Documento nao existe")
        }
        
   } catch (error) {
        console.log("Usuario nao atualizado "+error)
   }

})

app.listen(3001, ()=>{
    console.log("CONEXAO ESTABELECIDA")
})