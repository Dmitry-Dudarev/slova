import React from "react";
import './Letter.css';
import { Link } from "react-router-dom";

function Letter(props) {
  return (
    <div className="letter">
      <Link
        to={props.name}
        className="letter__text app-text app-link"
        onClick={props.hideLetters}
      >{props.name.toUpperCase()}</Link>
    </div>
  );
}

export default Letter;