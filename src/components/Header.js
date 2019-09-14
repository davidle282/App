import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        SERLER
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All articles
        </Link>
        <GoogleAuth />
      </div>
      <div className="ui fluid action input">
        <input type="text" placeholder="Search..." />
        <div className="ui button">Search</div>
      </div>
    </div>
  );
};

export default Header;
