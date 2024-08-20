import React from "react";
import './Letter.css';
import { Link } from "react-router-dom";

import letterContext from "../../Contexts/letterContext";

function Letter(props) {




  return (
    <div className="letter">
      <Link
        to={props.name}
        className="letter__text"
      >{props.name.toUpperCase()}</Link>



    </div>
  );
}

export default Letter;