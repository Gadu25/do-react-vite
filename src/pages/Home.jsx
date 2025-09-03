import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

function Home({tasks, deleteTask, addTask, markAsDone}) {
  return (
    <>
      <div className="home-content">
        <div className="content-column">
          <TaskList 
            tasks={tasks} 
            markAsDone={markAsDone} 
            deleteTask={deleteTask}
          />
        </div>
        <div className="content-column">
          <TaskForm addTask={addTask} />
        </div>
      </div>
    </>
  )
}

export default Home;