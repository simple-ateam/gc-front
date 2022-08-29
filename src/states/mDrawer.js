import { selector } from "recoil";
import mDrawerQuery from "./mDrawerQuery";
export default selector({
  key: "mDrawerState",
  get: ({ get }) => {
    const mDrawer = get(mDrawerQuery);
    const { moveY } = mDrawer;
    if (!moveY) return "collapse";
    if (moveY >= 300) {
      return "expand";
    }
    return "collapse";
  },
});
