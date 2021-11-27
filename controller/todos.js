const express = require('express')
const router = express.Router()
const {
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
} = require('../service/todos')


router.get('/', getTodo)
router.post('/', createTodo)
router.put('/', updateTodo)
router.delete('/', deleteTodo)


module.exports = router