const express = require('express')
const router = express.Router()
const todos = require('./todos')

router.get('/',(req,res)=>{
  res.send(`masuk ke halaman index`)
})

router.use('/todos', todos)

module.exports = router