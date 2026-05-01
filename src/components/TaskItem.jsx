import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, CheckCircle, Circle } from 'lucide-react';
import toast from 'react-hot-toast';
import { ConfirmModal } from './ConfirmModal';

export const TaskItem = ({ task, onToggle, onDelete }) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleDelete = () => {
    onDelete(task.id);
    toast.success('Task deleted');
    setIsConfirmOpen(false);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm mb-3 group"
    >
      <button
        onClick={() => onToggle(task.id)}
        className={`transition-colors ${task.completed ? 'text-green-500' : 'text-gray-400 hover:text-blue-500'}`}
        aria-label={task.completed ? 'Mark as pending' : 'Mark as completed'}
      >
        {task.completed ? <CheckCircle size={22} /> : <Circle size={22} />}
      </button>

      <span className={`flex-1 text-left ${task.completed ? 'line-through text-gray-400' : 'text-gray-700 dark:text-gray-200'}`}>
        {task.title}
      </span>

      <button
        onClick={() => setIsConfirmOpen(true)}
        className="opacity-0 group-hover:opacity-100 transition-opacity text-red-400 hover:text-red-600 p-1"
        aria-label="Delete task"
      >
        <Trash2 size={18} />
      </button>

      <ConfirmModal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={handleDelete}
        title="Delete Task"
        message="Are you sure you want to delete this task? This action cannot be undone."
      />
    </motion.div>
  );
};
