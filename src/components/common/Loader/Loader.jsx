import React from "react";
import "./Loader.css";
import loader from "../../../assets/images/loader.svg";

const Loader = () => {
  return (
    <div className="loaderWrapper">
      <img src={loader} alt="loader" />
    </div>
  );
};

export default Loader;
