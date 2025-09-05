import { useNavigate } from 'react-router-dom'
import TaskCard from './TaskCard'

function TaskList({tasks, markAsDone, deleteTask}) {
  const navigate = useNavigate();

  function visitTask(id) {
    console.log("hello", id)
    navigate(`task-details/${id}`)
  }

  return (
    <>
      <div className="task-list-container">
        { tasks.length === 0 ? 
        (<p>No tasks available.</p>)
        :
        tasks.map((task) => (
          <TaskCard 
            task={task} 
            markAsDone={markAsDone}
            deleteTask={deleteTask}
            key={task.id}
            onClick={() => visitTask(task.id)}
          />
        ))
        }
      </div>
    </>
  )
}

export default TaskList