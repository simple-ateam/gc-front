import axios from "axios";

const customAxios = () => {
  const axiosConfig = {
    baseURL: "http://14.36.191.99:8086",
  };
  return axios.create(axiosConfig);
};

export default customAxios;
