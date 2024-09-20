// index.js

const express = require('express');
const app = express();
const port = 3000;

// Importa o módulo calculadora
const calculadora = require('./util/calculadora');

// Rota para somar
app.get('/somar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.somar(a, b);
    res.send(`Resultado da soma: ${resultado}`);
});

// Rota para subtrair
app.get('/subtrair/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.subtrair(a, b);
    res.send(`Resultado da subtração: ${resultado}`);
});

// Rota para multiplicar
app.get('/multiplicar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.multiplicar(a, b);
    res.send(`Resultado da multiplicação: ${resultado}`);
});

// Rota para dividir
app.get('/dividir/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.dividir(a, b);
    res.send(`Resultado da divisão: ${resultado}`);
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
});
