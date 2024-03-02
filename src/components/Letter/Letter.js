import React from "react";
import './Letter.css';
import { Link } from "react-router-dom";

import letterContext from "../../Contexts/letterContext";

function Letter(props) {

  const setCurrentLetter = React.useContext(letterContext).setCurrentLetter;

  function changeCurrentLetter (letter) {
    setCurrentLetter(letter)
  };



  return (
    <div className="letter">
      <Link 
      to={props.name} 
      className="letter__text"
      onClick={changeCurrentLetter(props.name)}
      >{props.name.toUpperCase()}</Link>

      

    </div>
  );
}

export default Letter;