import React from "react";
import "./Users.css";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";

const Users = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
  followingInProgress,
  unfollowThunkCreator,
  followThunkCreator,
}) => {
  return (
    <section className="users">
      <Pagination
        totalItemsAmount={totalUsersCount}
        setSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          followingInProgress={followingInProgress}
          unfollowThunkCreator={unfollowThunkCreator}
          followThunkCreator={followThunkCreator}
        />
      ))}
    </section>
  );
};

export default Users;
