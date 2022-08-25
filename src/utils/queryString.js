export const encodeQueryString = (params) => {
  return encodeURIComponent(
    Object.keys(params)
      .map((key) => key + "=" + params[key])
      .join("&"),
  );
};

export const decodeQueryString = (params) => {
  const paramsObj = {};
  const entries = new URLSearchParams(params).entries();
  for (let entry of entries) {
    paramsObj[entry[0]] = entry[1];
  }
  return paramsObj;
};
