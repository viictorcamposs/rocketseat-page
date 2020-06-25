// PASSO A PASSO PARA CRIAR SERVIDOR E CONFIGURAR PROJETO
/* 
 1 - npm init -y ( criar package.json )

 2 - npm install express ( instalar pacote express )

 3 - npm install -D nodemon ( instalar nodemon )

 4 - npm install nunjucks ( instalar nunjucks )
*/

const nunjucks = require ('nunjucks')
const express = require ('express')

const server = express ()
 
server.use (express.static ('public/img'))
server.use (express.static ('public/styles'))
server.use (express.static ('public/scripts'))

server.set ('view engine', 'njk')

nunjucks.configure ('views', {
  express: server
})

server.get ('/', function (req, res) {
  return res.render ('home')
})
server.get ('/bootcamp-page.njk', function (req, res) {
  return res.render ('bootcamp-page')
})

server.use (function(req, res) {
  res.status(404).render("not-found");
});


server.listen (5000, function () {
  console.log ('Server is Running')
})