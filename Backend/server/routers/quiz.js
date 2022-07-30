const express = require('express')
const router = express.Router()
const bd = require('../../Quiz/data.js')

router.get('/question', async (req , res)=>{
   try{

        let objs = []
        const docs = await bd.collection('Quiz').get()
        docs.forEach(element => {
            objs.push(element.data())
        });
        res.statusCode = 200
        res.send(objs)

   }catch(error){

        res.statusCode = 404
        res.send({error: "Houve um problema no servidor"})
        console.log("Erro no get Docs: "+error)
   }
  
})

module.exports = router