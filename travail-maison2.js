// server.js

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const customerRoutes = require('./customer')

const port = 3000

// use json external middleware to parse json body 
app.use(bodyParser.json())

//app.use(express.json())


app.use('/customers', customerRoutes)

app.listen(port, () => {
    console.log("Example app listening on port ", port)
  })


  // customer.js

  const express = require('express')
  const router = express.Router()
  const { uuid } = require('uuidv4')
  let users = []
  router.get('/', (req, res) => {
      console.log(users)
      res.send(users)
  })
  
  router.post('/', (req, res) => {
      const user = req.body
      users.push({ ...user, id:uuid()})
      res.send(`User with first name ${user.firstName} added to the in-memory database succesfully`)
  })
  
  module.exports = router