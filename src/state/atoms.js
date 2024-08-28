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

export const popupState = atom({
    key: "isPopupHidden",
    default: true
});