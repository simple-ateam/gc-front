export const getSpotByPosition = (axios, data, kilometer) => {
  const scale = 5;
  const { lng, lat } = data;
  return axios
    .get(`/map/find`, {
      params: {
        kilometer,
        mapX: lng,
        mapY: lat,
        scale,
      },
    })
    .then((res) => res.data.data);
};

export const getSpotById = async (axios, data) => {
  return await axios.get(`/map/detail/${data}`).then((res) => res.data.data);
};
