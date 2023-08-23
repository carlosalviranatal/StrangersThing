import { fetchPosts } from '../API'
import { useState } from 'react'
const COHORT_NAME = '2305-FTB-ET-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function CreatePost() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            location,
          },
        }),
      })
      const result = await response.json()
      console.log(result)
      return result
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Post </h1>
      <label htmlFor="name">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">setDescription</label>
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
      <select
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        {' '}
      </select>

      <button className="create">Create</button>
    </form>
  )
}

fetchPosts()
