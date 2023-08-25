/*eslint-disable*/
// import { useState} from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DeletePost from "./DeletePost";
import { useEffect } from "react";
import { useState } from "react";
import { fetchPosts } from "../API";
import UpdatePost from "./UpdatePost";
// const navigate = useNavigate()
// import PostCard from "./PostCard";

export default function Posts({ posts, getPosts, setPosts }) {
  const [updatedposts, setupdatedPosts] = useState([]);
  const [searchBar, setsearchBar] = useState("");
  const [isUpdate, setisUpdate] = useState(false)

  useEffect(() => {
    setsearchBar("")
    setupdatedPosts(posts);
  }, []);
  const handleSubmit = (e) => {
    setsearchBar(e.target.value)
    const filterResults = posts.filter((post) =>
      post.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    
    setupdatedPosts(filterResults);
  };
  const handleUpdate = (e) => {
    setisUpdate(true)
  }
  const postsToRender = searchBar?updatedposts:posts

  return (
    <div>
      <form className="search-bar" >
        <label htmlFor="search-term"></label>
        <input
          name="search-term"
          type="text"
          placeholder="search"
          onChange={handleSubmit}
        />
        
      </form>
      <h1>
        <Link to="/CreatePost">Add a post!</Link>
      </h1>

      
        {postsToRender?.map((post, key) => {
          return (
            <div className="linkDiv" key={key}>
              <h1>
                <Link to={`/post/${post._id}`}>{post.title}</Link>
              </h1>
              <p>{post.description}</p>
              <p>{post.author.username}</p>
              <p>{post.price}</p>
              <p>{post.location}</p>
              {post.isAuthor ? (
                <DeletePost
                  postId={post._id}
                  onDelete={DeletePost}
                  setupdatedPosts={setupdatedPosts}
                  getPosts={getPosts}
                />
              ) : null}
              <Link to={`/posts/${post._id}`}>update</Link>
            </div>
          );
        })}
        
    </div>
  );
}
