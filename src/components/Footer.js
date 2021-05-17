import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <p>© 2021 Copyright: Konrad Kine</p>
            <Link to='/about'>About</Link>
        </div>
    )
}

export default Footer
