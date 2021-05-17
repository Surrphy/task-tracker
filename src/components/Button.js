function Button({ text, toggleNewTask }) {
    return (
        <div>
            <button className='button' onClick={toggleNewTask}><strong>{text}</strong></button>
        </div>
    )
}

export default Button
