import React from "react";
import './Letters.css';
import { textRu } from "../constants/textRu";
import { alphabeth } from "../../words/alphabet";
import Letter from "../Letter/Letter";
import { isMainOpen, lettersVisibility } from "../../state/atoms";
import { useRecoilState, useRecoilValue } from "recoil";

function Letters(props) {
  // const [isLettersInvisible, setIsLettersInvisible] = React.useState(false);
  const [isLettersInvisible, setIsLettersInvisible] = useRecoilState(lettersVisibility);
  const mainPageisOpen = useRecoilValue(isMainOpen);

  // function switchLetters() {
  //   if (mainPageisOpen) {
  //     setIsLettersInvisible(false)
  //   } else {
  //     setIsLettersInvisible(!isLettersInvisible)
  //   }
  // };

  function switchLetters() {
    setIsLettersInvisible(!isLettersInvisible)
  };

  console.log(useRecoilValue(isMainOpen))



  return (
    isLettersInvisible ?

      <div className="letters__show-button" onClick={switchLetters}>
        <p className="letter__show-button-text app-text app-link">{textRu.lettersShowButton}</p>
      </div>

      :


      <div className={`letters ${isLettersInvisible && "letters_hidden"}`}>
        <h2 className="app-text letters__title">
          {textRu.lettersTitle}
        </h2>
        <div className="letters__list">
          {
            alphabeth.map(letter => (
              <Letter key={letter} name={letter} hideLetters={switchLetters} />
            ))}
        </div>
      </div>


  );
};

export default Letters;