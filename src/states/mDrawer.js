import { selector } from "recoil";
import mDrawerQuery from "./mDrawerQuery";
export default selector({
  key: "mDrawerState",
  get: ({ get }) => {
    const mDrawer = get(mDrawerQuery);
  },
});
