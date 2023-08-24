import React, { useState } from "react";
import { postMessage } from "../API";
import { useParams } from "react-router-dom";

const PostMessages = () => {
    const params = useParams();
  const [myMessage, setMyMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState('') 

  const handleChange = (e) => {
    setMyMessage(e.target.value)
   
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let token = localStorage.getItem("token");

    if (!token) {
      setErrorMessage('You must be logged in to send a message.') 
    }

    if (token) {
        const returnedInfo = await postMessage(token, params.id, myMessage);
        // setMyMessage(returnedInfo);
        console.log(returnedInfo)
      
    }
  };
  return (
    <div>
      <h2>your message</h2>
      <form onSubmit={handleSubmit}>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <textarea onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostMessages;
