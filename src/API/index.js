const COHORT_NAME = '2305-FTB-ET-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

// Message component (WIP)

const fetchMessages = async () => {
  try {
    //dont think this link path works
    const response = await fetch(`${BASE_URL}/posts/messages`, {
      method: 'GET',
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
  } catch (error) {
    console.error('Error fetching messages:', error)
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
