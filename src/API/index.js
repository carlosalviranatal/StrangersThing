const COHORT_NAME = '2305-FTB-ET-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


export const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`)
    console.log(response)
    
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Authorization': `Bearer ${TOKEN_STRING_HERE}`
      // },
      const result = await response.json();
    console.log(result);
    return result
    
  } catch (err) {
    console.error(err);
  }
}

export const loginUser = async (username, password) => {
try {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password
      }
    })
  });
  const result = await response.json();
  const token = result.data.token
  console.log(result);
  return token
} catch (err) {
  console.error(err);
}
}

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user:{
        username: username, 
        password: password
        }
    })
    });
    const result = await response.json();
    const token = result.data.token
    localStorage.setItem("token", token);
    localStorage.setItem("username", username)
    console.log(result);

    return result
  } catch (err) {
    console.error(err);
  }

}

export const createPost = async (token, addPost) => {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: addPost,
    }),
  });
  const result = await response.json();
  const newPost = result.data.post;
  return newPost;
}

export const deletePosts = async (token, postId) => {
  const response = await fetch(`${BASE_URL}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
};

export const getProfile = async (token) => {
  const response = await fetch(`${BASE_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  const myPosts = result.data;
  return myPosts;
};

