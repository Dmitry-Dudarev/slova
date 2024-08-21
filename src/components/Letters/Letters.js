import React from "react";
import './Letters.css';
import { textRu } from "../constants/textRu";
import { alphabeth } from "../../words/alphabet";
import Letter from "../Letter/Letter";

function Letters(props) {
  const [isLetterSelected, setIsLetterSelected] = React.useState(false);

  function hideLetters() {
    setIsLetterSelected(!isLetterSelected)
  };

  return (
    isLetterSelected ?

      <div className="letters__show-button" onClick={hideLetters}>
        <p className="letter__show-button-text app-text app-link">{textRu.lettersShowButton}</p>
      </div> 
      
      :

      <div className={`letters ${isLetterSelected && "letters_hidden"}`}>
        <h2 className="app-text letters__title">
          {textRu.lettersTitle}
        </h2>
        <div className="letters__list">
          {
            alphabeth.map(letter => (
              <Letter key={letter} name={letter} hideLetters={hideLetters} />
            ))}
        </div>
      </div>

  );
};

export default Letters;