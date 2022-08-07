const express = require('express')
const router = express.Router()
const bd = require('../database/dataQuiz.js')
const cors = require('cors')
const db = require('../database/dataQuiz.js')

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

router.put('/question/update/:index', async(req, res)=>{
     try {
          const dataNew = req.body
          const index = parseInt(req.params.index)
     
          const searchQuestion = await db.collection('Quiz').where('index','==',index).get()
          searchQuestion.forEach((doc)=>{
               db.collection('Quiz').doc(`${doc.id}`).update(dataNew).then(()=>{
                    res.status(200).send({message: "Is up to date"})
                    console.log("Is up to date")
               })
          })

     } catch (error) {
          res.status(404).send({error: error})
          console.loog("Nao atualizado: "+error)
     }
})

module.exports = router