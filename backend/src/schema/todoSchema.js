import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100
  },
  description: {
    type: String,
    maxlength: 500
  },
  dueDate: {
    type: Date
  },
  category: {
    type: String,
    enum: ['urgent', 'not-urgent'],
    default: 'Non-Urgent'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;
