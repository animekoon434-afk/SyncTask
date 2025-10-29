import React, { useState, useEffect } from 'react'
import TaskColumn from './components/TaskColumn'
import Todo from './assets/todo.png';
import doing from './assets/doing.png';
import completed from './assets/completed.png';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import { fetchTasks, addTask, deleteTask, searchTasks, updateTask } from './utils/api';


const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  }

  const handleAddTask = async (newTask) => {
    try {
      const result = await addTask(newTask);
      if (result) {
        await loadTasks();
        setShowForm(false);
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Error adding task. Please Fill all the fields.';
      alert(msg);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try{
      await deleteTask(taskId);
      await loadTasks();
    }catch(err){
      const msg = err.response?.data?.message || 'Error deleting task.';
      alert(msg);
    }
  };


  const handleSearch = async (query) =>  {
    try{
      if(!query.trim()) {
        await loadTasks();
        return;
      }

      const data= await searchTasks(query);
      setTasks(data);
    }catch(err){
      console.error('Search error:', err);
      alert('Error searching tasks.');
    }
  };

  const handleUpdateTask = async (taskId, updatedData) => {
    try{
      await updateTask(taskId, updatedData);
      await loadTasks();
    }catch(err){
      const msg = err.response?.data?.message || 'Error Updating task.';
      alert(msg);
    }
  }

  const pendingTasks = tasks.filter(task => task.status === 'pending');
  const inProgressTasks = tasks.filter(task => task.status === 'in progress');
  const completedTasks = tasks.filter(task => task.status === 'completed');

  return (
    <>
      <div className='grid grid-rows-[150px_auto] h-screen'>
        <Header onOpen={() => setShowForm(true)} onSearch={handleSearch}/>
        <main className='flex justify-evenly py-5 px-[8%]'>
          <TaskColumn title='Pending' img={Todo} tasks={pendingTasks} onDelete={handleDeleteTask} onUpdate={handleUpdateTask}/>
          <TaskColumn title='In Progress' img={doing} tasks={inProgressTasks} onDelete={handleDeleteTask} onUpdate={handleUpdateTask}/>
          <TaskColumn title='Completed' img={completed} tasks={completedTasks} onDelete={handleDeleteTask} onUpdate={handleUpdateTask}/>
        </main>
      </div>
      <TaskForm
        show={showForm}
        onClose={() => setShowForm(false)}
        onAddTask={handleAddTask}
      />
      {/* <UpdateForm show={showForm} onClose={() => setShowForm(false)}/> */}
    </>
  )
}

export default App