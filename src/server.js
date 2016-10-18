import express from 'express'
import pug from 'pug'
import path from 'path'

const server = express()


//view engine setup
server.set('views', path.join(__dirname, 'views'))
server.use(express.static(path.join(__dirname, 'public')))
server.set('view engine', 'pug')

server.get('/', (require, response) => {
  response.render('index') 
})

server.listen(5000, () => {
  console.log('Example app listening to 3000')
})