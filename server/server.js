const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

const apiUrl = 'https://www.moogleapi.com/api/v1/characters/'

server.get('api/v1/characters'), (req, res) => {
  this.request.get(apiUrl)
    .then(apiRes => {
      const { name, age, gender, race, job, origin, description, picture } = apiRes.body
      res.json({ name, age, gender, race, job, origin, description, picture })
    })
}





module.exports = server
