import Task from "./Task"

function Tasks({ tasks }) {
    return (
        <div className='tasks'>
            {tasks.map(task => (<Task task={task} />))}
        </div>
    )
}

export default Tasks
