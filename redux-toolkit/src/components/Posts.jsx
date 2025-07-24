import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";

const Posts = () => {
  const { isLoading, isError, error, posts } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let content;
  if (isLoading) {
    content = <h1>Loading Posts......</h1>;
  } else if (!isLoading && isError) {
    content = <h1 className="text-red-500">Something wrong happend - {error}</h1>;
  } else if (!isLoading && !isError) {
    if (posts.length > 0) {
      content = (
        <ul className=" list-disc p-3">
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      );
    } else {
      content = <h1>No Posts Found</h1>;
    }
  }
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <h1 className="font-semibold text-3xl ">Posts are here</h1>
      {content}
    </div>
  );
};

export default Posts;
