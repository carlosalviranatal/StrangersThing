import './App.css'
import NavBar from './components/NavBar';
 import Posts from "./posts"
import Profile from './components/Profile';
import Login from './component/Login'
 import Authenticate from './component/Authenticate'
import SignUp from './component/SignUp'
import { Routes, Route } from 'react-router-dom'

export default function App() {


  return (
    <>
//   <Login />
//   <SignUp />
//   <Authenticate />
    <NavBar/>
    {/* <Posts/> */}
    <Routes>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>

    </>
  )
}


