import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="mainNav">
      <NavLink to="./profile" className="profile">
        <img
          src="https://www.flaticon.com/premium-icon/icons/svg/3106/3106921.svg"
          className="avatarIcon"
          alt="avatar"
        />
        <p className="profileName">Jack Sparrow</p>
      </NavLink>
      <ul className="mainNavLinks">
        <li>
          <NavLink to="/posts">My posts</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/messages">Messages</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        {/* <li>
          <a href="#"> News</a>
        </li>
        <li>
          <a href="#"> Music</a>
        </li>
        <li>
          <a href="#"> Settings</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
