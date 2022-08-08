import { atom, selector } from "recoil";

export const locationInfoState = atom({
  key: "locationInfoState",
  default: null,
});

// export const locationInfosSelector = selector({
//   key: "locationInfoSelector",
//   get: ({ get }) => {
//     const counter = get(counterState);
//     return `현재 카운터는 ${counter} 입니다.`;
//   },
// });
