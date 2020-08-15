import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { fetchPosts } from "../redux/actions";
import { Loader } from "./Loader";

export default () => {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => ({
    posts: state.posts.fetchedPosts,
    isLoading: state.app.isLoading,
  }));

  const handleClick = () => {
    dispatch(fetchPosts());
  };

  if (isLoading) {
    return <Loader />;
  }

  return posts.length > 0 ? (
    posts.map((post) => <Post post={post} key={post.id} />)
  ) : (
    <button className="btn btn-primary" onClick={handleClick}>
      Загрузить
    </button>
  );
};
