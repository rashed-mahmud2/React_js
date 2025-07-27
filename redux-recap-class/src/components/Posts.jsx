// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPosts } from "../features/posts/postsSlice";
import { useState } from "react";
import { useGetPostsQuery } from "../features/api/apiSlice";
import Post from "./Post";
import AddPost from "./AddPost";

const Posts = () => {
  const [currentPostId, setCurrentPostId] = useState(null)
// const [request, setRequest] = useState(false)
  const {data: posts, isLoading, isError, error, refetch} = useGetPostsQuery(20)

  // const { isLoading, isError, error, posts } = useSelector(
  //   (state) => state.posts
  // );
  // console.log(posts);

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchPosts())
  // }, [dispatch])

  let content;

  if (isLoading) {
    content = <h1>Loading Posts.....</h1>;
  }
  if (!isLoading && isError) {
    content = <h1 className=" text-red-500 font-medium">Something Went wrong - {error}</h1>;
  }
  if (!isLoading && !isError) {
    if(posts.length > 0) {
      content = (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <a href="#" onClick={(e) => {
                e.preventDefault()
                setCurrentPostId(post.id)}}>
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      );
    } else {
      content = <h1>No Posts Found</h1>
    }
  }

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <h3>Posts here</h3>
      {content}
      {currentPostId && (
        <div className="max-w-md mx-auto mt-10 space-y-5 bg-blue-50 p-5 my-5">
          <Post id={currentPostId}/>
        </div>
      )}

      <button
        onClick={refetch}
        className="bg-slate-800 px-4 py-2 rounded text-white"
      >
        Reload
      </button>

       <div className="max-w-md mx-auto mt-10 space-y-5">
        <AddPost />
       </div>
    </div>
  );
};

export default Posts;

