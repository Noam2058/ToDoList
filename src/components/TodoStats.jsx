import './TodoStats.css'

function TodoStats({ activeTodoCount, totalTodos, completedTodos }) {
  const completionPercentage = totalTodos === 0 ? 0 : Math.round((completedTodos / totalTodos) * 100)

  return (
    <div className="todo-stats">
      <div className="stat-card">
        <div className="stat-icon percentage">📈</div>
        <span className="stat-count">{completionPercentage}%</span>
        <span className="stat-label">אחוז השלמה</span>
      </div>
      <div className="stat-card">
        <div className="stat-icon active">●</div>
        <span className="stat-count">{activeTodoCount}</span>
        <span className="stat-label">בעיצומן</span>
      </div>
      <div className="stat-card">
        <div className="stat-icon completed">✓</div>
        <span className="stat-count">{completedTodos}</span>
        <span className="stat-label">הושלמו</span>
      </div>
      <div className="stat-card">
        <div className="stat-icon pending">⏰</div>
        <span className="stat-count">{totalTodos}</span>
        <span className="stat-label">סה״כ משימות</span>
      </div>
    </div>
  )
}

export default TodoStats
