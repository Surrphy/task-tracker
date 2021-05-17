import Task from "./Task"

function Tasks({ tasks }) {
    return (
        <div>
            {tasks.map(task => (<Task task={task} />))}
        </div>
    )
}

export default Tasks
