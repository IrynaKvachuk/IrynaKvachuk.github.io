import React from "react";
import "./ProfileInfo.css";
import Loader from "../../common/Loader/Loader";
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = ({ profile, status,updateStatus }) => {
  const contactsIcons = {
    facebook: "fas fa-facebook-f",
    website: "fas fa-browser",
    vk: "fas fa-vk",
    twitter: "fas fa-twitter",
    instagram: "fas fa-instagram",
    youtube: "fas fa-youtube",
    github: "fas fa-github",
    mainLink: "fas fa-at",
  };
  if (!profile) {
    return <Loader />;
  }
  return (
    <section className="profileSection">
      <div className="profileBadge">
        {profile.photos.large ? (
          <img
            src={profile.photos.large}
            className="profileAvatar"
            alt="avatar"
          />
        ) : (
          <i className="fas fa-user-circle"></i>
        )}
        <span>{profile.fullName}</span>
      </div>
      <ProfileStatusHooks status={status} updateStatus={updateStatus} />
      <section className="profileInfo">
        <i className={profile.lookingForAJob && "fas fa-search jobLooking"}>
          <span className="jobDescription">
            {profile.lookingForAJobDescription}
          </span>
        </i>
        <div className="profileContacts">
          {Object.keys(profile.contacts).map((key, value) => {
            return <span>{key}</span>;
          })}
        </div>
      </section>
    </section>
  );
};

export default ProfileInfo;
