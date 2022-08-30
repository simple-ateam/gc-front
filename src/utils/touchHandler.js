export const touchHandler = (evt, state, setState, scroll) => {
  const { clientY } = evt.changedTouches[0];
  const { startY, swipeUp, swipeDown } = state;
  const swipe = startY - clientY;
  //   console.log(swipe);
  switch (evt.type) {
    case "touchstart":
      setState({ ...state, startY: clientY, endY: null });
      break;

    case "touchmove":
      if (swipe > 0) {
        setState({ ...state, swipeUp: swipe });
      } else if (scroll && swipe < 0) {
        setState({ ...state, swipeDown: swipe });
      }
      break;

    case "touchend":
      if (swipeUp && swipeUp >= 250) {
        setState({
          ...state,
          endY: clientY,
          swipeDown: null,
          swipeUp: null,
          moveY: swipe,
        });
      } else if (swipeUp && swipeUp < 250) {
        setState({ ...state, swipeUp: null });
      }
      if (swipeDown && swipeDown >= -50) {
        setState({ ...state, endY: clientY, swipeDown: null, swipeUp: null });
      } else if (swipeDown && swipeDown < -50) {
        setState({ ...state, endY: clientY, swipeUp: null, moveY: swipe, swipeDown: null });
      }
      break;
    default:
      return;
  }
};
