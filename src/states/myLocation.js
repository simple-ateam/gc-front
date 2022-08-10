import { atom } from "recoil";

export default atom({
  key: "myLocationState",
  default: {
    latitude: null,
    longitude: null,
  },
});

// export const locationInfosSelector = selector({
//   key: "locationInfoSelector",
//   get: ({ get }) => {
//     const counter = get(counterState);
//     return `현재 카운터는 ${counter} 입니다.`;
//   },
// });
