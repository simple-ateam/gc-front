import { selector } from "recoil";
import mDrawerQuery from "./mDrawerQuery";
export default selector({
  key: "mDrawerState",
  get: ({ get }) => {
    const mDrawer = get(mDrawerQuery);
    const { startY, endY } = mDrawer;
    if (startY - endY >= 250) {
      console.log(startY - endY);
      return "expand";
    }
    return "collapse";
  },
});
