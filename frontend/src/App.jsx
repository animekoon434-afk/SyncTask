import React from 'react'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import Todo from './assets/todo.png';
import doing from './assets/doing.png';
import completed from './assets/completed.png';

const App = () => {
  return (
    <>
      <div className='grid grid-rows-[150px_auto] h-screen'>
        <TaskForm />
        <main className='flex justify-evenly items-start py-5 px-[8%]'>
          <TaskColumn title='To do' img={Todo}/>
          <TaskColumn title='In Progress' img={doing}/>
          <TaskColumn title='Completed' img={completed}/>
        </main>
      </div>
      <div className='hidden'>
        <div className='flex flex-col justify-between absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl bg-linear-to-t from-white to-purple-500 w-[30%] h-[40%] p-6 rounded-lg'>
        <form >
          <input type="text" className='text-[20px] font-bold bg-[#f9f9f9] text-gray-600 focus:outline-gray-400 border border-purple-600 rounded-[5px] py-2 px-[15px] mb-10 w-full ' placeholder='Enter Your Task' />
          <div className='flex justify-between w-full'>
            <select className='text-[20px] font-bold bg-purple-500 text-white border border-[#dfe3e6] rounded-[5px] py-2 px-[15px]  w-[40%]'>
              <option className='bg-purple-300' value="todo">low</option>
              <option className='bg-purple-300' value="todo">medium</option>
              <option className='bg-purple-300' value="todo">high</option>
            </select>
            <select className='text-[20px] font-bold bg-purple-500 text-white border border-[#dfe3e6] rounded-[5px] py-2 px-[15px] w-[40%]'>
              <option className='bg-purple-300' value="todo">Pending</option>
              <option className='bg-purple-300' value="todo">Completed</option>
              <option className='bg-purple-300' value="todo">Cancelled</option>
            </select>
          </div>
        </form>
        <button type='submit' className='w-full bg-purple-600 py-2 text-white font-bold rounded-[5px]'>Add Task</button>
      </div>
      </div>
      
    </>
  )
}

export default App