/*eslint-disable*/
import { useState } from 'react';
import { deletePosts } from '../API';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const showToastMessage = () => {
  toast.success('Post succesfully deleted !', {
    position: toast.POSITION.BOTTOM_CENTER
  })
}

export default function DeletePost({ postId, onDelete, setupdatedPosts, getPosts}) {
  const handleDelete = async () => {
    try {
        let token = localStorage.getItem("token")
      const response = await deletePosts(postId, token)
      if (response.success) { setupdatedPosts(true)
        onDelete(postId)
        showToastMessage()
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