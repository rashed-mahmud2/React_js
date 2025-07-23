import { useState, useEffect } from "react";
import {Link} from 'react-router'

export default function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
      .then((res) => res.json())
      .then((data => setPosts(data)));
  }, []);
  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
