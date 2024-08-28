import React from "react";
import "./Popup.css";
import { popupState } from "../../state/atoms";
import { useRecoilState } from "recoil";
import closeIcon from "../../images/closeIcon.svg";

function Popup(props) {

  const [isPopupHidden, setIsPopupHidden] = useRecoilState(popupState);

  const handleCloseIconClick = () => {
    setIsPopupHidden(true);
  };
  

  return(
    <div className={`popup ${isPopupHidden && "popup_hidden"}`}>
      <img 
      className="popup__close-icon app-link" 
      src={closeIcon} 
      alt="close" 
      onClick={handleCloseIconClick}
      />
    </div>
  );
};

export default Popup;