import React from "react";
import "./SpeakerOptions.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentLanguage, speakerVoicesList } from "../../state/atoms";
import { textRu } from "../constants/textRu";
import checkboxChecked from "../../images/checkboxChecked.svg";
import checkboxUnchecked from "../../images/checkboxUnchecked.svg";
import { selectedVoiceByUser } from "../../state/atoms";

function SpeakerOptions(props) {
  const language = useRecoilValue(currentLanguage);
  const voices = useRecoilValue(speakerVoicesList);

  const [selectedVoice, setSelectedVoice] = useRecoilState(selectedVoiceByUser);

  // отфильтруем голоса подходящие для выбранного языка
  let suitableVoices = voices.filter(voice => voice.lang.startsWith(language));

  const handleVoiceSelect = (handleSelectedVoice) => {
    setSelectedVoice(handleSelectedVoice);
  }

  console.log(selectedVoice)

  return (
    <div className="speaker-options">
      <p className="speaker-options__title app-text">
        {textRu.speakerOptionsSelectLanguage}
      </p>
      {suitableVoices.map(voice => {
        return (
          <div
            className="speaker-options__unit app-link"
            key={voice.name}
            onClick={() => handleVoiceSelect(voice)}
          >
            <p className="speaker-options__voice app-text">
              {voice.name}
            </p>
            <img
              className="speaker-options__select-icon"
              src={selectedVoice.name === voice.name ? checkboxChecked : checkboxUnchecked}
              alt={voice.name} />
          </div>
        )
      })}

    </div>

    // <p className="speaker-options_error app-text">
    //   {textRu.speakerOptionsFilterError}
    // </p>
  )
};

export default SpeakerOptions;