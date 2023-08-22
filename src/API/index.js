const COHORT_NAME = '2305-FTB-ET-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const TOKEN_STRING_HERE =  ""
const POST_ID = ""
// Message component (WIP)

// Need Auth token to see the message path
const fetchMessages = async () => {

  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN_STRING_HERE}`
      },
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

// Need POST_ID PROP AND TOKEN PROP probably??
const postMessage = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${POST_ID}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN_STRING_HERE}`,
      },
      body: JSON.stringify({
        message: {
          content: '',
        },
      }),
    })
    const result = await response.json()
    console.log(result)
    return result
  } catch (err) {
    console.error(err)
  }
}


