import { selector } from "recoil";
import { searchQuery } from "./";
import { getSpotById } from "../apis/maps";
import customAxios from "../config/config";

const axios = customAxios();

export default selector({
  key: "searchResult",
  get: async ({ get }) => {
    const searchQueryData = get(searchQuery);
    return searchQueryData;
  },
});
