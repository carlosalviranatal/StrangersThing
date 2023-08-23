// import { useState} from "react"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
// const navigate = useNavigate()
// import PostCard from "./PostCard";

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
      {/* <button
        className="nextPage"
        onClick={() => navigate(`/${posts.id}`)(page + 1)}
      >
        Next Page
      </button> */}
    </div>
  );
}