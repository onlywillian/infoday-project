const bd = require('../../conection/conection.js')
const db = bd.collection("Usuarios")

const data = {
    nome: "",
    money: null,
    SkinBaseFemea: {
        nome: 'Nina'
    },
    SkinBaseMacho: {
        nome: 'Jorginho'
    }
}

module.exports = {db, data}

