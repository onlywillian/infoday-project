const bd = require('../../conection/conection.js')
const db = bd.collection("Usuarios")

const data = {
    nome: "",
    money: 0,
    SkinBaseFemea: {
        nome: 'Nina'
    },
    SkinBaseMacho: {
        nome: 'Jorginho'
    },
    SkinAtual: 0,
    FinishedQuiz: false
}

module.exports = {db, data}

