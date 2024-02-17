import React from "react";
import './Header.css';
import { textRu } from "../constants/textRu";

function Header(props) {
  return(
    <div className="header">
      <h1 className="app-text header__app-name">
        {textRu.headerAppName}
      </h1>
    </div>
  )
};

export default Header;