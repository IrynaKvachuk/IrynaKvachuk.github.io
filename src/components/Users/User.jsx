import React from "react";
import "./Users.css";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user.svg";

const User = ({
  user,
  followingInProgress,
  unfollowThunkCreator,
  followThunkCreator,
}) => {
  return (
    <div className="userCard" key={user.id}>
      <div>
        <NavLink to={"/profile/" + user.id}>
          <img
            src={user.photos.small || userPhoto}
            className="userAvatar"
            alt="avatar"
          />
        </NavLink>
        {user.followed ? (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollowThunkCreator(user.id);
            }}
          >
            UnFollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              followThunkCreator(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
      <div className="mainInfo">
        <span>{user.name}</span>
      </div>
      <div className="secondaryInfo">
        <span>{user.status}</span>
      </div>
    </div>
  );
};

export default User;
