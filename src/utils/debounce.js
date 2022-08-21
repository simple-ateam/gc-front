let timerId;

export const debounce = (callback, delay) => {
  return (e) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(callback, delay, e);
  };
};
