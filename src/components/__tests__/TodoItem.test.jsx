import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import TodoItem from '../TodoItem'

describe('TodoItem Component', () => {
  const mockTodo = {
    id: 1,
    description: 'Test Todo',
    completed: false,
    createdAt: '2024-01-01T00:00:00Z'
  }

  it('renders todo description', () => {
    const mockFunctions = {
      onToggleTodo: () => {},
      onEditTodo: () => {},
      onDeleteTodo: () => {}
    }
    
    render(
      <TodoItem
        todo={mockTodo}
        {...mockFunctions}
      />
    )
    
    expect(screen.getByText('Test Todo')).toBeInTheDocument()
  })

  it('calls onToggleTodo when checkbox is clicked', () => {
    const mockOnToggleTodo = vi.fn()
    const mockFunctions = {
      onToggleTodo: mockOnToggleTodo,
      onEditTodo: () => {},
      onDeleteTodo: () => {}
    }
    
    render(
      <TodoItem
        todo={mockTodo}
        {...mockFunctions}
      />
    )
    
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
    
    expect(mockOnToggleTodo).toHaveBeenCalledWith(1)
  })

  it('shows edit input when edit button is clicked', () => {
    const mockFunctions = {
      onToggleTodo: () => {},
      onEditTodo: () => {},
      onDeleteTodo: () => {}
    }
    
    render(
      <TodoItem
        todo={mockTodo}
        {...mockFunctions}
      />
    )
    
    const editButton = screen.getByLabelText('ערוך משימה')
    fireEvent.click(editButton)
    
    const editInput = screen.getByDisplayValue('Test Todo')
    expect(editInput).toBeInTheDocument()
  })

  it('calls onDeleteTodo when delete button is clicked', () => {
    const mockOnDeleteTodo = vi.fn()
    const mockFunctions = {
      onToggleTodo: () => {},
      onEditTodo: () => {},
      onDeleteTodo: mockOnDeleteTodo
    }
    
    render(
      <TodoItem
        todo={mockTodo}
        {...mockFunctions}
      />
    )
    
    const deleteButton = screen.getByLabelText('מחק משימה')
    fireEvent.click(deleteButton)
    
    expect(mockOnDeleteTodo).toHaveBeenCalledWith(1)
  })
})
