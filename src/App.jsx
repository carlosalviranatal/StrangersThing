import './App.css'
import NavBar from './components/NavBar';
// import Posts from "./posts"
import Profile from './components/Profile';
import Login from './component/Login'
//  import Authenticate from './component/Authenticate'
import SignUp from './component/SignUp'
import { Routes, Route, Link } from 'react-router-dom'

export default function App() {
// console.log(Posts)

  return (
    <>
    <div className='navLog'>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Register Account</Link>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    </div>
  

    {/* <NavBar/>
    <Routes>
      <Route path="/" element={<Posts/>} />
      <Route path="/posts" element={<Posts/>} />
      <Route path="/profile" element={<Profile/>}/>
    </Routes> */}

    </>
  )
}


