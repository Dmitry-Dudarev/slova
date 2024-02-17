import React from "react";
import './Letters.css';
import { textRu } from "../constants/textRu";
import { alphabeth } from "../../words/alphabet";

function Letters(props) {
  return (
    <div className="letters">
      <h2 className="app-text letters__title">
        {textRu.lettersTitle}
      </h2>
      <div className="letters__list">
        {
          alphabeth.map(letter => <div
            key={letter}
            className="app-text letter__unit">
            {letter}
          </div>)
        }
      </div>
    </div>
  );
};

export default Letters;