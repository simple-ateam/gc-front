import axios from "axios";
import { backUrl } from "../config/config";

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export const getSpotByPosition = async (data) => {
  const kilometer = 20;
  const scale = 5;
  const { mapX, mapY } = data;
  const list = await axios
    .get(`/map/find`, { kilometer, mapX, mapY, scale })
    .then((res) => res.data);
  console.log(list);
};
