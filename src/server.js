

//servidor
const express = require('express')
const server = express()
const {pageLanding,pagestudy,pagegiveClasses,saveClasses} = require('./pages')


const nunjucks = require('nunjucks')
const format = require('./utils/format')
//configurar nunjucks(tempalte engine)
nunjucks.configure('src/views',{
    express: server,
    nocache: true,
})



//iinicio e configuração do servidor
server
//recebe dados do req.body
.use(express.urlencoded({ extended: true}))
//configurar arquivos estaticos(css,html,imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/",pageLanding)
.get("/study",pagestudy)
.get("/give-classes",pagegiveClasses)
.post("/save-classes",saveClasses)
.listen(5500)