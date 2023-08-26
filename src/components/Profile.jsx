/* eslint-disable no-inner-declarations */
import { useState, useEffect } from "react";
import { getProfile, myData } from "../API";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Profile = () => {
  const [myInfo, setMyInfo] = useState({});
  const [myMessagesLength, setMymessagesLength] = useState(0);

  const showToastMessage = () => {
    toast.success('Login Successful !', {
      position: toast.POSITION.BOTTOM_CENTER
    })
  }


  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      async function getMyInfo() {
        const returnedInfo = await myData(token);
        console.log(returnedInfo)
        setMyInfo(returnedInfo.data);
        setMymessagesLength(returnedInfo.data.messages.length)
        showToastMessage()
      }
      getMyInfo();
    }
  }, []);

  return (
    <div className="box">
      <h1>Welcome to your profile {myInfo.username}!</h1>
      {
        myMessagesLength > 0 ? <div>Your Messages:{myMessagesLength}</div> : <div>You currently have no messages!</div>
      }

      {
        myMessagesLength > 0 ? myInfo.messages.map((message) => {
          return(
            <div key={message._id}>
              <p className="messageCont">{message.content}</p>

            </div>
          )
        }): ""
      }
      
    </div>
  )
};

export default Profile;