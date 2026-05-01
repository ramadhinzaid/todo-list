# Implementation Plan - Phase 1: Setup & Core Architecture

## Objective
Establish the foundational setup for the Task Management application, including styling, dependencies, and project structure as defined in Phase 1 of the Development Plan.

## Key Files & Context
- `package.json`: Will be updated with new dependencies.
- `tailwind.config.js`: New configuration file for Tailwind CSS.
- `postcss.config.js`: New configuration file for PostCSS.
- `src/index.css`: Will be updated to include Tailwind directives.
- `src/`: Root for the new folder structure.

## Implementation Steps

### 1. Install Dependencies
- **Task**: Install styling and core application dependencies.
- **Commands**:
  - `npm install -D tailwindcss @tailwindcss/postcss postcss autoprefixer`
  - `npm install framer-motion lucide-react react-hot-toast`

### 2. Configure Tailwind CSS
- **Task**: Initialize and configure Tailwind for the Vite project.
- **Steps**:
  - Create `tailwind.config.js` and `postcss.config.js`.
  - Update `content` in `tailwind.config.js`:
    ```javascript
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```
  - Update `postcss.config.js` for Tailwind 4:
    ```javascript
    export default {
      plugins: {
        '@tailwindcss/postcss': {},
        autoprefixer: {},
      },
    }
    ```
  - Prepend `@tailwind` directives to `src/index.css`:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

### 3. Establish Folder Structure
- **Task**: Create a clean, scalable directory organization.
- **Directories to create**:
  - `src/components`
  - `src/hooks`
  - `src/utils`
  - `src/__tests__`

### 4. Project Cleanup & Verification
- **Task**: Ensure the project is clean and configuration is working.
- **Steps**:
  - Remove boilerplate styles from `src/App.css` if necessary to avoid conflicts with Tailwind.
  - Add a test Tailwind class (e.g., `text-3xl font-bold underline`) to `src/App.jsx` to verify setup.
  - Run `npm run dev` to verify the application starts correctly.

## Verification & Testing
- **Dependency Check**: Run `npm list` to verify all new packages are installed.
- **Config Check**: Verify `tailwind.config.js` exists and has the correct `content` paths.
- **Structure Check**: Verify all new directories exist in `src/`.
- **Visual Check**: Confirm Tailwind styles are applied in the browser.
