import express from 'express';
import { getAllTasks, addTask, getSignleTasks, updateTask, deleteTask, getTasksBySearch} from '../controller/todo-controller.js';

const router = express.Router();

router.get('/todos', getAllTasks);

router.post('/todos/create', addTask);

router.get('/todos/search', getTasksBySearch);

router.get('/todos/:id', getSignleTasks);

router.patch('/todos/:id', updateTask);

router.delete('/todos/:id', deleteTask);


export default router;