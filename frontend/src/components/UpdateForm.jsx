import React from 'react'

const UpdateForm = ({show, onClose}) => {
    if(!show) return null;
  return (
    <div
            className='fixed inset-0 bg-black/50 flex justify-center items-center z-50'
        >
            <div
                className='flex flex-col justify-between shadow-2xl bg-[#e8e3fa] border border-purple-800 w-[30%] h-[40%] p-6 rounded-lg relative'
            >
                <div>
                    <div className='flex justify-center mb-5 items-center'>
                        <h1 className='text-white font-bold text-3xl drop-shadow-[2px_2px_0px_#9333ea] text-outline'>Update Task</h1>
                        <button
                            className='absolute right-6 text-gray-700 font-bold text-xl hover:text-red-600'
                        >
                            ✕
                        </button>
                    </div>

                    <form>
                        <input
                            type="text"
                            className='text-[20px] font-bold bg-[#f9f9f9] text-gray-600 focus:outline-gray-400 border border-purple-600 rounded-[5px] py-2 px-[15px] mb-10 w-full'
                            placeholder='Enter Your Task'
                            // value={title}
                            // onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        <div className='flex justify-between w-full'>
                            <select 
                                className='text-[20px] font-bold bg-purple-500 text-white border border-[#dfe3e6] rounded-[5px] py-2 px-[15px] w-[40%]'
                                // value={priority}
                                // onChange={(e) => setPriority(e.target.value)}
                            >
                                <option className='bg-purple-300' value='low'>Low</option>
                                <option className='bg-purple-300' value='medium'>Medium</option>
                                <option className='bg-purple-300' value='high'>High</option>
                            </select>
                            <select 
                                className='text-[20px] font-bold bg-purple-500 text-white border border-[#dfe3e6] rounded-[5px] py-2 px-[15px] w-[40%]'
                                // value={status}
                                // onChange={(e) => setStatus(e.target.value)}
                            >
                                <option className='bg-purple-300' value='pending'>Pending</option>
                                <option className='bg-purple-300' value='in progress'>In Progress</option>
                                <option className='bg-purple-300' value='completed'>Completed</option>
                            </select>
                        </div>
                    </form>
                </div>
                <button
                    // onClick={handleSubmit}
                    className='w-full bg-purple-600 py-2 text-white font-bold rounded-[5px]'
                >
                    Add Task
                </button>
            </div>
        </div>
  )
}

export default UpdateForm