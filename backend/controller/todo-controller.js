import Todo from '../model/todo-model.js';

export const getAllTasks = async (req, res) => {
    try{
        const tasks = await Todo.find();
        return res.status(200).json({
            success: true,
            data: tasks
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json(error.message);
    }
}

export const getSignleTasks = async (req,res) =>{
    try{
        const  id = req.params.id;
        if(!id){
            return res.status(400).json('Please provide a task id');
        }
        const task = await Todo.findById(id);
        if(!task){
            return res.status(404).json('Task not found');
        }
        return res.status(200).json({
            success: true,
            data: task
        })
    } catch(error){
        console.log(error);
        return res.status(500).json(error.message);
    }
}

export const addTask = async (req,res) => {
    try{
        const {title, status, priority} = req.body;

        if(!title){
            return res.status(400).json('Please fill all the fiels')
        }

        const newTask = await Todo.create({
            title,
            status,
            priority
        });

        return res.status(201).json({
            message: 'task added successfully',
            data: newTask
        
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json(error.message);

    }
}

export const updateTask = async (req, res) => {
    try{
        const  id = req.params.id;
        const {title, status, priority} = req.body;
        if(!id){
            return res.status(400).json('Please provide a task id');
        }
        if(!title){
            return res.status(400).json('Please fill at least one field to update');
        }
        const updateTask = await Todo.findByIdAndUpdate(id , {
            title,
            status,
            priority  
        },{new: true});

        if(!updateTask){
            return res.status(404).json('Task not found');
        }
        return res.status(200).json({
            success: true,
            message: 'Task  updated successfully',
            data: updateTask
        })
    } catch(error){
        console.log(error);
        return res.status(500).json(error.message);
    }
}

export const deleteTask = async (req, res) => {
     try{
        const  id = req.params.id;
        if(!id){
            return res.status(400).json('Please provide a task id');
        }
        const deleteTask = await Todo.findByIdAndDelete(id);
        if(!deleteTask){
            return res.status(404).json('Task not found');
        }
        return res.status(200).json({
            success: true,
            message: 'Task deleted successfully'
        })
    } catch(error){
        console.log(error);
        return res.status(500).json(error.message);
    }
}

export const getTasksBySearch = async (req, res) => {
    try{
        const {search} = req.query;

        if(!search){
           return res.status(400).json('Please provide a task title')
        }

        const filter = search ? {title: {$regex: search, $options: 'i'}} : {};

        const todo = await Todo.find(filter);
        return res.status(200).json({
            success: true,
            data: todo
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json(error.message);
    }
}