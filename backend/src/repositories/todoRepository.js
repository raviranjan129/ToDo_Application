import Todo from "../schema/todoSchema.js";


// Create a new todo
export const createTodo = async (todo) => {
  try {
    const newTodo = await Todo.create(todo);
    return newTodo;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Find all todos for a specific user
export const findTodosByUser = async (userId) => {
  try {
    const todos = await Todo.find({ user: userId }).sort({ createdAt: -1 });
    return todos;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Find a specific todo by ID and user
export const findTodoById = async (todoId, userId) => {
  try {
    const todo = await Todo.findOne({ _id: todoId, user: userId });
    return todo;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Update a todo
export const updateTodo = async (todoId, userId, updatedData) => {
  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: todoId, user: userId },
      updatedData,
      { new: true }
    );
    return updatedTodo;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Delete a todo
export const deleteTodo = async (todoId, userId) => {
  try {
    await Todo.findOneAndDelete({ _id: todoId, user: userId });
    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
