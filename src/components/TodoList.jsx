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
  return (
    <div className="todo-list-container">
      {todos.length === 0 ? (
        <div className="no-todos-message">
          <div className="empty-icon">📋</div>
          <p>אין משימות להצגה</p>
          <span className="empty-subtitle">התחל ליצור משימה חדשה</span>
        </div>
      ) : (
        <>
          <div className="todo-list">
            {todos.map(todo => (
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