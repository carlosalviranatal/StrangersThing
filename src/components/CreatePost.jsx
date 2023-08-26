import { createPost } from '../API'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function CreatePost({ posts, setPosts }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [errorMessage, setErrorMessage] = useState('') 

  const navigate = useNavigate()

  const showToastMessage = () => {
    toast.success('Post succesfully added !', {
      position: toast.POSITION.BOTTOM_CENTER
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const token = localStorage.getItem('token')
    
    if (!token) {
      setErrorMessage('You must be logged in to add a post.') 
    }

    const newPost = {
      title: title,
      description: description,
      price: price,
      location: location,
    }

    try {
      const freshPost = await createPost(token, newPost)
      setPosts([...posts, freshPost])
      showToastMessage()
      navigate('/Posts')
    } catch (error) {
      console.error('Error creating post:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Post </h1>
      
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      
      <label htmlFor="name">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="price">Price</label>
      <input
        type="text"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button className="create">Create</button>
    </form>
  )
}
