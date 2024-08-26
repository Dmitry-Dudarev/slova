import { atom } from "recoil";

export const isMainOpen = atom({
    key: "isMainOpen",
    default: false
});

export const lettersVisibility = atom({
    key: "isLettersInvisible",
    default: false
})