import './App.css'
import NavBar from './components/NavBar';
import Posts from "./posts"
import Profile from './components/Profile';
// import Login from './component/Login'
//  import Authenticate from './component/Authenticate'
// import SignUp from './component/SignUp'
import { Routes, Route } from 'react-router-dom'

export default function App() {
// console.log(Posts)

  return (
    <>
{/* //   <Login />
//   <SignUp />
//   <Authenticate /> */}
    <NavBar/>
    <Routes>
      {/* <Route path="/" element={<Posts/>} /> */}
      <Route path="/posts" element={<Posts/>} />
      <Route path="/profile" element={<Profile/>}/>
    </Routes>

    </>
  )
}


