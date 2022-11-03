var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Mande via postman calc = plus||sub||div||mult <br> calc: <br> a: <br>b:');
});

var port = 3001;

app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

app.post('/', function(req, res) {
  var body = req.body;
  var calc = body.calc;
  var resultado;
  if (calc == "plus") {
    resultado = plus(body.a, body.b);
    res.send(`O resultado da soma de ${body.a} e ${body.b} é     ${resultado}`);
  } else if (calc == "sub") {
    resultado = sub(body.a, body.b);
    res.send(`O resultado da subtração de ${body.a} e ${body.b} é     ${resultado}`);
  } else if (calc == "div") {
    resultado = div(body.a, body.b);
    res.send(`O resultado da divisão de ${body.a} e ${body.b} é     ${resultado}`);
  } else if (calc == "mult") {
    resultado = mult(body.a, body.b);
    res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é     ${resultado}`);
  }

});


function plus(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}

function mult(a, b) {
  return a * b;
}