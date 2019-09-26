import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import logo from "../imgs/logo.jpg";
import Searching from "./Searching.js";

const Header = () => {
  return (
    <div className="ui center aligned basic segment">
      <div className="ui secondary pointing menu">
        <Link to="/">
          <img src={logo} height="50%" />
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            All articles
          </Link>
          <GoogleAuth />
        </div>
      </div>
      <div className="ui horizontal divider"></div>
      <Searching />
      {/* <div className="ui fluid action input">
        <input type="text" placeholder="Search..." />
        <div className="ui button">Search</div>
      </div> */}
    </div>
  );
};

export default Header;
