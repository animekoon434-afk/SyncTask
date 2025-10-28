import React from 'react'
import Todo from '../assets/todo.png'
import TaskCard from './TaskCard'

const TaskColumn = ({title,img}) => {
    return (
        <section className='w-[33.33%] m-5 '>
            <h2 className='flex'>
                <img className='mr-[5px] w-[30px]' src={img} /> 
                <span className='font-bold text-[20px] text-gray-600'>{title}</span>
            </h2>

            <TaskCard />
        </section>

    )
}

export default TaskColumn