import { Toaster } from 'react-hot-toast';
import { useTasks } from './hooks/useTasks';
import { TaskInput } from './components/TaskInput';
import { TaskFilters } from './components/TaskFilters';
import { TaskList } from './components/TaskList';
import { TaskSkeleton } from './components/TaskSkeleton';
import { ListChecks } from 'lucide-react';

function App() {
  const { 
    filteredTasks, 
    loading, 
    error, 
    filter, 
    setFilter, 
    addTask, 
    toggleTask, 
    deleteTask 
  } = useTasks();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4 transition-colors">
      <Toaster position="bottom-right" />
      
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-10">
          <div className="flex justify-center mb-4 text-blue-600">
            <ListChecks size={48} strokeWidth={2.5} />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">
            Task Master
          </h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            Stay organized and productive.
          </p>
        </header>

        <main className="bg-white dark:bg-gray-900 shadow-xl shadow-blue-500/5 rounded-3xl p-6 md:p-8 border border-gray-100 dark:border-gray-800">
          <TaskInput onAdd={addTask} />
          
          <TaskFilters 
            currentFilter={filter} 
            onFilterChange={setFilter} 
          />

          {error && (
            <div className="p-4 mb-6 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl text-center text-sm font-medium border border-red-100 dark:border-red-900/30">
              Error: {error}
            </div>
          )}

          {loading ? (
            <TaskSkeleton />
          ) : (
            <TaskList 
              tasks={filteredTasks} 
              onToggle={toggleTask} 
              onDelete={deleteTask} 
            />
          )}

          {!loading && filteredTasks.length > 0 && (
            <footer className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
              <p className="text-sm text-gray-400">
                Showing {filteredTasks.length} tasks
              </p>
            </footer>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
