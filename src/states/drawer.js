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
  set: ({ get, set }, ui) => {
    const pickSpot = get(pickSpotQuery);
    const drawer = get(drawerQuery);

    switch (ui) {
      case "myInfo":
        set(pickSpot, null);
        set(drawer, ui);
        break;
      case "pickSpot":
        console.log(ui);
        set(drawerQuery, ui);
        break;
      default:
        set(drawerQuery, null);
    }
  },
});
