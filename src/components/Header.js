import Button from './Button'

function Header({ toggleNewTask }) {
    return (
        <div className='header'>
            <h1>Your Tasks</h1>
            <Button text='New Task' toggleNewTask={toggleNewTask} />
        </div>
    )
}

export default Header