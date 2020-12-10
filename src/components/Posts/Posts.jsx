import React from "react";
import Post from "./Post/Post";
import "./Posts.css";
import { Field, reduxForm } from "redux-form";
import { maxLengthCr, requeired } from "../../utils/validators/validators";
import { Textarea } from "../common/FormsControls/FormsControls";

const maxLengthCr10 = maxLengthCr(10);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="post"
        component={Textarea}
        className="newContentArea"
        placeholder="type your text here.."
        validate={[requeired, maxLengthCr10]}
      />
      <button type="submit" className="addBtn">
        Add post
      </button>
    </form>
  );
};

const PostReduxForm = reduxForm({
  form: "post",
})(AddPostForm);

const Posts = React.memo(({ addPost, posts }) => {
  const onSubmit = (AddPostFormData) => {
    addPost(AddPostFormData.post);
  };
  return (
    <section className="postsSection">
      {posts.postsData.map((post) => (
        <Post
          key={post.id}
          icon={post.icon}
          content={post.content}
          likes={post.likesCount}
        />
      ))}
      <section className="addSection">
        <PostReduxForm onSubmit={onSubmit} />
      </section>
    </section>
  );
});

export default Posts;
