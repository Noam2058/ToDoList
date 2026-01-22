# 📝 Todo Manager

A modern and feature-rich todo management application built with React and Vite. The app enables efficient task management with features such as filtering, editing, and saving via LocalStorage.

## 🎯 Features

- ✅ **Add Tasks** - Create new tasks with text descriptions
- ✅ **Mark Complete** - Mark tasks as done or undone
- ✅ **Edit Tasks** - Change the description of existing tasks
- ✅ **Delete Tasks** - Remove tasks from the list
- ✅ **Smart Filtering** - View all tasks, only active tasks, or only completed tasks
- ✅ **Auto-Save** - Tasks are automatically saved in LocalStorage between sessions
- ✅ **Task Statistics** - Display task stats (total, active, completed)
- ✅ **Clear Completed** - Remove all completed tasks at once
- ✅ **User-Friendly Interface** - Modern design with animations and responsive layout
- ✅ **Cross-Tab Sync** - Changes sync in real-time across browser tabs

## 🏗️ Component Structure

| Component | Responsibility |
|-----------|--------|
| `App.jsx` | Main state management, LocalStorage persistence, initialization |
| `TodoInput.jsx` | Form for entering new tasks with validation |
| `TodoItem.jsx` | Display individual task with toggle, edit, and delete options |
| `TodoList.jsx` | Render filtered task list and clear completed button |
| `FilterButtons.jsx` | Filter buttons (All, In Progress, Completed) with visual feedback |
| `TodoStats.jsx` | Display statistics: completion %, active tasks, completed tasks, total |

## 🚀 Local Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation & Running Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run in development mode:**
   ```bash
   npm run dev
   ```
   The app will automatically open in your browser at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Run tests (optional):**
   ```bash
   npm test
   ```

## 📋 Usage Instructions

1. **Add a task**: Type a description in the input field and click the "+" button
2. **Mark task complete**: Click the checkbox next to the task
3. **Edit a task**: Click the edit button (✏️) and update the text
4. **Delete a task**: Click the delete button (🗑️)
5. **Filter tasks**: Choose between "All", "In Progress", or "Completed"
6. **Clear completed**: Click "Clear Completed Tasks" button

## 💾 Data Persistence

Tasks are automatically saved to the browser's LocalStorage. When you refresh the page, all tasks are loaded automatically using lazy initialization. Changes are also synced in real-time across multiple browser tabs.

## 🎨 Technologies Used

- **React 19** - UI library with Functional Components
- **Vite** - Fast build tool
- **CSS3** - Styling with animations and gradients
- **Vitest + React Testing Library** - Unit testing (optional)

## 🔧 Additional Technologies

- Hooks: `useState`, `useEffect`
- ES6+ (arrow functions, destructuring, const/let)
- LocalStorage API
- CSS Modules
- Cross-tab communication with `storage` event

## ⚠️ Limitations

- LocalStorage only supports text - tasks are stored as JSON strings
- No support for task categories or scopes

## 📝 Code Notes

- Each task receives a unique ID (timestamp-based)
- Filtering is performed client-side based on user selection
- State flows unidirectionally: Props down, Events up
- No external state management libraries (Redux, etc.)
- Code is clean with no console errors
- **Cross-Tab Sync**: Changes are synced between tabs using `storage` event listener
- **Auto-Save**: Tasks are saved to LocalStorage with lazy initialization

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [MDN - localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

**Creator**: Noam Barkai  
**Version**: 1.0.0  
**Date**: January 2026
