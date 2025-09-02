function TaskList({tasks, markAsDone, deleteTask}) {
  return (
    <>
      { tasks.length === 0 ? 
      (<p>No tasks available.</p>)
      :
      (
      <table>
        <thead>
          <td>id</td>
          <td>Name</td>
          <td>Description</td>
          <td colSpan={2}>Actions</td>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id} className={task.isDone ? "done" : ""}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td><button onClick={() => markAsDone(task.id)} className="button" disabled={task.isDone}>Done</button></td>
              <td><button onClick={() => deleteTask(task.id)} className="button" disabled={task.isDone}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </>
  )
}

export default TaskList