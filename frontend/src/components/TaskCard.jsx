import React, { useState } from 'react'
import Priority from './Priority'
import Delete from '../assets/Delete.png'
import DeleteConfirmation from './DeleteConfirmation'
import UpdateForm from './UpdateForm'
import { useTheme } from '../context/useTheme'

const TaskCard = ({ task, onDelete, onUpdate }) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { isDark } = useTheme();
  const priority = task.priority;

  const handleDelete = () => {
    onDelete(task._id);
  }

  const hasDescription = task.description && task.description.trim() !== '';

  return (
    <>
      <article className={`w-full flex flex-col justify-between min-h-[110px] border rounded-xl p-4 my-3 mx-0 overflow-hidden ${isDark
        ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
        : 'bg-white border-stone-200 hover:border-stone-300 shadow-sm'
        } transition-all duration-200`}>
        <div className='flex items-start justify-between gap-2'>
          <p className={`text-base font-semibold wrap-break-word flex-1 ${isDark ? 'text-gray-100' : 'text-stone-800'}`}>{task.title}</p>
          <div
            onClick={() => setShowEditDialog(true)}
            className={`w-8 h-8 shrink-0 flex items-center justify-center cursor-pointer transition-all duration-200 rounded-lg group ${isDark ? 'hover:bg-gray-700' : 'hover:bg-stone-100'
              }`}>
            <i className={`bi bi-pencil-square text-base opacity-60 group-hover:opacity-100 transition-opacity ${isDark ? 'text-gray-400' : 'text-stone-500'}`}></i>
          </div>
        </div>

        {/* Description Section */}
        {hasDescription && (
          <div className='mt-2 overflow-hidden'>
            <p className={`text-sm leading-relaxed wrap-break-word whitespace-pre-wrap ${isDark ? 'text-gray-400' : 'text-stone-500'} ${!isExpanded ? 'line-clamp-2' : ''}`}>
              {task.description}
            </p>
            {task.description.length > 80 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`text-xs mt-1.5 font-medium transition-colors ${isDark ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`}
              >
                {isExpanded ? 'Show less' : 'Show more'}
              </button>
            )}
          </div>
        )}

        <div className='flex items-center justify-between mt-3'>
          <Priority name={priority} />
          <div
            onClick={() => setShowDeleteDialog(true)}
            className={`w-8 h-8 shrink-0 flex items-center justify-center cursor-pointer transition-all duration-200 rounded-lg group ${isDark ? 'hover:bg-red-900/40' : 'hover:bg-red-50'
              }`}>
            <img src={Delete} className={`w-4 opacity-60 group-hover:opacity-100 transition-opacity ${isDark ? 'invert' : ''}`} alt="Delete" />
          </div>
        </div>
      </article>

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmation
        show={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={handleDelete}
        taskTitle={task.title}
      />

      {/* Edit Dialog */}
      <UpdateForm
        show={showEditDialog}
        onClose={() => setShowEditDialog(false)}
        task={task}
        onUpdate={onUpdate}
      />
    </>
  )
}

export default TaskCard