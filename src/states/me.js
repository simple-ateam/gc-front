import { selector } from "recoil";

export default selector({
  key: "meState",
  get: () => {
    const token = localStorage.getItem("token");
    if (token) {
      return token;
    } else return false;
  },
});
