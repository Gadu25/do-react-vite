import TaskList from "../components/TaskList";

function Completed({tasks, deleteTask, addTask, markAsDone}) {
  return (
    <>
      <div className="completed-content">
        <TaskList 
          tasks={tasks.filter((task) => task.isDone===true)}
          deleteTask={deleteTask}
          addTask={addTask}
          markAsDone={markAsDone}
        />
      </div>
    </>
  )
}

export default Completed;