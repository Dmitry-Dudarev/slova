import React from "react";
import "./Word.css";

function Word({ word }) {
  const termin = word.termin;
  const translate = word.translate;
  const [isTranslateVisible, setIsTranslateVisible] = React.useState(false);

  function handleClick() {
    setIsTranslateVisible(!isTranslateVisible)
  };

  return (
    <div className="word">
      <p className="word__termin app-text">{termin}</p>

      <div className="word__translate-section" onClick={handleClick}>
        <p className={`word__translate app-text ${isTranslateVisible && "word__translate_visible"}`}>{translate}</p>
      </div>
    </div>
  );
};

export default Word;