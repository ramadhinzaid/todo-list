# Implementation Plan - Phase 3: UI/UX & Motion Design

## Objective
Build a responsive, accessible, and animated user interface using Tailwind CSS and Framer Motion. Provide clear user feedback via toasts and loading states.

## Key Files & Context
- `src/components/`: Directory for all UI components.
- `src/App.jsx`: Main entry point to assemble components.
- `docs/GUIDE.md`: Reference for styling and animation requirements.

## Implementation Steps

### 1. Create Atomic Components
- **`TaskInput.jsx`**:
  - Form with a controlled input and "Add" button.
  - Basic validation (prevent empty tasks).
  - Accessibility: Use `<label>` and proper `aria-label`.
- **`TaskItem.jsx`**:
  - Display task title and checkbox.
  - Delete button (using `Trash2` icon from `lucide-react`).
  - Accessibility: Use `<button>` for actions.
- **`TaskFilters.jsx`**:
  - Buttons for 'All', 'Completed', and 'Pending'.
  - Visual indication of the active filter.

### 2. Layout & Assembly
- **`TaskList.jsx`**:
  - Map through `filteredTasks` and render `TaskItem` for each.
  - Handle empty states (display a friendly message).
- **`App.jsx`**:
  - Combine `TaskInput`, `TaskFilters`, and `TaskList`.
  - Use Tailwind for a clean, centered layout (max-width, auto margins).

### 3. Add Animations (Framer Motion)
- **`AnimatePresence`**: Wrap the task list to animate additions and removals.
- **`TaskItem` Variants**:
  - `initial`: Slide in from side or fade in.
  - `animate`: Scale up slightly.
  - `exit`: Slide out or fade out.
  - `layout`: Ensure smooth reordering when tasks are deleted or filtered.

### 4. User Feedback (React Hot Toast)
- Add `<Toaster />` to `App.jsx`.
- Trigger `toast.success()` on adding or completing tasks.
- Trigger `toast.error()` on API failures or validation errors.

### 5. Skeleton Loading
- Create a `TaskSkeleton.jsx` component that mimics the `TaskItem` layout with a shimmering effect.
- Show skeletons while `loading` is true in `useTasks`.

## Verification & Testing
- **Responsiveness**: Check mobile, tablet, and desktop views using browser dev tools.
- **A11y**: Navigate the app using only the keyboard (`Tab`, `Space`, `Enter`).
- **Animations**: Verify that adding/removing tasks feels smooth and not jarring.
