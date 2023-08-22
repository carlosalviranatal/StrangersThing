import './App.css'
import NavBar from './components/NavBar';
// import Posts from "./posts"
import Posts from './components/Posts';
import Profile from './components/Profile';
import { Routes, Route } from 'react-router-dom'

export default function App() {
// console.log(Posts)

  return (
    <>
    <NavBar/>
    <Routes>
      {/* <Route path="/" element={<Posts/>} /> */}
      <Route path="/posts" element={<Posts/>} />
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </>
  )
}


