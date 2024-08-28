import React from "react";
import "./Popup.css";
import { popupState } from "../../state/atoms";
import { useRecoilState } from "recoil";

function Popup(props) {

  const [isPopupHidden, setIsPopupHidden] = useRecoilState(popupState);
  

  return(
    <div className={`popup`}>

    </div>
  );
};

export default Popup;