import { Link } from 'react-router-dom'

export default function NavBar () {
    return(
        <nav className="navbar">
            <h1>Stranger's Things</h1>
            <Link to="/posts">Posts</Link>
            <Link to="/login">Log In</Link>
            <Link to="/profile">Profile</Link>
         </nav>

    )
}

