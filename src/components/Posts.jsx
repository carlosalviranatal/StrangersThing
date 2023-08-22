/*eslint-disable*/
import { useState, useEffect } from "react"
import {useNavigate} from 'react-router-dom';
const cohortName = "2305-FTB-ET-WEB-PT"
const baseURL = `https://strangers-things.herokuapp.com/api/${cohortName}`
// import { Link } from "react-router-dom"
// import { fetchPosts } from "baseURL"






export default function Posts () {
    const [posts, setPosts] = useState([]);
    const [ error, setError ] = useState(null)
    const [searchParam, setSearchParam] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        async function getPosts() {
            let APIData = await fetch(
                `${baseURL}/posts`);
                APIData = await APIData.json()
            if (APIData.success) {
                console.log(APIData)
                setPosts(APIData.data.posts)
            } else { 
                console.log(APIData)
                setError(APIData.status)
            }
        }
        getPosts()
        console.log(posts)
    }, [])


    // const displayPosts = searchParam
    // ? posts.filter((post) => 
    // post.id().includes(searchParam())
    // )
    // : posts;


    
    return (
      <div>
        
        {/* {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))} */}
        {
            posts.map((post) => {
                return (
                    <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
                )
            })
        }
        <button className="nextPage" onClick={() =>
            navigate(`/${posts.id}`)(page + 1)}>Next Page</button>
      </div>
      
    );
  };

  
  
 