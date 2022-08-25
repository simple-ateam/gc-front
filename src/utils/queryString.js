export const encodeQueryString = (params) => {
  return encodeURIComponent(
    Object.keys(params)
      .map((key) => key + "=" + params[key])
      .join("&"),
  );
};

export const decodeQueryString = (params) => {
  const decodedQueryArr = {};
  const decoded = decodeURIComponent(params);
  const entries = new URLSearchParams(decoded).entries();
  for (let entry of entries) {
    decodedQueryArr[entry[0]] = entry[1];
  }
  return decodedQueryArr;
};
