import React, { useState } from 'react'

const UpdateForm = ({ show, onClose, task, onUpdate }) => {
    const [title, setTitle] = useState(task?.title || '');
    const [priority, setPriority] = useState(task?.priority || 'medium');
    const [status, setStatus] = useState(task?.status || 'pending');

    if (!show) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedData = { title, priority, status };
        await onUpdate(task._id, updatedData);
        onClose();
    }

    return (
        <div
            className='fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50'
            onClick={onClose}
        >
            <div
                className='flex flex-col bg-white w-[90%] max-w-md rounded-xl shadow-xl overflow-hidden'
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className='flex justify-between items-center px-6 py-4 border-b border-gray-100'>
                    <h2 className='text-xl font-semibold text-gray-800'>Edit Task</h2>
                    <button
                        onClick={onClose}
                        className='text-gray-400 hover:text-gray-600 transition-colors p-1'
                    >
                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    </button>
                </div>

                {/* Form Content */}
                <form className='px-6 py-6 space-y-5'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                            Task Title
                        </label>
                        <input
                            type="text"
                            className='w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
                            placeholder='Enter your task...'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                Priority
                            </label>
                            <select
                                className='w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all cursor-pointer'
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                            >
                                <option value='low'>Low</option>
                                <option value='medium'>Medium</option>
                                <option value='high'>High</option>
                            </select>
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                Status
                            </label>
                            <select
                                className='w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all cursor-pointer'
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value='pending'>Pending</option>
                                <option value='in progress'>In Progress</option>
                                <option value='completed'>Completed</option>
                            </select>
                        </div>
                    </div>
                </form>

                {/* Footer */}
                <div className='px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3'>
                    <button
                        type='button'
                        onClick={onClose}
                        className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'
                    >
                        Cancel
                    </button>
                    <button
                        type='submit'
                        onClick={handleSubmit}
                        className='px-6 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors'
                    >
                        Update Task
                    </button>
                </div>
            </div>
        </div>
    );
};


export default UpdateForm