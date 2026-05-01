# Implementation Plan - Phase 4: Quality Assurance (Testing)

## Objective
Ensure application stability and correctness through unit and integration testing. Focus on business logic and core user interactions.

## Key Files & Context
- `src/__tests__/`: Directory for all test files.
- `src/hooks/useTasks.js`: Primary target for logic testing.
- `docs/GUIDE.md`: Reference for the testing strategy.

## Implementation Steps

### 1. Setup Testing Environment
- Ensure `jest` and `react-testing-library` are configured (should be standard in Vite/React if using a template, otherwise install).
- Create a `setupTests.js` if needed to mock `fetch` or `localStorage`.

### 2. Unit Testing: `useTasks` Hook
- **File**: `src/__tests__/useTasks.test.js`
- **Tests**:
  - Verify `tasks` is empty initially.
  - Test `addTask`: Ensure it adds a task and updates the state.
  - Test `toggleTask`: Ensure it flips the `completed` status correctly.
  - Test `deleteTask`: Ensure it removes the correct task.
  - Test `setFilter`: Ensure `filteredTasks` returns the correct subset.

### 3. Component Testing: `TaskItem` & `TaskInput`
- **Tests**:
  - `TaskInput`: Ensure the input clears after adding. Ensure the "Add" function is called with correct value.
  - `TaskItem`: Ensure clicking the checkbox triggers the toggle function. Ensure clicking the delete button triggers the delete function.

### 4. Integration Testing: Full Flow
- **Scenario**: 
  - Render the `App`.
  - Wait for tasks to load (mock API).
  - Add a new task.
  - Verify it appears in the list.
  - Change filter to 'Pending' and verify it's still there.
  - Delete it and verify it's gone.

### 5. Accessibility Testing
- Use `jest-axe` (if installed) to run automated accessibility audits on rendered components.

## Verification & Testing
- **Run Tests**: Execute `npm test`.
- **Coverage**: Aim for high coverage of the `useTasks` hook (90%+).
