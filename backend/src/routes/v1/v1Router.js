
import express from 'express';

import userRouter from './user.js';
import todoRouter from './todo.js'


const router = express.Router();



router.use('/users', userRouter); 
router.use('/todo', todoRouter); 



export default router;