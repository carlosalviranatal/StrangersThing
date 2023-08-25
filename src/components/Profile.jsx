/* eslint-disable no-inner-declarations */
import { useState, useEffect } from "react";
import { getProfile, myData } from "../API";

const Profile = () => {
  const [myInfo, setMyInfo] = useState({});
  const [myMessagesLength, setMymessagesLength] = useState(0);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      async function getMyInfo() {
        const returnedInfo = await myData(token);
        console.log(returnedInfo);
        setMyInfo(returnedInfo.data);
        setMymessagesLength(returnedInfo.data.messages.length);
      }
      getMyInfo();
    }
  }, []);

  return (
    <div className="box">
      <h1>Welcome to your profile {myInfo.username}!</h1>
      {myMessagesLength > 0 ? (
        <div>Your Messages:{myMessagesLength}</div>
      ) : (
        <div>You currently have no messages!</div>
      )}

      {myMessagesLength > 0
        ? myInfo.messages.map((message) => {
            return (
              <div className="messageCont" key={message._id}>
                <p>{message.content}</p>
                <p>sent to:{message.post.author.username}</p>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Profile;
