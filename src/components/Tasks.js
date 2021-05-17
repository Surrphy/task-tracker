import Task from "./Task"

function Tasks({ tasks, toggleImportant, deleteTask }) {
    return (
        <div className='tasks'>
            {tasks.map(task => (<Task task={task} key={task.id} toggleImportant={toggleImportant} deleteTask={deleteTask} />))}
        </div>
    )
}

export default Tasks
