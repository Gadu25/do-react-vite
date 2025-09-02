import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

import Header from './layouts/header'

import Home from './pages/Home'
import Completed from './pages/Completed'
import About from './pages/About'

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
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/completed">Completed</Link>
          <Link to="/about">About</Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/completed" element={<Completed/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>

      {/* <nav>
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
      </Routes> */}
    </>
  )
}

export default App
