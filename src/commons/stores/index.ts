import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const relationalType = atom<number>({
  key: "relationalType",
  default: 0,
});

export const collectibleType = atom<number>({
  key: "collectibleType",
  default: 0,
});

export const conceptType = atom<number>({
  key: "conceptType",
  default: 0,
});
