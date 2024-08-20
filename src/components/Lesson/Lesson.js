import React from "react";
import "./Lesson.css";
import Word from "../Word/Word";
import navArronw from "../../images/navArrow.svg";

function Lesson({ currentLesson }) {
  const [currentWord, setCurrentWord] = React.useState(0);

  function handleClick(direction) {
    if (direction === "left" && currentWord > 0) {
      setCurrentWord(currentWord - 1);
    } else if (direction === "right" && currentWord < currentLesson.length - 1) {
      setCurrentWord(currentWord + 1)
    }
  };

  return (
    <div className="lesson">
      <img className="lesson__arrow lesson__arrow-left" src={navArronw} alt="left" onClick={() => { handleClick("left") }} />

      {
        currentLesson[currentWord] ? <Word word={currentLesson[currentWord]} /> : <p className="lesson__error app-text">ошибка</p>
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