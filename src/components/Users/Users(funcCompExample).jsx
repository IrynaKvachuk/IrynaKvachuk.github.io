import React from "react";
import "./Users.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.svg";

const Users = (props) => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((resp) => {
          props.setUsers(resp.data.items);
        });
    }
  };

  return (
    <section className="users">
      <button onClick={getUsers}>Get Users</button>
      {props.users.map((user) => (
        <div className="userCard" key={user.id}>
          <div>
            <img
              src={user.photos.small || userPhoto}
              className="userAvatar"
              alt="avatar"
            />
            <button
              className="btnFollow"
              onClick={() => {
                user.followed ? props.unfollow(user.id) : props.follow(user.id);
              }}
            >
              {user.followed ? "unfollow" : "follow"}
            </button>
          </div>
          <div className="mainInfo">
            <span>{user.name}</span>
            {/* <span>{user.location.city}</span> */}
          </div>
          <div className="secondaryInfo">
            <span>{user.status}</span>
            {/* <span>{user.location.country}</span> */}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Users;

// [
//     {
//       id: 1,
//       followed: false,
//       fullname: { name: "John", secondName: "Johnson" },
//       avatarURL:
//         "https://www.flaticon.com/svg/static/icons/svg/2910/2910914.svg",
//       status:
//         "This is the day you will always remember as the day you almost caught Captain Jack Sparrow.",
//       location: { city: "London", country: "Great Britain" },
//     },
//     {
//       id: 2,
//       followed: true,
//       fullname: { name: "Mike", secondName: "Vasovsky" },
//       avatarURL:
//         "https://www.flaticon.com/svg/static/icons/svg/2910/2910914.svg",
//       status: "Hallo there!)",
//       location: { city: "University", country: "Corporation" },
//     },
//     {
//       id: 3,
//       followed: false,
//       fullname: { name: "Angela", secondName: "Jass" },
//       avatarURL:
//         "https://www.flaticon.com/svg/static/icons/svg/2910/2910914.svg",
//       status: "Hallo there!)",
//       location: { city: "Philadephia", country: "USA" },
//     },
//   ]
