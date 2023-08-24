/*eslint-disable*/
// import { useState} from "react"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import DeletePost from "./DeletePost"
import { useEffect } from "react"
import { useState } from "react"
// const navigate = useNavigate()
// import PostCard from "./PostCard";




export default function Posts({posts, getPosts}) {
  console.log(posts)
  const [updatedposts, setupdatedPosts] = useState(null)
  // const displayPosts = searchParam
  // ? posts.filter((post) =>
  // post.id().includes(searchParam())
  // )
  // : posts;

  useEffect(() => {
    
  }, [updatedposts])


  


  return (
    <div>
       <h1><Link to="/CreatePost">Add a post!</Link></h1>
      
      {posts?.map((post) => {
        return (
          <div className="linkDiv">
  <h1><Link to={`/post/${post._id}`}>{post.title}</Link></h1>
  <p>{post.description}</p>
  <p>{post.author.username}</p>
  <p>{post.price}</p>
  <p>{post.location}</p>
  {post.isAuthor?<DeletePost postId={post._id} onDelete={DeletePost} setupdatedPosts={setupdatedPosts} getPosts={getPosts}/>: null}
</div>
        );
      })}
    </div>
  );
}