import { useState, useEffect } from "react"
import {useNavigate} from 'react-router-dom';
const cohortName = "2305-FTB-ET-WEB-PT"
const baseURL = `https://strangers-things.herokuapp.com/api/${cohortName}`
import { Link } from "react-router-dom"
import { fetchPosts } from "baseURL"
const [searchParam, setSearchParam] = useState("")
const navigate = useNavigate()
import { Link } from "react-router-dom"
import PostCard from "./PostCard";
// import { fetchPosts } from "baseURL"

export default function Posts({posts}) {
  

  // const displayPosts = searchParam
  // ? posts.filter((post) =>
  // post.id().includes(searchParam())
  // )
  // : posts;

  return (
    <div>
      {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>

        ))}
      {posts?.map((post) => {
        return (
          <div>
  <h1><Link to={`/post/${post._id}`}>{post.title}</Link></h1>
  <p>{post.description}</p>
  <p>{post.author.username}</p>
  <p>{post.price}</p>
  <p>{post.location}</p>
</div>
        );
      })}
      <button
        className="nextPage"
        onClick={() => navigate(`/${posts.id}`)(page + 1)}
      >
        Next Page
      </button>
    </div>
  );
}
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
    
    
 
  // CREATE POST
    export default function CreatePost () {
      const [title, setTitle] = useState("");
       const [description, setDescription] = useState("");
       const [price, setPrice] = useState("bench");
       const [location, setLocation] = useState("");
      
       async function handleSubmit(e) {
          e.preventDefault()
          const newPost = {
            title,
            description,
            price,
            location,
          
          }
          const makePost = async () => {
  
            try {
              const response = await fetch(`${BASE_URL}/posts`, {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                  
                },
                body: JSON.stringify({
                  post: {
                    title: "My favorite stuffed animal",
                    description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
                    price: "$480.00",
                    location: "Chicago",
                   
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
          
         Result
          await createNewPost(newPost)
          setTitle('')
          setDescription('')
          setPrice('')
          setLocation('field')
         
          fetchAllPosts()
        }
        return (
          <form onSubmit={handleSubmit}>
            <h1>Add New Post </h1>
            <label htmlFor="name">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="description">setDescription</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="location">Location</label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            > </select>
             
            
            <button className="create">Create</button>
          </form>
        )
      }
 
 
  };
 
