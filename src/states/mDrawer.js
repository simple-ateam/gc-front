import { selector } from "recoil";
import { drawerScrollQuery } from ".";
import mDrawerQuery from "./mDrawerQuery";
export default selector({
  key: "mDrawerState",
  get: ({ get }) => {
    const mDrawer = get(mDrawerQuery);
    const drawerScroll = get(drawerScrollQuery);
    const { swipeUp, swipeDown, startY, endY } = mDrawer;
    let moveY;
    let newValue;
    console.log("startY", startY);
    console.log("endY", endY);
    console.log("swipeUp", swipeUp);
    console.log("swipeDown", swipeDown);

    if (startY && endY) {
      newValue = startY - endY;
    }
    console.log("moveY", moveY);

    if (drawerScroll && moveY < -50) {
      return "collapse";
    }
    if (moveY >= 250) {
      console.log("실행");
      return "expand";
    }
    return;
  },
});
