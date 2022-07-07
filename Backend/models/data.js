const bd = require('../conection/conection.js')
const db = bd.collection("Usuarios")

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


<<<<<<< HEAD:Backend/models/model.js

const name = "Gabriel"
const User = (async function(){
   const nomes = await db.where('nome', '==', name).get()

   if(nomes.empty){
       const uss = await db.add(data)
       const up = db.doc(`${uss.id}`).update({nome: name})
       
   }else{
      console.log("DOCUMENT HAVE BEEN EXISTS")
   }

})()
=======
module.exports = db
>>>>>>> 69f992d0f3d8b71c9dff0abda46ec894be51d45f:Backend/models/data.js
