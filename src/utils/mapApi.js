import { getSpotByPosition } from "../apis/maps";
import customAxios from "../config/config";

const axios = customAxios();

export const zoomEventHanler = (naver, ref, set) => {
  naver.maps.Event.addListener(ref, "zoom_changed", () => {
    set({ lat: ref.center._lat, lng: ref.center._lng });
  });
};

export const dragAndTouchHandler = (naver, ref, set) => {
  naver.maps.Event.addListener(ref, "mouseup", () => {
    set({ lat: ref.center._lat, lng: ref.center._lng });
  });
  naver.maps.Event.addListener(ref, "touchend", () => {});
};

export const addMarkerHandler = (naver, list, markerRef, mapRef) => {
  list.map((e) => {
    markerRef = new naver.maps.Marker({
      position: new naver.maps.LatLng(Number(e.mapY), Number(e.mapX)),
      map: mapRef,
      title: e.contentId,
      icon: {
        url: "/img/logo32.png",
        size: new naver.maps.Size(32, 32),
        anchor: new naver.maps.Point(0, 0),
      },
    });
    naver.maps.Event.addListener(markerRef, "click", () => {
      console.log(e.contentId);
    });
  });
};

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
