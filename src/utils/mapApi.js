import { getSpotByPosition } from "../apis/maps";
import customAxios from "../config/config";

export const mapEventHanler = (naver, ref, set, markerArr) => {
  naver.maps.Event.addListener(ref, "idle", () => {
    set({ lat: ref.center._lat, lng: ref.center._lng, zoom: ref.zoom });
    console.log(markerArr);
  });
};

export const addMarkerHandler = (naver, list, markerRef, mapRef, markerArr) => {
  if (!Array.isArray(list)) return;
  markerArr.forEach((e) => {
    e.markerRef.setMap(null);
  });
  markerArr.splice(0);
  list.map((e) => {
    markerRef = new naver.maps.Marker({
      position: new naver.maps.LatLng(Number(e.mapY), Number(e.mapX)),
      map: mapRef,
      icon: {
        url: "/img/logo32.png",
        size: new naver.maps.Size(32, 32),
        anchor: new naver.maps.Point(0, 0),
      },
    });
    markerArr.push({ markerRef });
    naver.maps.Event.addListener(markerRef, "click", () => {
      console.log(e);
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
      lat: 37.579838,
      lng: 126.9770517,
    });
  };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, failed);
  }
};
