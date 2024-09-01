import { atom } from "recoil";

// Обе переменных влияют на переменную-селектор видимости букв:

// отвечает, открыта ли сейчас
// главная страница
export const mainOpenState = atom({
    key: "isMainOpen",
    default: true
});

// Отвечает, была ли нажата кнопка выбора буквы
export const letterButtonPushState = atom({
    key: "isLetterButtonPushed",
    default: false
});

// показ попапа
export const popupState = atom({
    key: "isPopupHidden",
    default: true
});

// отвечает за содержимое попапа
export const popupContentState = atom({
    key: "popupContent",
    default:""
});

// видимость транскрипции
export const transcriptionVisibilityState = atom({
    key: "isTranscriptionVisible",
    default: true
});

// ОЗВУЧКА

// браузер способер синтезировать речь нашим методом?
export const speechSynthesisAbilityState = atom({
    key: "isSpeechSynthAvailabeInBrowser",
    default: false
});