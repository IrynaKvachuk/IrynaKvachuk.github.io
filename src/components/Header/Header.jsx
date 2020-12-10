import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="mainHeader">
      <i className="fas fa-stream">
        <span className="logoName">Anketa</span>
      </i>
      <section className="authSection">
        {props.isAuth ? (
          <div className="loginHeader">
            {props.login}
            <button onClick={props.logoutThunkCr}>Log out</button>
          </div>
        ) : (
          <NavLink to="/login" className="loginLink">
            Login
          </NavLink>
        )}
      </section>
    </header>
  );
};

export default Header;
