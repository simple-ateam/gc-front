export const touchHandler = (evt, state, setState) => {
  const moveY = evt.changedTouches[0].clientY;
  const { startY } = state;

  switch (evt.type) {
    case "touchstart":
      setState({ ...state, startY: moveY, endY: null });
      break;

    case "touchmove":
      if (startY - moveY > 0) {
        setState({ ...state, swipeUp: startY - moveY });
      } else if (startY - moveY < 0) {
        setState({ ...state, swipeDown: startY - moveY });
      }
      break;

    case "touchend":
      if (state.swipeUp >= 250) {
        setState({ ...state, endY: moveY, swipeDown: null, swipeUp: null });
      } else if (state.swipeUp < 250) {
        setState({ ...state, swipeUp: null });
      }
      if (state.swipeDown >= -50) {
        setState({ ...state, endY: moveY, swipeDown: null, swipeUp: null });
      } else if (state.swipeDown < -50) {
        setState({ ...state, endY: moveY, swipeUp: null });
      }
      break;

    default:
      return;
  }
};
