import React from 'react'

const DeleteConfirmation = ({ show, onClose, onConfirm, taskTitle }) => {
    if (!show) return null;

    return (
        <div
            className='fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50'
            onClick={onClose}
        >
            <div
                className='flex flex-col bg-white w-[90%] max-w-sm rounded-xl shadow-xl overflow-hidden'
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className='flex items-center gap-3 px-6 py-4 border-b border-gray-100'>
                    <div className='w-10 h-10 bg-red-100 rounded-full flex items-center justify-center'>
                        <svg className='w-6 h-6 text-red-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' />
                        </svg>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold text-gray-800'>Delete Task</h2>
                    </div>
                </div>

                {/* Content */}
                <div className='px-6 py-6'>
                    <p className='text-gray-600'>
                        Are you sure you want to delete <span className='font-semibold text-gray-800'>"{taskTitle}"</span>?
                    </p>
                    <p className='text-sm text-gray-500 mt-2'>
                        This action cannot be undone.
                    </p>
                </div>

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
                        type='button'
                        onClick={() => {
                            onConfirm();
                            onClose();
                        }}
                        className='px-6 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors'
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmation
