const bd = require('../../conection/conection.js')
const db = bd.collection("Usuarios")

const data = {
    nome: "",
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

module.exports = {db, data}

