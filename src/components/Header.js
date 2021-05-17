import Button from './Button'

function Header() {
    return (
        <div className='header'>
            <h1>Your Tasks</h1>
            <Button text='New Task' />
        </div>
    )
}

export default Header