import { selector } from "recoil";
import { myLocationState } from ".";
import { getSpotByPosition } from "../apis/maps";
import customAxios from "../config/config";

const axios = customAxios();

export default selector({
  key: "spotList",
  get: async ({ get }) => {
    const myLocation = get(myLocationState);
    let kilometer;
    if (!myLocation.lat) return;
    if (myLocation.zoom <= 10) {
      kilometer = 500;
      return await getSpotByPosition(axios, myLocation, kilometer);
    } else if (myLocation.zoom >= 11) {
      kilometer = 20;
      return await getSpotByPosition(axios, myLocation, kilometer);
    }
  },
});
