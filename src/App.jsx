import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  const [tasks, setTasks] = useState([]);

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  const addTask = (task) => {
    //assigning of id
    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    task.id = newId;

    setTasks([...tasks, task]);
  }

  const markAsDone = (id) => {
    setTasks(tasks.map(task => 
      task.id == id ? {...task, isDone: true} : task
    ))
  }

  return (
    <>
      <h1>Do React</h1>

      <nav>
        <Link to="/">Tasks</Link> |{" "}
        <Link to="/form">Form</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <TaskList tasks={tasks} markAsDone={markAsDone} deleteTask={deleteTask}/>
        } />
        <Route path="/form" element={
          <TaskForm addTask={addTask} />
        } />
      </Routes>
    </>
  )
}

export default App
