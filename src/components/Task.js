import { AiOutlineClose } from "react-icons/ai";

function Task({ task, toggleImportant, deleteTask }) {
    return (
        <div className={`task ${task.important ? 'important' : ''}`} onDoubleClick={() => toggleImportant(task)}>
            <h2>{task.text}<AiOutlineClose className='task-delete' onClick={() => deleteTask(task.id)} /></h2>
            <h3>{task.day}</h3>
        </div>
    )
}

export default Task
