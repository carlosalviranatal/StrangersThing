import './App.css'
import NavBar from './components/NavBar';
import Post from './components/Post';
import Posts from './components/Posts';
import Profile from './components/Profile';
// import Login from './component/Login'
//  import Authenticate from './component/Authenticate'
// import SignUp from './component/SignUp'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";
import { fetchPosts } from "./API";
import CreatePost from './components/CreatePost';

export default function App() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  console.log(posts)
  useEffect(() => {
    async function getPosts() {
      let APIData = await fetchPosts()
      if (APIData.success) {
        setPosts(APIData.data.posts);
      } else {
        setError(APIData.status);
      }
    }
    getPosts();
  }, []);
// console.log(Posts)

  return (
    <>
{/* //   <Login />
//   <SignUp />
//   <Authenticate /> */}
    <NavBar/>
    <CreatePost/>
    <Routes>
      {/* <Route path="/" element={<Posts/>} /> */}
      <Route path="/posts" element={<Posts posts={posts}/>} />
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/post/:id" element={<Post posts={posts}/> } />
    </Routes>

    </>
  )
}


