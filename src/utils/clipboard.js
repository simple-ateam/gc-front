export const copyText = async (text) => {
  try {
    return await window.navigator.clipboard.writeText(text);
  } catch (err) {
    throw console.log(err);
  }
};
