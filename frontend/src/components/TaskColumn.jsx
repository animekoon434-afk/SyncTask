import React from 'react'
import TaskCard from './TaskCard'

const TaskColumn = ({title,img,tasks,onDelete,onUpdate}) => {
    return (
        <section className='w-[33.33%] m-5 border border-gray-300 rounded-md p-5'>
            <h2 className='flex justify-center items-center mb-10'>
                <img className='mr-[5px] w-[30px]' src={img} /> 
                <span className='font-bold text-[20px] text-gray-600'>{title}</span>
            </h2>

            {tasks && tasks.length > 0 ? (
                tasks.map((task) => <TaskCard key={task._id} task={task} onDelete={onDelete} onUpdate={onUpdate}/>)
            ): (
                <p className='text-center text-gray-400 mt-[50%] text-2xl font-bold'>No Tasks</p>
            )}
        </section>

    )
}

export default TaskColumn