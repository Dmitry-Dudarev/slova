import React from "react";
import "./Word.css";
import { textRu } from "../constants/textRu";
import { useRecoilValue } from "recoil";
import { transcriptionVisibilityState } from "../../state/atoms";


function Word({ word }) {
  const termin = word.termin;
  const translate = word.translate;
  const transcription = returnTranscription(word);
  const [isTranslateVisible, setIsTranslateVisible] = React.useState(false);
  const isTranscriptionVisible = useRecoilValue(transcriptionVisibilityState);

  // не у всех слов есть транскрипция
  function returnTranscription(word) {
    if (!word.transcription) {
      return (
        textRu.noTranscriptionInWord
      )
    }
    return word.transcription;
  };

  // Возможность озвучивания
  // const synth = window.speechSynthesis;
  // let utterance = new SpeechSynthesisUtterance(termin);
  // const voices = window.speechSynthesis.getVoices();



  function handleClick() {
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

      <div className="word__translate-section" onClick={handleClick}>
        <p className={`word__translate app-text ${isTranslateVisible && "word__translate_visible"}`}>{translate}</p>
      </div>
    </div>
  );
};

export default Word;