import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const PostDetails = () => {
  const {postId} = useParams()
 const [post, setPost] = useState(null)

useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(res => res.json())
  .then(data => setPost(data))
},[postId])
  
  return (
    <div>
      <h1>Post Details page og Id {postId}</h1>
      {!post ? (
        <h2>Loading......</h2>
      ) : (
        <div>
          <h3>Title:- {post?.title}</h3>
          <p>Description:- {post?.body}</p>
        </div>
      )}
    </div>
  );
}

export default PostDetails
