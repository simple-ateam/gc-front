export const zoomEventHanler = (naver, ref, method) => {
  naver.maps.Event.addListener(ref, "zoom_changed", function () {
    console.log("hi");
    // setMyLocation({ lat: mapRef.current.center._lat, lng: mapRef.current.center._lng });
  });
};

export const dragAndTouchHandler = (naver, ref, method) => {
  naver.maps.Event.addListener(ref, "mouseup", () => {});
  naver.maps.Event.addListener(ref, "touchend", () => {});
};

export const addMarkerHandler = () => {};
export const markerClickHandler = () => {};

export const setInitialLocation = (set) => {
  const success = (position) => {
    set({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  };
  const failed = () => {
    set({
      latitude: 37.579838,
      longitude: 126.9770517,
    });
  };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, failed);
  }
};
