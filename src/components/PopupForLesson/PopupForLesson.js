import React from "react";
import "./PopupForLesson.css";
import { textRu } from "../constants/textRu";

function PopupForLesson(props){
  return(
    <ul className="popup-for-lesson">
      <li className="popup-for-lesson__unit">
        <p className="popup-for-lesson__unit-text app-text">
          {textRu.PopupLessonShowTranscription}
        </p>
      </li>    
    </ul>
  );
};

export default PopupForLesson;