/* eslint-disable no-inner-declarations */
import { useState, useEffect } from "react";
import { getProfile } from "../API";

const Profile = () => {
  const [myInfo, setMyInfo] = useState({});

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      async function getMyInfo() {
        const returnedInfo = await getProfile(token);
        setMyInfo(returnedInfo);
      }
      getMyInfo();
    }
  }, []);

  return (
    <div className="box">
      <h1>Welcome to your profile {myInfo.username}!</h1>
      <div>Your Messages:0</div>
      <div>You currently have no messages!</div>
    </div>
  )
};

export default Profile;