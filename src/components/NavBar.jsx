import { Link } from 'react-router-dom'

export default function NavBar () {
    return(
        <nav className="navbar">
            <h1 className='logo'>Stranger's Things</h1>
            <div className='nav-links'>
            <Link to="/posts" className='nav-link'>Posts</Link>
            <Link to="/profile" className='nav-link'>Profile</Link>
            <Link to="/login" className= 'nav-link'>Log In</Link>
            </div>
         </nav>

    )
}

