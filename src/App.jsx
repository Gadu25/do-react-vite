import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Header from './layouts/header'
import Home from './pages/Home'
import Completed from './pages/Completed'
import About from './pages/About'

function App() {
  // props drill for the meantime - will update to redux
  const [tasks, setTasks] = useState([]);
    
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  const addTask = (task) => {
    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    task.id = newId;

    setTasks([...tasks, task]);
  }

  const markAsDone = (e, id) => {
    setTasks(tasks.map(task => 
      task.id == id ? {...task, isDone: e.target.checked} : task
    ))
  }

  return (
    <>
      <Header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/completed" >Completed</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </Header>

      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home 
            tasks={tasks}
            deleteTask={deleteTask}
            addTask={addTask}
            markAsDone={markAsDone} 
          />}/>
          <Route path="/completed" element={<Completed
            tasks={tasks}
            deleteTask={deleteTask}
            addTask={addTask}
            markAsDone={markAsDone} 
          />}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
