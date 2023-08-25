const COHORT_NAME = '2305-FTB-ET-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


export const fetchPosts = async (token) => {
  try {

    const response = await fetch(`${BASE_URL}/posts` ,{
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
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
  const token = result?.data?.token
  localStorage.setItem("token", token);
  localStorage.setItem("username", username)
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
    const token = result?.data?.token
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

export const deletePosts = async (postId, token) => {
  console.log(token, postId)
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

export const myData = async (token) => {

  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

export const postMessage = async (token, PostId, message) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${PostId}/messages`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        message: {
          content: message
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

export const updatePost = async (token, title, description, price, location, id) => {
  try {
    // You will need to insert a variable into the fetch template literal 
    // in order to make the POST_ID dynamic. 
    // 5e8d1bd48829fb0017d2233b is just for demonstration.
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
          willDeliver: true
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

/*eslint-disable*/
const COHORT = '2305-FTB-ET-WEB-PT'
const baseUrl = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`



