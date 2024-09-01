import React from "react";
import "./PopupForLesson.css";
import { textRu } from "../constants/textRu";
import checkboxChecked from "../../images/checkboxChecked.svg";
import checkboxUnchecked from "../../images/checkboxUnchecked.svg";
import { useRecoilState } from "recoil";
import { transcriptionVisibilityState } from "../../state/atoms";

function PopupForLesson(props) {
  const [isTranscriptionVisible, setIsTranscriptionVisible] = useRecoilState(transcriptionVisibilityState);
  const handleTranscriptionSwitch = () => {
    setIsTranscriptionVisible(!isTranscriptionVisible);
  }

  return (
    <ul className="popup-for-lesson">
      <li className="popup-for-lesson__unit app-link"onClick={handleTranscriptionSwitch} >
        <p className="popup-for-lesson__unit-text app-text">
          {textRu.popupLessonShowTranscription}
        </p>
        <img
          className="popup-for-lesson__unit-checkbox"
          src={isTranscriptionVisible ? checkboxChecked : checkboxUnchecked}
          alt={isTranscriptionVisible ? "checked" : "unchecked"} />
      </li>
    </ul>
  );
};

export default PopupForLesson;