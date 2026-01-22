import { useState } from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

function TodoList({
  todos,
  onToggleTodo,
  onEditTodo,
  onDeleteTodo,
  onClearCompleted,
  hasCompletedTodos
}) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTodos = todos.filter(todo =>
    todo.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="todo-list-container">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="חיפוש משימות..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span className="search-icon">🔍</span>
      </div>

      {filteredTodos.length === 0 && todos.length === 0 ? (
        <div className="no-todos-message">
          <div className="empty-icon">📋</div>
          <p>אין משימות להצגה</p>
          <span className="empty-subtitle">התחל ליצור משימה חדשה</span>
        </div>
      ) : filteredTodos.length === 0 ? (
        <div className="no-todos-message">
          <div className="empty-icon">🔍</div>
          <p>לא נמצאו משימות</p>
          <span className="empty-subtitle">נסה חיפוש שונה</span>
        </div>
      ) : (
        <>
          <div className="todo-list">
            {filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleTodo={onToggleTodo}
                onEditTodo={onEditTodo}
                onDeleteTodo={onDeleteTodo}
              />
            ))}
          </div>

          {hasCompletedTodos && (
            <button
              className="clear-completed-button"
              onClick={onClearCompleted}
              aria-label="נקה משימות שהושלמו"
            >
              נקה משימות שהושלמו
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default TodoList