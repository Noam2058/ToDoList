import { useState } from 'react'
import './TodoItem.css'

function TodoItem({ todo, onToggleTodo, onEditTodo, onDeleteTodo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(todo.description)

  const handleSaveEdit = () => {
    const trimmedValue = editValue.trim()
    
    if (trimmedValue.length === 0) {
      alert('תיאור המשימה לא יכול להיות ריק')
      setEditValue(todo.description)
      setIsEditing(false)
      return
    }

    if (trimmedValue.length > 100) {
      alert('תיאור המשימה חייב להיות קצר מ-100 תווים')
      return
    }

    onEditTodo(todo.id, trimmedValue)
    setIsEditing(false)
  }

  const handleCancelEdit = () => {
    setEditValue(todo.description)
    setIsEditing(false)
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <label className="checkbox-label">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
          aria-label={`סימן משימה: ${todo.description}`}
        />
        <span className="checkbox-custom"></span>
      </label>

      {isEditing ? (
        <div className="edit-input-container">
          <input
            type="text"
            className="edit-input"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            maxLength="100"
            autoFocus
          />
          <button
            className="save-button"
            onClick={handleSaveEdit}
            aria-label="שמור עריכה"
          >
            ✓
          </button>
          <button
            className="cancel-button"
            onClick={handleCancelEdit}
            aria-label="בטל עריכה"
          >
            ✕
          </button>
        </div>
      ) : (
        <>
          <span className={`todo-description ${todo.completed ? 'completed-text' : ''}`}>
            {todo.description}
          </span>
          <div className="todo-actions">
            <button
              className="edit-button"
              onClick={() => setIsEditing(true)}
              aria-label="ערוך משימה"
              title="ערוך"
            >
              ✏️
            </button>
            <button
              className="delete-button"
              onClick={() => onDeleteTodo(todo.id)}
              aria-label="מחק משימה"
              title="מחק"
            >
              🗑️
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default TodoItem