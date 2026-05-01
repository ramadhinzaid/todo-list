import { useState } from 'react';
import { Plus } from 'lucide-react';
import toast from 'react-hot-toast';

export const TaskInput = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error('Please enter a task title');
      return;
    }
    onAdd(title);
    setTitle('');
    toast.success('Task added successfully');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md mx-auto mb-8">
      <div className="relative flex-1">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
          className="w-full px-4 py-2 border border-gray-300 placeholder:text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:border-gray-700"
          aria-label="New task title"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1 font-medium"
      >
        <Plus size={20} />
        Add
      </button>
    </form>
  );
};
