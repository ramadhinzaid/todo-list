import { useState, useEffect, useMemo } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=10';
const STORAGE_KEY = 'todo_app_tasks';

export const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  // Fetch initial tasks if localStorage is empty
  useEffect(() => {
    if (tasks.length === 0) {
      const fetchTasks = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(API_URL);
          if (!response.ok) throw new Error('Failed to fetch tasks');
          const data = await response.json();
          setTasks(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchTasks();
    }
  }, [tasks.length]);

  // Sync with LocalStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Derived State: Filtering
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'pending':
        return tasks.filter(task => !task.completed);
      case 'all':
      default:
        return tasks;
    }
  }, [tasks, filter]);

  // CRUD Operations
  const addTask = (title) => {
    if (!title.trim()) return;
    const newTask = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      title,
      completed: false,
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const toggleTask = (id) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return {
    tasks,
    filteredTasks,
    loading,
    error,
    filter,
    setFilter,
    addTask,
    toggleTask,
    deleteTask,
  };
};
