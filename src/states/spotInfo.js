import { selector } from "recoil";
import { pickSpotQuery } from "./";
import { getSpotById } from "../apis/maps";
import customAxios from "../config/config";

const axios = customAxios();

export default selector({
  key: "spotInfoState",
  get: async ({ get }) => {
    const pickSpot = get(pickSpotQuery);
    if (!pickSpot) return null;
    return await getSpotById(axios, pickSpot);
  },
});
