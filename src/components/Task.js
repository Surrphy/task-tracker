import { AiOutlineClose } from "react-icons/ai";

function Task({ task }) {
    return (
        <div className={`task ${task.important ? 'important' : ''}`}>
            <h2>{task.text}<AiOutlineClose /></h2>
            <h3>{task.day}</h3>
        </div>
    )
}

export default Task
