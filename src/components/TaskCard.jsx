import { TrashIcon } from '@heroicons/react/24/solid'

function TaskCard({task, index, markAsDone, deleteTask}) {
  return (
    <>
      <div key={index} className={`task ${task.isDone ? 'done': ''}`}>
        <div className="task-main">
          <div className="task-head">
            <input type="checkbox" className="task-checkbox" checked={task.isDone} onChange={(e) => markAsDone(e, task.id)}></input>
            <h3 className="title-title">{task.name}</h3>
          </div>
          <div className="task-description">
            <span>{task.description}</span>
          </div>
        </div>
        <div className="task-delete" onClick={() => deleteTask(task.id)}>
          <TrashIcon className="task-icon"/>
        </div>
      </div>
    </>
  )
}

export default TaskCard;