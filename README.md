# Task Master 📝

A robust, performant, and testable Task Management application built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Full CRUD**: Create, Read, Update (Toggle Status), and Delete tasks.
- **Advanced Filtering**: Toggle between 'All', 'Completed', and 'Pending' tasks.
- **API Integration**: Initial data fetching from JSONPlaceholder.
- **Persistence**: LocalStorage integration to keep your tasks across sessions.
- **Animations**: Sophisticated layout transitions and micro-interactions with Framer Motion.
- **Responsive Design**: Mobile-first approach using Tailwind CSS.
- **User Feedback**: Toast notifications for all major actions.
- **Skeleton Loading**: Polished loading states for better UX.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) (Vite)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **Testing**: [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

### Testing

```bash
# Run the test suite
npm test
```

### Building for Production

```bash
# Create a production build
npm run build

# Preview the production build
npm run preview
```

## 🏗️ Architecture

The project follows a clean architecture by decoupling business logic from the UI layer:

- **Hooks (`/src/hooks`)**: The `useTasks` custom hook manages all application state, API calls, and CRUD logic.
- **Components (`/src/components`)**: Pure UI components that receive data and callbacks via props.
- **Testing (`/src/__tests__`)**: Comprehensive unit and integration tests for both logic and UI.

## 🧪 Testing Strategy

- **Logic Testing**: Validates that `addTask`, `toggleTask`, and `deleteTask` correctly update the state.
- **Filter Testing**: Ensures that the filtering logic returns the correct subset of tasks.
- **Component Testing**: Verifies that user interactions (clicks, input) trigger the expected behavior.
