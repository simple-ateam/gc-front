export const textLimitHandler = (text, limit) => {
  if (text.length >= limit) {
    return text.substr(0, limit) + "...";
  }
  return text;
};
