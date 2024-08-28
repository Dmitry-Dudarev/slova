import React from "react";
import "./Lesson.css";
import Word from "../Word/Word";
import navArronw from "../../images/navArrow.svg";
import menuIcon from "../../images/menuIcon.svg";
import { textRu } from "../constants/textRu";

function Lesson({ currentLesson }) {
  const [currentWord, setCurrentWord] = React.useState(0);

  function handleClick(direction) {
    if (direction === "left" && currentWord > 0) {
      setCurrentWord(currentWord - 1);
    } else if (direction === "right" && currentWord < currentLesson.length - 1) {
      setCurrentWord(currentWord + 1)
    }
  };

  console.log(currentLesson.length, currentWord + 1)

  return (
    <div className="lesson">
      <img className="lesson__arrow lesson__arrow-left" src={navArronw} alt="left" onClick={() => { handleClick("left") }} />

      {
        currentLesson[currentWord] ?
          <div className="lesson__section">
            <div className="lesson__options">

              {/* Покажем счетчик слов */}
              <p className="lesson__counter app-text">
                {`${currentLesson.length} / ${currentWord + 1}`}
              </p>

              <img className="lesson__options-icon app-link" src={menuIcon} alt="menu" />

            </div>
            <Word word={currentLesson[currentWord]} />
          </div>

          :

          <p className="lesson__error app-text">ошибка</p>
      }

      <img className="lesson__arrow lesson__arrow-right" src={navArronw} alt="right" onClick={() => { handleClick("right") }} />

      {/* {currentLesson.map(function(currentWord, index){
        return(
          <Word key={index} word={currentWord} />
        )
      })} */}
    </div>
  );
};

export default Lesson;