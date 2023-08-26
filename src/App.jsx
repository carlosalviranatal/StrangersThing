import './App.css'
import NavBar from './components/NavBar'
import Post from './components/Post'
import Posts from './components/Posts'
import Profile from './components/Profile'
import Login from './component/Login'
// import SignUp from './component/SignUp'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchPosts } from './API'
import CreatePost from './components/CreatePost'
import SignUp from './component/SignUp'
import Home from './components/Home'
import SearchBar from './components/SearchBar'



export default function App() {
  const [posts, setPosts] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState('false')
  const [myInfo, setMyInfo] = useState('')

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true)
    }
  }, [])
  
  
  let token = localStorage.getItem("token")
  async function getPosts() {
    let APIData 
    if (localStorage.getItem('token')) {
      APIData = await fetchPosts(token)
    } else {
      APIData = await fetchPosts()
    }
    if (APIData.success) {
      setPosts(APIData.data.posts)
    } else {
      setError(APIData.status)
    }
  }
  

  useEffect(() => {
    
    
    getPosts()
  }, [])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route
          path="/CreatePost"
          element={
            <CreatePost username={username} setPosts={setPosts} posts={posts} />
          }
        />
        <Route
          path="/register"
          element={
            <SignUp
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              setIsLoggedIn={setIsLoggedIn}
              myInfo={myInfo}
              setMyInfo={setMyInfo}
            />
          }
        />
        <Route path="/posts" element={<Posts posts={posts} getPosts={getPosts} />} />
        <Route
          path="/profile"
          element={<Profile myInfo={myInfo} setMyInfo={setMyInfo} />}
        />
        <Route path="/post/:id" element={<Post posts={posts} />} />
      </Routes>
    </>
  )
}
