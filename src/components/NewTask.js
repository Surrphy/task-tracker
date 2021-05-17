import { useState } from 'react'

function AddTask({ addNewTask }) {
    const [newTask, setNewTask] = useState({text:'', day:'', important: false})

    const onSubmit = (e) => {
        e.preventDefault()

        if(!newTask.text) {
            alert('Please add text')
        }

        addNewTask(newTask)
        setNewTask({text:'', day:'', important: false})
    }

    return (
        <form className='form' onSubmit={onSubmit}>
            <label>Task</label>
            <input type="text" value={newTask.text} onChange={e => setNewTask({ ...newTask, text: e.target.value})} />
            <label>Day</label>
            <input type="text" value={newTask.day} onChange={e => setNewTask({ ...newTask, day: e.target.value})} />
            <label>Important?<input className='form-check' type="checkbox" checked={newTask.important} onChange={e => setNewTask({ ...newTask, important: e.target.checked})} /></label>
            <input type="submit" value='Add New Task' className='button-block' />
        </form>
    )
}

export default AddTask
