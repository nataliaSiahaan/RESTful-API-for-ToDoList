const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const authenticate = require('../middleware/auth');

router.post('/', authenticate, todoController.createTodo);
router.get('/', authenticate, todoController.getTodos);
router.get('/:id', authenticate, todoController.getTodoById);
router.put('/:id', authenticate, todoController.updateTodo);
router.delete('/:id', authenticate, todoController.deleteTodo);
router.delete('/', authenticate, todoController.deleteAllTodos);

module.exports = router;
