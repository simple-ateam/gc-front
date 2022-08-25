import { selector } from "recoil";
import { searchQuery, myLocationState } from "./";
import { getSpotByPosition } from "../apis/maps";
import customAxios from "../config/config";

const axios = customAxios();

export default selector({
  key: "searchResultState",
  get: async ({ get }) => {
    return await getSpotByPosition(axios, { lat: 37, lng: 127 }, 500);
  },
});
