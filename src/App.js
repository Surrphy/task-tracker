import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NewTask from './components/NewTask'
import Footer from './components/Footer'
import Header from './components/Header'
import Tasks from './components/Tasks'
import './index.css'

const tasksApiUrl = 'http://localhost:5000/tasks/'

function Homepage() {
  const [tasks, setTasks] = useState([])
  const [showNewTask, setShowNewTask] = useState(false)

  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasks()

      setTasks(data)
    }

    getTasks()
  }, [])

  //fetching tasks from (mock) api
  const fetchTasks = async () => {
    const res = await fetch(tasksApiUrl)
    return await res.json()
  }

  //toggle important
  const toggleImportant = async (taskToToggle) => {
    const id = taskToToggle.id
    const updatedTask = { ...taskToToggle, important: !taskToToggle.important}
    
    await fetch(`${tasksApiUrl}${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask)
    })

    setTasks(tasks.map(task => task.id === id ? updatedTask : task))
  }

  //delete task
  const deleteTask = async (id) => {
    await fetch(`${tasksApiUrl}${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter(task => task.id === id ? false : true))
  }

  //add new task
  const addNewTask = async (task) => {
    const res = await fetch(tasksApiUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([ ...tasks, data ])
  }



  return (
    <div className='container'>
      <Header toggleNewTask={() => setShowNewTask(!showNewTask)}/>
      {showNewTask ? <NewTask addNewTask={addNewTask} /> : ''}
      {tasks.length > 0 ? <Tasks tasks={tasks} toggleImportant={toggleImportant} deleteTask={deleteTask} /> : <p className='nomoretasks'>No more tasks</p>}
      <Footer />
    </div>
  );
}

function Aboutpage() {
  return (
    <div className='container'>
      <p>This is simple project for my portfolio</p>
      <Link to='/'>Go back</Link>
    </div>
  )
}

export { Homepage, Aboutpage };
