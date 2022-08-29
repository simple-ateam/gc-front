import { atom } from "recoil";

export default atom({
  key: "mDrawerQuery",
  default: {
    startY: 0,
    endY: 0,
    moveY: null,
  },
});
