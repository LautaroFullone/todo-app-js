export default function Filter({ search, onFilter }) {
  return (
      <>
          <hr style={{ marginBottom: '1rem' }} />
          <input type="text"
              value={search}
              className="todo-input"
              placeholder="Filter tasks by name"
              onChange={onFilter}
              style={{ marginTop: 0, marginBottom: '1rem' }}
          />
          <hr style={{ marginBottom: '2rem' }} />
      </>
  )
}
