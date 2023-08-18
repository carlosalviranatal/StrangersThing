/*eslint-disable*/
import './App.css'
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import { Routes, Route } from 'react-router-dom'

export default function App() {


  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </>
  )
}


