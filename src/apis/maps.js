import axios from "axios";
import { backUrl } from "../config/config";

axios.defaults.baseURL = backUrl;

export const getSpotByLosition = async (data) => {
  return axios.get(`/dummys/user.json/`, data).then((res) => res.data);
};
