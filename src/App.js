import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Tasks from './components/Tasks'
import './index.css'

function Homepage() {
  const [tasks, setTasks] = useState([
      {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "important": true
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "important": false
      }
  ])

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
      <Footer />
    </div>
  );
}

function Aboutpage() {
  return (
    <div>
      <p>This is simple project for my portfolio</p>
      <Link to='/'>Go back</Link>
    </div>
  )
}

export { Homepage, Aboutpage };
