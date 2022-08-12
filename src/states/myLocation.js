import { atom } from "recoil";

export default atom({
  key: "myLocationState",
  default: {
    lat: null,
    lng: null,
    zoom: 12,
  },
});

// export const locationInfosSelector = selector({
//   key: "locationInfoSelector",
//   get: ({ get }) => {
//     const counter = get(counterState);
//     return `현재 카운터는 ${counter} 입니다.`;
//   },
// });
