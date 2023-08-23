import React, { useState } from 'react';
const COHORT_NAME = '2301-ftb-mt-web'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()
    

        try {
          const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
                username: 'username',
                password: 'password'
              }
            })
          });
          const result = await response.json();
          console.log(result);
          return result
        } catch (err) {
          console.error(err);
        }
      }

    return ( 
    
    <>
    <h2>Login</h2>
    <form className='loginForm' onSubmit={handleSubmit}>
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
        <button>Log in</button>
    </form> 
    </>
    
    );
}
 
export default Login;
