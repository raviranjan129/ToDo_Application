import { StatusCodes } from 'http-status-codes';
import {createTodoService,getTodosService,getSingleTodoService,updateTodoService,deleteTodoService} from '../services/todoService.js';

// Create a new todo
export const createTodo = async (req, res) => {
  try {
    const userId = req.user._id; // assuming user is attached to req by auth middleware
    const newTodo = await createTodoService(req.body, userId);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Todo created successfully',
      data: newTodo
    });
  } catch (error) {
    console.error('createTodo error:', error);
    return res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || 'Failed to create todo'
    });
  }
};

// Get all todos for a user
export const getTodos = async (req, res) => {
  try {
    const userId = req.user._id;
    const todos = await getTodosService(userId);
    return res.status(StatusCodes.OK).json({
      success: true,
      data: todos
    });
  } catch (error) {
    console.error('getTodos error:', error);
    return res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || 'Failed to fetch todos'
    });
  }
};

// Get a single todo by ID
export const getTodoById = async (req, res) => {
  try {
    const userId = req.user._id;
    const todoId = req.params.id;
    const todo = await getSingleTodoService(todoId, userId);
    return res.status(StatusCodes.OK).json({
      success: true,
      data: todo
    });
  } catch (error) {
    console.error('getTodoById error:', error);
    return res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || 'Failed to fetch todo'
    });
  }
};

// Update a todo
export const updateTodo = async (req, res) => {
  try {
    const userId = req.user._id;
    const todoId = req.params.id;
    const updatedTodo = await updateTodoService(todoId, userId, req.body);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Todo updated successfully',
      data: updatedTodo
    });
  } catch (error) {
    console.error('updateTodo error:', error);
    return res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || 'Failed to update todo'
    });
  }
};

// Delete a todo
export const deleteTodo = async (req, res) => {
  try {
    const userId = req.user._id;
    const todoId = req.params.id;
    await deleteTodoService(todoId, userId);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Todo deleted successfully'
    });
  } catch (error) {
    console.error('deleteTodo error:', error);
    return res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || 'Failed to delete todo'
    });
  }
};
