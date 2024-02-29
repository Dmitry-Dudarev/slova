import React from "react";
import './Letters.css';
import { textRu } from "../constants/textRu";
import { alphabeth } from "../../words/alphabet";
import Letter from "../Letter/Letter";

function Letters(props) {
  return (
    <div className="letters">
      <h2 className="app-text letters__title">
        {textRu.lettersTitle}
      </h2>
      <div className="letters__list">
        {
          alphabeth.map(letter => (
            <Letter key={letter} name={letter} />
          )
          )
        }
      </div>
    </div>
  );
};

export default Letters;