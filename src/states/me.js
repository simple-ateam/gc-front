import { get } from "react-hook-form";
import { atom, selector } from "recoil";

const loginQuery = atom({
  key: "loginQuery",
  default: false,
});

export default selector({
  key: "meState",
  get: ({ get }) => {
    const token = get(loginQuery);
    return token;
  },
  set: ({ set }) => {
    const getId = JSON.parse(localStorage.getItem("token"));
    if (getId) {
      set(loginQuery, getId.id);
    } else {
      set(loginQuery, false);
    }
  },
});
