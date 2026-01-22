import './FilterButtons.css'

function FilterButtons({ currentFilter, onFilterChange }) {
  const filters = [
    { id: 'all', label: 'הכל', color: '#667eea' },
    { id: 'active', label: 'בעיצומן', color: '#ff9f43' },
    { id: 'completed', label: 'הושלמו', color: '#4caf50' }
  ]

  return (
    <div className="filter-buttons-container">
      <div className="filter-buttons">
        {filters.map(filter => (
          <button
            key={filter.id}
            className={`filter-button ${currentFilter === filter.id ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.id)}
            aria-label={`סנן: ${filter.label}`}
            aria-pressed={currentFilter === filter.id}
            style={currentFilter === filter.id ? { '--accent-color': filter.color } : {}}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterButtons