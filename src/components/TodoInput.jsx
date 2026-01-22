import { useState } from 'react'
import './TodoInput.css'

function TodoInput({ onAddTodo }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedInput = input.trim()
    
    if (trimmedInput.length === 0) {
      alert('אנא הזן תיאור משימה')
      return
    }

    if (trimmedInput.length > 100) {
      alert('תיאור המשימה חייב להיות קצר מ-100 תווים')
      return
    }

    onAddTodo(trimmedInput)
    setInput('')
  }

  return (
    <form className="todo-input-form" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <input
          type="text"
          className="todo-input"
          placeholder="מה צריך לעשות?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength="100"
        />
        <button type="submit" className="add-button">
          +
        </button>
      </div>
    </form>
  )
}

export default TodoInput
