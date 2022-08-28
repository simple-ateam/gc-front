import { selector } from "recoil";
import { searchQuery, myLocationState } from "./";
import { getSpotByPosition } from "../apis/maps";
import customAxios from "../config/config";
import { search } from "../utils/search";
const axios = customAxios();

export default selector({
  key: "searchResultState",
  get: async ({ get }) => {
    const query = get(searchQuery);
    if (!query) return null;
    const list = await getSpotByPosition(axios, { lat: 37, lng: 127 }, 500);
    return search(list, query);
  },
});
