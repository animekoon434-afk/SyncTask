import React from 'react'
import Priority from './Priority'
import Delete from '../assets/Delete.png'

const TaskCard = ({ task, onDelete, onUpdate}) => {
  const priority = task.priority;
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete(task._id);
    }
  }
  const handleUpdate = () => {
    onUpdate()
  }
  return (
    <article className='w-full flex flex-col justify-between min-h-[110px] border border-[#dcdcdc] rounded-[10px] p-4 my-[15px] mx-0'>
      <div className='flex items-center justify-between'>
        <p className='text-[18px] font-semibold '>{task.title}</p>
        <div className='w-[35px] h-[35px] flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#e9e9e9] rounded-full  group'>
          <i className="bi bi-pencil-square text-[18px] opacity-50 group-hover:opacity-80 transition-all duration-300 ease-in-out "></i>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='task-card-priority'>
          <Priority name={priority} />
        </div>
        <div
          onClick={handleDelete}
          className='w-[35px] h-[35px] flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#ffe9e9] rounded-full  group'>
          <img src={Delete} className='w-5 opacity-50 group-hover:opacity-80 transition-all duration-300 ease-in-out ' alt="Delete" />
        </div>
      </div>
    </article>
  )
}

export default TaskCard