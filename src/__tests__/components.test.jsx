import { render, screen, fireEvent } from '@testing-library/react';
import { TaskInput } from '../components/TaskInput';
import { TaskItem } from '../components/TaskItem';
import { describe, it, expect, vi } from 'vitest';

describe('Components', () => {
  describe('TaskInput', () => {
    it('should call onAdd and clear input when submitted', () => {
      const onAdd = vi.fn();
      render(<TaskInput onAdd={onAdd} />);
      
      const input = screen.getByPlaceholderText(/Add a new task/i);
      const button = screen.getByRole('button', { name: /add/i });

      fireEvent.change(input, { target: { value: 'New Task' } });
      fireEvent.click(button);

      expect(onAdd).toHaveBeenCalledWith('New Task');
      expect(input.value).toBe('');
    });

    it('should not call onAdd if input is empty', () => {
      const onAdd = vi.fn();
      render(<TaskInput onAdd={onAdd} />);
      
      const button = screen.getByRole('button', { name: /add/i });
      fireEvent.click(button);

      expect(onAdd).not.toHaveBeenCalled();
    });
  });

  describe('TaskItem', () => {
    const task = { id: 1, title: 'Test Task', completed: false };

    it('should call onToggle when checkbox is clicked', () => {
      const onToggle = vi.fn();
      render(<TaskItem task={task} onToggle={onToggle} onDelete={() => {}} />);
      
      const toggleButton = screen.getByLabelText(/mark as completed/i);
      fireEvent.click(toggleButton);

      expect(onToggle).toHaveBeenCalledWith(1);
    });

    it('should call onDelete when delete button is clicked', () => {
      const onDelete = vi.fn();
      render(<TaskItem task={task} onToggle={() => {}} onDelete={onDelete} />);
      
      const deleteButton = screen.getByLabelText(/delete task/i);
      fireEvent.click(deleteButton);

      expect(onDelete).toHaveBeenCalledWith(1);
    });
  });
});
