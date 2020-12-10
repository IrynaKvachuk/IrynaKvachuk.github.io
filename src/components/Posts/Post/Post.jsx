import React from "react";
import "./Post.css";

const Post = ({ icon, content, likes }) => {
  return (
    <div className="post">
      <img src={icon} className="postIcon" alt="lamp" />
      <p className="postContent">{content}</p>
      <div className="likes">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/833/833472.svg"
          className="likeIcon"
          alt="like"
        />
        <p className="likesCount">{likes}</p>
      </div>
    </div>
  );
};

export default Post;
