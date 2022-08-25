import { atom } from "recoil";

export default atom({
  key: "myLocationState",
  default: {
    lat: null,
    lng: null,
    zoom: 12,
  },
});
