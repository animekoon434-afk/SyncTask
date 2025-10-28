import React from 'react'

const TaskForm = () => {
    
    return (
        <header className='flex flex-col items-center justify-center border-b border-[#dcdcdc]'>
            <div className='w-[50%] flex gap-2 items-start'>
                <input type="text" className='text-[20px] font-bold bg-[#f9f9f9] text-black border border-[#dfe3e6] rounded-[5px] py-2 px-[15px] mb-[15px] w-full ' placeholder='Search Task' />
                <button className='bg-purple-600 text-white rounded-[5px] text-[20px] py-2 px-5'>Search</button>
            </div>
            <button className=' bg-purple-600 text-white rounded-[5px] text-[20px] px-[60px] py-3'>Add Task</button>

        </header>
    )
}

export default TaskForm