const path = require('path')
const express = require('express')
const request = require('superagent')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

const apiUrl = 'https://www.moogleapi.com/api/v1/characters/'

server.get('/api/v1/characters', (req, res) => {
  request.get(apiUrl)
    .then(apiRes => {
      // const { text: [{ id, name, age, gender, race, job, description, picture }] } = apiRes.body
      // res.json({ text: [{ id, name, age, gender, race, job, description, picture }] })
      res.json(apiRes)
    })
    .catch(err => {
      console.log(err)
    })

})



module.exports = server
