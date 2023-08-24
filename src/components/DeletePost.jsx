/*eslint-disable*/
import { useState } from 'react';
import { deletePosts } from '../API';


export default function DeletePost({ postId, onDelete, setupdatedPosts, getPosts}) {
  const handleDelete = async () => {
    try {
        let token = localStorage.getItem("token")
      const response = await deletePosts(postId, token)
      if (response.success) { setupdatedPosts(true)
        onDelete(postId)
        getPosts()
      } else {
        console.error('Error deleting post:', response.error.message)
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  return (
    <button className="deleteButton" onClick={handleDelete}>
      Delete
    </button>
  )
}