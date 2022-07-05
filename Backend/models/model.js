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
const name = "Giel"
const User = (async function(){
   const nomes = await db.where('nome', '==', name).get()

   if(nomes.empty){
       const uss = await db.add(data)
       const up = db.doc(`${uss.id}`).update({nome: name})
       
   }else{
      console.log("DOCUMENT HAVE BEEN EXISTS")
   }

})()