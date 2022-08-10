import { selector } from "recoil";
import { myLocationState } from ".";
import { getSpotByPosition } from "../apis/maps";
import customAxios from "../config/config";

const axios = customAxios();

export default selector({
  key: "spotList",
  get: async ({ get }) => {
    const myLocation = get(myLocationState);
    if (!myLocation.latitude) return null;
    const res = await getSpotByPosition(axios, myLocation);
    return res;
  },
  set: ({ get, set }) => {
    return console.log("bye");
  },
});
