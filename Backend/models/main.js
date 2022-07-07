const express = require("express")
const app = express()
const cors = require('cors')
const bd = require('../conection/conection.js')
const banck = bd.collection('Usuarios')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
   const docs = banck.get().then((snapshot)=>{
       snapshot.forEach((doc)=>{
          res.send({data: doc.data()})
       })
   });
});

app.post('/usuarios',(req, res)=>{
        const nome = req.body.name
        async function set(){

            const nomes =  await db.where('nome', '==', nome).get()
            if(nomes.empty){
                const uss = await db.add(data)
                const up = db.doc(`${uss.id}`).update({nome: nome})
                
            }else{
               console.log("DOCUMENT HAVE BEEN EXISTS")  
            }
        }
        set();
});

app.listen(3003, ()=>{
 console.log("CONEXAO BEM SUCEDIDA")
})