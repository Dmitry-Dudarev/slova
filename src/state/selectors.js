import { selector } from "recoil";
import { mainOpenState, letterButtonPushState } from "./atoms";

// Видимость панели с буквами теперь зависит от данной паеременной
// На видимость влияют 2 фактора:
// Находится ли пользователь на главной странице 
// или
// был ли произведен выбор буквы
// (или нажатие на кнопку Показать буквы)

export const lettersVisibility = selector({
    key: "isLettersInvisible",
    get: ({ get }) => {
        const isMainOpen = get(mainOpenState);
        const isLetterButtonPushed = get(letterButtonPushState);

        if (isMainOpen) {
            return false;
        };

        if (isLetterButtonPushed) {
            return true;
        } else {
            return false;
        };
    }
});
