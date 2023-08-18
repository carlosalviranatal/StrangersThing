/*eslint-disable*/
import './App.css'
import React ( useState ) from "react";
import { BrowserRouter, Route } from "react-router-dom";
import posts from "./Posts";
import Profile from "./Profile";
import Login from "./Login";
import Register from "./Register";


export default function App() {
  const [Posts, setPosts] = useState([])
  const [profile, setProfile] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState([])
  const [register, setRegister] = useState([])

  return (
    <>
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/Profile" element={<Profile />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </>
  )
}


