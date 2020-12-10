import {
  addPostAC
} from "../../state/PostsReducer";
import Posts from "./Posts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (PostData) => {
      dispatch(addPostAC(PostData));
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
