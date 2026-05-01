import { renderHook, act, waitFor } from '@testing-library/react';
import { useTasks } from '../hooks/useTasks';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('useTasks Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    window.fetch.mockReset();
  });

  it('should initialize with empty tasks if localStorage is empty', async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    const { result } = renderHook(() => useTasks());
    
    expect(result.current.tasks).toEqual([]);
    expect(result.current.loading).toBe(true);
    
    await waitFor(() => expect(result.current.loading).toBe(false));
  });

  it('should add a task', async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    const { result } = renderHook(() => useTasks());
    await waitFor(() => expect(result.current.loading).toBe(false));

    act(() => {
      result.current.addTask('Test Task');
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].title).toBe('Test Task');
    expect(result.current.tasks[0].completed).toBe(false);
  });

  it('should toggle a task status', async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    const { result } = renderHook(() => useTasks());
    await waitFor(() => expect(result.current.loading).toBe(false));

    act(() => {
      result.current.addTask('Test Task');
    });

    const taskId = result.current.tasks[0].id;

    act(() => {
      result.current.toggleTask(taskId);
    });

    expect(result.current.tasks[0].completed).toBe(true);

    act(() => {
      result.current.toggleTask(taskId);
    });

    expect(result.current.tasks[0].completed).toBe(false);
  });

  it('should delete a task', async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    const { result } = renderHook(() => useTasks());
    await waitFor(() => expect(result.current.loading).toBe(false));

    act(() => {
      result.current.addTask('Task to delete');
    });

    const taskId = result.current.tasks[0].id;

    act(() => {
      result.current.deleteTask(taskId);
    });

    expect(result.current.tasks).toHaveLength(0);
  });

  it('should filter tasks correctly', async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    const { result } = renderHook(() => useTasks());
    await waitFor(() => expect(result.current.loading).toBe(false));

    act(() => {
      result.current.addTask('Task 1');
    });
    act(() => {
      result.current.addTask('Task 2');
    });

    // Task 2 is at index 0, Task 1 is at index 1
    const taskId1 = result.current.tasks[1].id;

    act(() => {
      result.current.toggleTask(taskId1);
    });

    expect(result.current.tasks.find(t => t.id === taskId1).completed).toBe(true);

    act(() => {
      result.current.setFilter('completed');
    });

    expect(result.current.filter).toBe('completed');
    expect(result.current.filteredTasks).toHaveLength(1);
    expect(result.current.filteredTasks[0].title).toBe('Task 1');

    act(() => {
      result.current.setFilter('pending');
    });

    expect(result.current.filter).toBe('pending');
    expect(result.current.filteredTasks).toHaveLength(1);
    expect(result.current.filteredTasks[0].title).toBe('Task 2');
  });
});
