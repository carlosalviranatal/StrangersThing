import { createPost, updatePost } from "../API";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function UpdatePost({}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      setErrorMessage("You must be logged in to add a post.");
    }

    const response = await updatePost(
      token,
      title,
      description,
      price,
      location,
      id
    );
    navigate("/posts")
  };

  return (
    <div className="UpdateForm">
      <form onSubmit={handleSubmit}>
        <h1>Update Post</h1>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

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

        <button className="create">Update</button>
      </form>
    </div>
  );
}
