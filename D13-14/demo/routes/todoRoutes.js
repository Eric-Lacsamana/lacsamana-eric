const express = require('express');

const router = express.Router();

const TodoController = require('../controllers/todoController');

router.get('/', TodoController.getAllTodos);
router.post('/', TodoController.createTodo);
router.get('/:id', TodoController.getTodoById);
router.put('/:id', TodoController.updateTodo);
router.delete('/:id', TodoController.deleteTodo);

module.exports = router;