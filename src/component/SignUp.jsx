import { registerUser } from "../API";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SignUp = ({ username, setUsername, password, setPassword }) => {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    await registerUser(username, password);
    navigate("/login");
  }

    return ( 
    
    <>
    <div>
        <h2>Register Account</h2>
        <form className='register' onSubmit={handleSubmit}>
            <label>
                Username: 
                <input 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Type username here..'/>
            </label>
            <label>
                Password:
                <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Type password here..'/>
            </label>
            <button>Register Account</button>
        </form>
    </div>
    </> 
    
    );
}
 
export default SignUp;