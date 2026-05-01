# Implementation Plan - Phase 2: Business Logic (Core)

## Objective
Develop the core task management logic using a custom React hook. This hook will handle API integration, local state management, CRUD operations, and filtering.

## Key Files & Context
- `src/hooks/useTasks.js`: The central location for all task-related logic.
- `src/utils/api.js`: (Optional) Helper functions for API calls.
- `docs/GUIDE.md`: Reference for requirements (JSONPlaceholder, CRUD, Filtering).

## Implementation Steps

### 1. Define Task Data Structure
- Each task should have: `id` (number), `title` (string), `completed` (boolean), and optionally `userId`.

### 2. Create the `useTasks` Hook
- **File**: `src/hooks/useTasks.js`
- **Initial State**:
  - `tasks`: Array of task objects.
  - `loading`: Boolean for fetch status.
  - `error`: String or null for error messages.
  - `filter`: Current filter status ('all', 'completed', 'pending').

### 3. Implement Data Fetching
- **Source**: `https://jsonplaceholder.typicode.com/todos?_limit=10`
- **Logic**: Use `useEffect` to fetch tasks on mount.
- **Error Handling**: Use `try/catch` blocks. Provide meaningful error messages.

### 4. Implement CRUD Operations
- **`addTask(title)`**: 
  - Create a new task object with a unique ID (can use `Date.now()`).
  - Prepend to the `tasks` state.
- **`toggleTask(id)`**:
  - Map through tasks and flip the `completed` status for the matching ID.
- **`deleteTask(id)`**:
  - Filter out the task with the matching ID.

### 5. Implement Filtering Logic
- **`setFilter(status)`**: Update the filter state.
- **Derived State**: Use `useMemo` to create a `filteredTasks` array based on the current `tasks` and `filter` state.

### 6. LocalStorage Persistence
- **Sync**: Use a `useEffect` to save the `tasks` array to `localStorage` whenever it changes.
- **Initialization**: Load initial state from `localStorage` before falling back to API fetch or empty array.

## Verification & Testing
- **Console Logs**: Temporarily log `tasks` and `filteredTasks` to verify logic.
- **Manual Toggle**: Verify state updates correctly when functions are called (can be tested by temporarily exposing them in `App.jsx`).
- **Persistence**: Refresh the page and ensure tasks remain (if loaded from localStorage).
