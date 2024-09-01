import React from "react";
import "./PopupForLesson.css";
import { textRu } from "../constants/textRu";
import checkboxChecked from "../../images/checkboxChecked.svg";
import checkboxUnchecked from "../../images/checkboxUnchecked.svg";
import { useRecoilState } from "recoil";
import { speakerButtonState, transcriptionVisibilityState } from "../../state/atoms";
import SpeakerOptions from "../SpeakerOptions/SpeakerOptions";

function PopupForLesson(props) {
  const [isTranscriptionVisible, setIsTranscriptionVisible] = useRecoilState(transcriptionVisibilityState);
  const handleTranscriptionSwitch = () => {
    setIsTranscriptionVisible(!isTranscriptionVisible);
  };

  const [isSpeakerButtonVisible, setIsSpeakerButtonVisible] = useRecoilState(speakerButtonState);
  const handleSpeakerButtonSwitch = () => {
    setIsSpeakerButtonVisible(!isSpeakerButtonVisible)
  };

  return (
    <ul className="popup-for-lesson">
      <li className="popup-for-lesson__unit app-link" onClick={handleTranscriptionSwitch} >

        <p className="popup-for-lesson__unit-text app-text">
          {textRu.popupLessonShowTranscription}
        </p>
        <img
          className="popup-for-lesson__unit-checkbox"
          src={isTranscriptionVisible ? checkboxChecked : checkboxUnchecked}
          alt={isTranscriptionVisible ? "checked" : "unchecked"} />
      </li>
      <li className="popup-for-lesson__unit app-link" onClick={handleSpeakerButtonSwitch}>
        <p className="popup-for-lesson__unit-text app-text">
          {textRu.popupLessonShowSpeaker}
        </p>
        <img
          className="popup-for-lesson__unit-checkbox"
          src={isSpeakerButtonVisible ? checkboxChecked : checkboxUnchecked}
          alt={isSpeakerButtonVisible ? "checked" : "unchecked"} />
      </li>
      {isSpeakerButtonVisible &&
        <li className="popup-for-lesson__unit_options">
          <SpeakerOptions />
        </li>
      }
    </ul>
  );
};

export default PopupForLesson;