import TaskCard from './TaskCard'

function TaskList({tasks, markAsDone, deleteTask}) {
  return (
    <>
      <div className="task-list-container">
        { tasks.length === 0 ? 
        (<p>No tasks available.</p>)
        :
        (
          tasks.map((task) => (
            <TaskCard 
              task={task} 
              index={task.id} 
              markAsDone={markAsDone}
              deleteTask={deleteTask}
            />
          ))
        )
        }
      </div>
    </>
  )
}

export default TaskList