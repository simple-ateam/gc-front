import { selector } from "recoil";
import { pickSpotQuery, drawerQuery } from ".";

export default selector({
  key: "drawerState",
  get: ({ get }) => {
    const drawer = get(drawerQuery);
    switch (drawer) {
      case "myInfo":
        return "myInfo";
      case "spotInfo":
        return "spotInfo";
      default:
        return null;
    }
  },
});
