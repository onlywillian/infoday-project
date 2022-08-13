const bd = require('../../conection/conection.js')
const db = bd.collection("Usuarios")

const data = {
    nome: "",
    money: null,
    StartSkin: {
        nome: 'skin_inicial'
    }
}

module.exports = {db, data}

