import React from "react";
import "./Word.css";
import { textRu } from "../constants/textRu";
import { useRecoilValue } from "recoil";
import { speakerButtonState, transcriptionVisibilityState } from "../../state/atoms";
import speakerIcon from "../../images/speakerIcon.svg";


function Word({ word }) {
  const termin = word.termin;
  const translate = word.translate;
  const transcription = returnTranscription(word);
  const [isTranslateVisible, setIsTranslateVisible] = React.useState(false);
  const isTranscriptionVisible = useRecoilValue(transcriptionVisibilityState);
  const isSpeakerButtonVisible = useRecoilValue(speakerButtonState);

  // не у всех слов есть транскрипция
  function returnTranscription(word) {
    if (!word.transcription) {
      return (
        textRu.noTranscriptionInWord
      )
    }
    return word.transcription;
  };

  // Озвучивание
  const speachSynth = window.speechSynthesis;
  let utterance = new SpeechSynthesisUtterance(termin);
  // const voices = window.speechSynthesis.getVoices();

  const sayTermin = () => {
    speachSynth.speak(utterance)
  };
  
  function showTranslate() {
    setIsTranslateVisible(!isTranslateVisible)
  };

  return (
    <div className="word">
      <p className="word__termin app-text">{termin}</p>

      {isTranscriptionVisible &&
        <p className="word__transcription app-text">
          {transcription}
        </p>
      }

      <div className="word__translate-section" onClick={showTranslate}>
        <p className={`word__translate app-text ${isTranslateVisible && "word__translate_visible"}`}>{translate}</p>
      </div>

      {isSpeakerButtonVisible &&
        <div className="word__speaker-button-container app-link" onClick={sayTermin}>
          <img className="word__speaker-button" src={speakerIcon} alt="speak" />
        </div>
      }
    </div>
  );
};

export default Word;