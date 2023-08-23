import React, { useState } from 'react';

const COHORT_NAME = '2301-ftb-mt-web'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`



const SignUp = () => {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [error, setError] = useState(null)

async function handleSubmit(event) {
    event.preventDefault()

    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user:{
            name: name,
            email: email,
            username: setUsername, 
            password: setPassword
            }
        })
        });
        const result = await response.json();
        console.log(result.data.token);
        console.log(username)
        console.log(password)
        return result
      } catch (err) {
        console.error(err);
      }
      console.log(password)
}

    return ( 
    
    <>
    <div>
        <h2>Register Account</h2>
        {error && <p>{error}</p>}
        <form className='registor' onSubmit={handleSubmit}>
            <label>
              Name:
              <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Type name here ..' />
            </label>
            <label>
              Email:
              <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Type email here ..' />
            </label>
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