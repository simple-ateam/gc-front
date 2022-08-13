import { selector } from "recoil";
import { pickSpotQuery } from "./";
import { getSpotById } from "../apis/maps";
import customAxios from "../config/config";

const axios = customAxios();

export default selector({
  key: "spotInfo",
  get: async ({ get }) => {
    const pickSpotdata = get(pickSpotQuery);
    if (!pickSpotdata) return null;
    return await getSpotById(axios, pickSpotdata);
  },
});
