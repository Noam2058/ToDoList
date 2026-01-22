import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import TodoInput from '../components/TodoInput'

describe('TodoInput Component', () => {
  it('renders input field and button', () => {
    const mockOnAddTodo = () => {}
    render(<TodoInput onAddTodo={mockOnAddTodo} />)
    
    const input = screen.getByPlaceholderText('הוסף משימה חדשה...')
    const button = screen.getByRole('button', { name: /הוסף/i })
    
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('calls onAddTodo with input value on submit', () => {
    const mockOnAddTodo = vi.fn()
    render(<TodoInput onAddTodo={mockOnAddTodo} />)
    
    const input = screen.getByPlaceholderText('הוסף משימה חדשה...')
    const button = screen.getByRole('button', { name: /הוסף/i })
    
    fireEvent.change(input, { target: { value: 'Test Todo' } })
    fireEvent.click(button)
    
    expect(mockOnAddTodo).toHaveBeenCalledWith('Test Todo')
  })

  it('clears input after successful submission', () => {
    const mockOnAddTodo = () => {}
    render(<TodoInput onAddTodo={mockOnAddTodo} />)
    
    const input = screen.getByPlaceholderText('הוסף משימה חדשה...')
    const button = screen.getByRole('button', { name: /הוסף/i })
    
    fireEvent.change(input, { target: { value: 'Test Todo' } })
    fireEvent.click(button)
    
    expect(input.value).toBe('')
  })

  it('shows alert when input is empty', () => {
    const mockOnAddTodo = () => {}
    window.alert = vi.fn()
    
    render(<TodoInput onAddTodo={mockOnAddTodo} />)
    
    const button = screen.getByRole('button', { name: /הוסף/i })
    fireEvent.click(button)
    
    expect(window.alert).toHaveBeenCalledWith('אנא הזן תיאור משימה')
  })
})
