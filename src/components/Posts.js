import React from "react";
import Post from "./Post";
import { connect } from "react-redux";

const Posts = ({ syncPosts }) =>
  syncPosts.length > 0 ? (
    syncPosts.map((post) => <Post post={post} key={post.id} />)
  ) : (
    <p className="text-center">Постов пока нет</p>
  );

const mapStateToProps = (state) => ({
  syncPosts: state.posts.posts,
});

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     dispatch1: () => {
//       dispatch(actionCreator)
//     }
//   }
// }

export default connect(mapStateToProps, null)(Posts);
