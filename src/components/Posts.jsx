/*eslint-disable*/
import { useState, useEffect, useNavigate } from "react"
const cohortName = "2305-FTB-ET-WEB-PT"
const baseURL = `https://strangers-things.herokuapp.com/api/${cohortName}`
// import { Link } from "react-router-dom"
import { fetchPosts } from "baseURL"
const [searchParam, setSearchParam] = useState("")
const navigate = useNavigate()

export default function Posts () {
    const [posts, setPosts] = useState([]);
    const [ error, setError ] = useState(null)
  
    useEffect(() => {
        async function getPosts() {
            const APIData = await fetchPosts(
                `${baseURL}/posts?page=1&perPage=50`);
            if (APIData.success) {
                setPosts(APIData.data.Posts)
            } else {
                setError(APIData.error.message)
            }
        }
        getPosts()
        console.log(getPosts)
    }, [baseURL])


    const displayPosts = searchParam
    ? posts.filter((post) => 
    post.id().includes(searchParam())
    )
    : posts;


  
    return (
      <div>
        
        {displayPosts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
        <button className="nextPage" onClick={() =>
            navigate(`/${posts.id}`)(page + 1)}>Next Page</button>
      </div>
      
    );
  };
  
 