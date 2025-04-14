import { createTodo,findTodosByUser,findTodoById,updateTodo,deleteTodo} from '../repositories/todoRepository.js';
  
  export const createTodoService = async (todoData, userId) => {
    try {
      if (!todoData.title || todoData.title.length > 100) {
        throw {
          status: 400,
          message: 'Title is required and must be less than 100 characters',
        };
      }
  
      if (todoData.description && todoData.description.length > 500) {
        throw {
          status: 400,
          message: 'Description must be less than 500 characters',
        };
      }
  
      if (todoData.category && !['Urgent', 'Non-Urgent'].includes(todoData.category)) {
        throw {
          status: 400,
          message: 'Category must be either "Urgent" or "Non-Urgent"',
        };
      }
  
      const newTodo = await createTodo({ ...todoData, user: userId });
      return newTodo;
    } catch (error) {
      console.log('createTodoService error:', error);
      throw error;
    }
  };
  
  export const getTodosService = async (userId) => {
    try {
      const todos = await findTodosByUser(userId);
      return todos;
    } catch (error) {
      console.log('getTodosService error:', error);
      throw error;
    }
  };
  
  export const getSingleTodoService = async (todoId, userId) => {
    try {
      const todo = await findTodoById(todoId, userId);
      if (!todo) {
      throw {
      status: 404,
   message: 'Todo not found or unauthorized access',
        };
      }
      return todo;
    } catch (error) {
      console.log('getSingleTodoService error:', error);
      throw error;
    }
  };
  
  export const updateTodoService = async (todoId, userId, updatedData) => {
    try {
      const updatedTodo = await updateTodo(todoId, userId, updatedData);
      if (!updatedTodo) {
        throw {
          status: 404,
          message: 'Todo not found or unauthorized access',
        };
      }
      return updatedTodo;
    } catch (error) {
      console.log('updateTodoService error:', error);
      throw error;
    }
  };
  
  export const deleteTodoService = async (todoId, userId) => {
    try {
      const deleted = await deleteTodo(todoId, userId);
      if (!deleted) {
        throw {
          status: 404,
          message: 'Todo not found or unauthorized access',
        };
      }
      return { success: true };
    } catch (error) {
      console.log('deleteTodoService error:', error);
      throw error;
    }
  };
  