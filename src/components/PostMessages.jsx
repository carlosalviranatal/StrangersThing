import React, { useState } from "react";
import { postMessage } from "../API";
import { useParams } from "react-router-dom";

const PostMessages = () => {
    const params = useParams();
  const [myMessage, setMyMessage] = useState("");

  const handleChange = (e) => {
    setMyMessage(e.target.value)
   
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let token = localStorage.getItem("token");
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
        <textarea onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostMessages;
