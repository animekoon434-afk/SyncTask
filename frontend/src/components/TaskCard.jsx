import React from 'react'
import Priority from './Priority'
import Delete from '../assets/Delete.png'

const TaskCard = () => {
  return (
    <article className='w-full min-h-[100px] border border-[#dcdcdc] rounded-[10px] p-[15px] my-[15px] mx-0'>
        <p className='text-[18px] font-semibold mb-[15px]'>This is Sample Text</p>
        <div className='flex items-center justify-between'>
            <div className='task-card-priority'>
                <Priority name='high'/>
                <Priority name='medium'/>
            </div>
            <div className='w-[35px] h-[35px] flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#ffe9e9] rounded-full  group'>
                <img src={Delete} className='w-5 opacity-50 group-hover:opacity-80 transition-all duration-300 ease-in-out ' alt="Delete" />
            </div>
        </div>
    </article>
  )
}

export default TaskCard