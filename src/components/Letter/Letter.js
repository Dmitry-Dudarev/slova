import React from "react";
import './Letter.css';

function Letter(props) {
  return (
    <div className="letter">
      <p className="letter__text">{props.name.toUpperCase()}</p>
    </div>
  );
}

export default Letter;