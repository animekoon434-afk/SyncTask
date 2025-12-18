import React from 'react'
import TaskCard from './TaskCard'
import { useTheme } from '../context/useTheme'

const TaskColumn = ({ title, img, tasks, onDelete, onUpdate }) => {
    const { isDark } = useTheme();

    return (
        <section className={`flex-1 max-w-md border rounded-2xl p-5 transition-colors duration-300 ${isDark
            ? 'bg-slate-800/50 border-slate-700 backdrop-blur-sm'
            : 'bg-white/80 border-stone-200 shadow-sm'
            }`}>
            <h2 className={`flex justify-center items-center mb-6 pb-4 border-b ${isDark ? 'border-slate-700' : 'border-stone-200'}`}>
                <img className='mr-2 w-7 h-7' src={img} alt={title} />
                <span className={`font-semibold text-lg ${isDark ? 'text-gray-200' : 'text-stone-700'}`}>{title}</span>
                <span className={`ml-2 px-2 py-0.5 text-xs font-medium rounded-full ${isDark ? 'bg-slate-700 text-slate-300' : 'bg-stone-100 text-stone-600'
                    }`}>
                    {tasks?.length || 0}
                </span>
            </h2>

            <div className='max-h-[calc(100vh-320px)] overflow-y-auto scrollbar-thin pr-2 -mr-2'>
                {tasks && tasks.length > 0 ? (
                    tasks.map((task) => <TaskCard key={task._id} task={task} onDelete={onDelete} onUpdate={onUpdate} />)
                ) : (
                    <div className={`flex flex-col items-center justify-center py-12 ${isDark ? 'text-slate-500' : 'text-stone-400'}`}>
                        <svg className="w-12 h-12 mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <p className='text-base font-medium'>No tasks yet</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default TaskColumn