const { response } = require('express')
const db = require('../../conection/conection.js')


const QuestionRes = [
    {
        question: "Qual seu nome?",
        item: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        response: "a"
    },
    {
    
        question: "Qual sua idade?",
        item: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        response: "b"
    },
    {
        question: "Onde voce mora",
        item: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        response: "c"
    },
    {
        question: "O que voce faz?",
        item: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        response: "d"
    },
    {
        question: "O que voce tem?",
        item: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        response: "a"
    },
    {
        question: "O que voce quer?",
        item: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        response: "b"
    },
    {
        question: "Onde andas?",
        item: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        response: "c"
    },
    {
        question: "Onde foi?",
        item: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        response: "a"
    },
    {
        question: "Onde queres?",
        item: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        response: "b"
    },
    {
        question: "O que gostaria?",
        item: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        response: "a"
    }
]

QuestionRes.forEach((element, index)=>{
   index++
   db.collection("Quiz").doc(`${index}`).set(element)
})

module.exports = db