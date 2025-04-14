import express from 'express';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../../controller/todoController.js';
import { isAuthenticated } from '../../middleware/authMiddleware.js';

const router = express.Router();

// Apply authentication middleware to all todo routes
router.use(isAuthenticated);

router.post('/', createTodo);
router.get('/', getTodos);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;