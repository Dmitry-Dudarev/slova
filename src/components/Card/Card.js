import React from "react";
import './Card.css';
import { Link } from "react-router-dom";

function Card(props) {
  const lesson = props.lesson;
  const index = props.index;

  function hadleClick(data) {
    props.updateCurrentLesson(data)
  };


  return (
    <Link className="card" to={`${index}`} onClick={() => hadleClick(lesson)}>
      <p className="card__title app-text">{
        `${lesson[0].termin} - ${lesson.at(-1).termin}`}
      </p>

      <p className="card__wordcount app-text">
        {lesson.length}
      </p>
    </Link>
  )
}

export default Card;