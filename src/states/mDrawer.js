import { selector } from "recoil";
import mDrawerQuery from "./mDrawerQuery";

export default selector({
  key: "mDrawerState",
  get: ({ get }) => {
    const mDrawer = get(mDrawerQuery);
    const { moveY } = mDrawer;

    if (moveY < -50) {
      return "collapse";
    }
    if (moveY >= 250) {
      return "expand";
    }
    return;
  },
});
