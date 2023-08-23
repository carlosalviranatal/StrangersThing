import { useParams, Link } from "react-router-dom";
// import Proptypes from "prop-types"

export default function Post({ posts }) {
  const params = useParams();
  console.log(posts)
  const post = posts.find((post) => {
    return post._id === params.id;
  });

  if (!post) {
    return <div>loading</div>;
  }

  
  return <div>
  <h1><Link to={`/post/${post._id}`}>{post.title}</Link></h1>
  <p>{post.description}</p>
  <p>{post.author.username}</p>
  <p>{post.price}</p>
  <p>{post.location}</p>
</div>
}

// Post.propTypes = {
//     posts:Proptypes.array
// }