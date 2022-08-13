const { response } = require('express')
const db = require('../../conection/conection.js')

const QuestionRes = [
    {
        index: 0, 
        question: "HTML é uma linguagem de: ",
        item: {
            a: "Certificação",
            b: "Programação",
            c: "Desenvolvimento Web",
            d: "Linguagem de marcação"
        },
        response: "d",
        value: 100
    },
    {
        index: 1,
        question: "CSS tem como principal função em um site:",
        item: {
            a: "Estrutura",
            b: "Dinâmica",
            c: "Desenvolvimento Web",
            d: "Estilização"
        },
        response: "d",
        value: 100
    },
    {
        index: 2,
        question: "A linguagem JAVASCRIPT pode ter várias funções dentro de um site, como:",
        item: {
            a: "Deixar sites dinâmicos",
            b: "Estruturar sites",
            c: "Estilizar sites",
            d: "Estilizar botões",
        },
        response: "a",
        value: 100
    },
    {
        index: 3,
        question: "O inventor da apple se chama:",
        item: {
            a: "Bill Gates",
            b: "Steve Jober",
            c: "Mosely Gates",
            d: "Steve Jobs"
        },
        response: "d",
        value: 100
    },
    {
        index: 4,
        question: "Qual o nome do invetor da Microsoft?",
        item: {
            a: "Bill Gates",
            b: "Steve jobs",
            c: "Mark zuckenberg",
            d: "João Pedro Brito Sousa"
        },
        response: "a",
        value: 100
    },
    {
        index: 5,
        question: "Para que serve o cooler dentro de um computador?",
        item: {
            a: "Evitar aquecimento das peças ",
            b: "Fornecer energia ao computador ao girar",
            c: "Processa dados rápidos ",
            d: "Armazenar dados"
        },
        response: "a",
        value: 100
    },
    {
        index: 6,
        question: "Qual dos seguintes nomes são navegadores web?",
        item: {
            a: "Windows",
            b: "Linux",
            c: "Mozila Firefox",
            d: "Linux Mint"
        },
        response: "c",
        value: 100
    },
    {
        index: 7,
        question: "Qual dos seguintes nomes é um sistema operacional:",
        item: {
            a: "Google Chrome",
            b: "Ubuntu",
            c: "Brave",
            d: "Visual Studio"
        },
        response: "b",
        value: 100
    },

    {
        index: 8,
        question: "Qual a função de um HD?",
        item: {
            a: "Armazenar memórias RAM",
            b: "Resfriar o computador",
            c: "Processa dados rápidos",
            d: "Armazenar dados"
        },
        response: "d",
        value: 100
    },
    {
        index: 9,
        question: "Você gostou do jogo?",
        item: {
            a: "SIM",
            b: "NAO",
            c: 'UM POUCO',
            d: 'NEUTRO'
        },
        response: "a",
        value: 100
    }
]

QuestionRes.forEach((element, index)=>{
   index++
   db.collection("Quiz").doc(`${index}`).set(element)
})

module.exports = db