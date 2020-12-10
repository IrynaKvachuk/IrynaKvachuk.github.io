import React from "react";
import PostsContainer from "../Posts/PostsContainer";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ profile, status, updateStatus }) => {
  return (
    <div className="profilePage">
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
      />
      <PostsContainer />
    </div>
  );
};

export default Profile;
