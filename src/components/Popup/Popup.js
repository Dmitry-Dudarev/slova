import React from "react";
import "./Popup.css";
import { popupState, popupContentState } from "../../state/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import closeIcon from "../../images/closeIcon.svg";
import PopupForLesson from "../PopupForLesson/PopupForLesson";

function Popup(props) {

  const [isPopupHidden, setIsPopupHidden] = useRecoilState(popupState);
  const content = useRecoilValue(popupContentState);

  const handleCloseIconClick = () => {
    setIsPopupHidden(true);
  };

  // определим содержимое попапа в зависимости от того
  // где он был вызван
  const selectPopupContent = () => {
    if (content === "lesson") {
      return (<PopupForLesson />)
    }
  };

  return (
    <div className={`popup ${isPopupHidden && "popup_hidden"}`}>
      <img
        className="popup__close-icon app-link"
        src={closeIcon}
        alt="close"
        onClick={handleCloseIconClick}
      />

      {selectPopupContent()}

    </div>
  );
};

export default Popup;