import { atom } from "recoil";

export default atom({
  key: "mDrawerQuery",
  default: {
    startY: null,
    endY: null,
    swipeUp: null,
    swipeDown: null,
    moveY: null,
  },
});
