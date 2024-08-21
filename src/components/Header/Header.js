import React from "react";
import './Header.css';
import { textRu } from "../constants/textRu";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <Link className="header__link app-link" to={"/"}>
        <h1 className="app-text header__app-name">
          {textRu.headerAppName}
        </h1>
      </Link>
    </div>
  )
};

export default Header;