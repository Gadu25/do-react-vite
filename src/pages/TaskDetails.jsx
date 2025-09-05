import { useParams } from "react-router-dom";

function TaskDetails({tasks}) {
  const {id} = useParams()

  const task = tasks.find((t) => t.id == id)

  if (!task) return <p>Task not found</p>;

  return (
    <>
    <div>
      <h1>{task.name}</h1>
      <p>{task.description}</p>
    </div>
    </>
  )
}

export default TaskDetails;