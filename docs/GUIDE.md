# Technical Test Guide: Task Management App (FE)

## 1. Core Requirements
- **CRUD Operations**: Create, Read, Update (Status), and Delete functionalities[cite: 1].
- **Filtering System**: Ability to toggle between 'All', 'Completed', and 'Pending' tasks[cite: 1].
- **API Integration**: Seamless integration with a mock API service (e.g., JSONPlaceholder)[cite: 1].

## 2. Architecture & Tech Stack
- **Framework**: React.js utilizing Functional Components and Hooks[cite: 1, 2].
- **State Management**: Implementation of Custom Hooks (`useTasks.js`) to decouple Business Logic from the UI Layer[cite: 1, 3].
- **Styling**: Tailwind CSS for high-performance, utility-first design[cite: 1].
- **Animations**: Framer Motion for sophisticated layout transitions and micro-interactions[cite: 3].

## 3. Unit Testing Strategy
Leverage Jest and React Testing Library (RTL) with the following test scenarios:
1. **Logic Testing**: Validate that `addTask` correctly updates the state independently of the UI[cite: 2, 3].
2. **Filter Testing**: Ensure that clicking the 'Completed' filter accurately renders only tasks with a completed status[cite: 2].
3. **User Interface Testing**: Verify that 'Loading' states are rendered correctly during data fetching and that empty states are handled gracefully[cite: 2, 3].

## 4. Assessment Criteria (Senior Checklist)
- **Clean Code & Design Patterns**: Adherence to DRY (Don't Repeat Yourself) principles and descriptive naming conventions[cite: 2].
- **Error Handling**: Comprehensive management of API failures and edge cases[cite: 2].
- **Accessibility (A11y)**: Implementation of semantic HTML tags and appropriate ARIA attributes[cite: 2, 3].
- **Performance Optimization**: Minimizing unnecessary re-renders, especially when handling larger datasets[cite: 2, 3].

## 5. Getting Started
```bash
# Install dependencies
npm install

# Run the test suite
npm test

# Start the development server
npm start