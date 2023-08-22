import './App.css'
import NavBar from './components/NavBar';
import Post from './components/Post';
// import Posts from "./posts"
import Posts from './components/Posts';
import Profile from './components/Profile';
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "./API";

export default function App() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const navigate = useNavigate();
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
    <NavBar/>
    <Routes>
      {/* <Route path="/" element={<Posts/>} /> */}
      <Route path="/posts" element={<Posts posts={posts}/>} />
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/post/:id" element={<Post posts={posts}/> } />
    </Routes>
    </>
  )
}


