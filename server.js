// PASSO A PASSO PARA CRIAR SERVIDOR E CONFIGURAR PROJETO
/* 
 1 - npm init -y ( criar package.json )

 2 - npm install express ( instalar pacote express )

 3 - npm install -D nodemon ( instalar nodemon )

 4 - npm install nunjucks ( instalar nunjucks )
*/

const nunjucks = require ('nunjucks')
const express = require ('express')
const data = require ('./data')

const server = express ()
 
server.use (express.static ('public/img'))
server.use (express.static ('public/styles'))
server.use (express.static ('public/scripts'))

server.set ('view engine', 'njk')

nunjucks.configure ('views', {
  express: server
})

server.get ('/', function (req, res) {
  const cards = [
    {
      name: "Javascript",
      image: "https://rocketseat.com.br/static/images/update/curso-javascript.svg",
      title: "Domine a linguagem de programação",
      subtitle: "Acompanhe o avanço da linguagem"
    },
    {
      name: "NodeJS",
      image: "https://rocketseat.com.br/static/images/update/curso-nodejs.svg",
      title: "Construa a base da sua aplicação no back-end",
      subtitle: "Para controlar a lógica e os dados das aplicações web e mobile"
    },
    {
      name: "ReactJS",
      image: "https://rocketseat.com.br/static/images/update/curso-reactjs.svg",
      title: "Desenvolva a versão web da sua aplicação",
      subtitle: "Para construir interfaces responsivas e dinâmicas no front-end"
    },
    {
      name: "React Native",
      image: "https://rocketseat.com.br/static/images/update/curso-react-native.svg",
      title: "Crie as versões mobile da sua aplicação",
      subtitle: "Para desenvolver apps para iOS e Android com interface nativa"
    }
  ]
  const mainDescription = [
    {
      title: "Rocketseat",
      logoImage: "https://media-exp1.licdn.com/dms/image/C510BAQFHYedTI-oyWA/company-logo_200_200/0?e=1600905600&v=beta&t=GlUqRmwprv-OUQwKtpUvzxtjsL8BP5EMlEfeAt1ZM1Y",
      description: "Mais do que uma plataforma de educação em tecnologia, uma comunidade incrível de devs em busca do próximo nível",
      linkUrl: "https://rocketseat.com.br/"
    }
  ]
  return res.render ('home', { cards, wrapper: mainDescription })
})
server.get ('/bootcamp-page.njk', function (req, res) {
  return res.render ('bootcamp-page', { items: data }) 
})

server.use (function(req, res) {
  res.status(404).render("not-found");
});


server.listen (5000, function () {
  console.log ('Server is Running')
})