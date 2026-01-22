import { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import FilterButtons from './components/FilterButtons'
import TodoStats from './components/TodoStats'
import './App.css'

// Initialize todos from localStorage
const initializeTodos = () => {
  try {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  } catch (error) {
    console.error('Error loading todos from localStorage:', error)
    return []
  }
}

function App() {
  const [todos, setTodos] = useState(initializeTodos)
  const [filter, setFilter] = useState('all')

  // Sync todos across tabs and save to localStorage
  useEffect(() => {
    // Always save to localStorage whenever todos change
    localStorage.setItem('todos', JSON.stringify(todos))

    // Listen for changes from other tabs
    const handleStorageChange = (e) => {
      if (e.key === 'todos' && e.newValue) {
        try {
          setTodos(JSON.parse(e.newValue))
        } catch (error) {
          console.error('Error syncing todos from other tab:', error)
        }
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [todos])

  // Add a new todo
  const addTodo = (description) => {
    const newTodo = {
      id: Date.now(),
      description,
      completed: false,
      createdAt: new Date().toISOString()
    }
    setTodos([newTodo, ...todos])
  }

  // Toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Edit todo description
  const editTodo = (id, newDescription) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, description: newDescription } : todo
    ))
  }

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  // Filter todos based on current filter
  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      case 'all':
      default:
        return todos
    }
  }

  const filteredTodos = getFilteredTodos()
  const activeTodoCount = todos.filter(todo => !todo.completed).length

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-header-left">
          <div className="app-header-icon">✓</div>
          <div>
            <h1>מנהל משימות</h1>
            <p className="app-header-subtitle">ארגנו את המשימות שלכם ביעילות</p>
          </div>
        </div>
        <div className="app-header-right">
          <div className="header-icon">📅</div>
          <button className="header-btn">+</button>
        </div>
      </header>

      <main className="app-main">
        <TodoInput onAddTodo={addTodo} />

        <TodoStats 
          activeTodoCount={activeTodoCount} 
          totalTodos={todos.length}
          completedTodos={todos.filter(todo => todo.completed).length}
        />

        <FilterButtons 
          currentFilter={filter} 
          onFilterChange={setFilter}
        />

        <TodoList
          todos={filteredTodos}
          onToggleTodo={toggleTodo}
          onEditTodo={editTodo}
          onDeleteTodo={deleteTodo}
          onClearCompleted={clearCompleted}
          hasCompletedTodos={todos.some(todo => todo.completed)}
        />

        {todos.length === 0 && (
          <div className="empty-state">
            <p>🎉 אין לך משימות! עובד/ת נשמר/ת!</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
