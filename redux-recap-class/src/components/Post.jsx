import React from "react";
import { useGetPostQuery } from "../features/api/apiSlice";

const Post = ({ id }) => {
  const { data: post, isLoading, isError, error } = useGetPostQuery(id);

  let content;

  if (isLoading) {
    content = <h1>Loading Posts.....</h1>;
  }
  if (!isLoading && isError) {
    content = (
      <h1 className=" text-red-500 font-medium">
        Something Went wrong - {error}
      </h1>
    );
  }
  if (!isLoading && !isError) {
    if (post.id) {
      content = (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      );
    } else {
      content = <h1>No Post Found</h1>;
    }
  }
  return <div>{content}</div>;
};

export default Post;
