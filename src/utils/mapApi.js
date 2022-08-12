import { getSpotByPosition } from "../apis/maps";
import customAxios from "../config/config";

// 맵 상태 변경 이벤트
export const mapEventHanler = (naver, ref, set) => {
  const { map } = ref;
  let timer;

  // 이벤트 핸들러 디바운싱
  naver.maps.Event.addListener(map, "idle", () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      set({ lat: map.center._lat, lng: map.center._lng, zoom: map.zoom });
    }, 300);
  });
};

// 마커 핸들러
export const addMarkerHandler = (naver, ref, list) => {
  if (!Array.isArray(list)) return;

  // 기존 마커 있는 경우, 초기화
  if (ref.markerList[0]) {
    ref.markerList.forEach((e) => {
      e.setMap(null);
    });
    ref.markerList.splice(0);
  }

  if (ref.map.zoom <= 10) {
    const doNmArr = [...new Set(list.map((e) => e.doNm))];
    const site = doNmArr.reduce((acc, cur) => {
      acc[cur] = list.filter((e) => e.doNm === cur).length;
      return acc;
    }, {});

    // site.map((e) => {
    //   ref.marker = new naver.maps.Marker({
    //     position: new naver.maps.LatLng(Number(e.mapY), Number(e.mapX)),
    //     map: ref.map,
    //     icon: {
    //       url: "/img/logo64.png",
    //       size: new naver.maps.Size(32, 32),
    //       anchor: new naver.maps.Point(0, 0),
    //     },
    //   });
    //   ref.markerList.push(ref.marker);

    //   naver.maps.Event.addListener(ref.marker, "click", () => {
    //     console.log(e);
    //   });
    // });
  } else if (ref.map.zoom >= 11) {
    list.map((e) => {
      ref.marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(Number(e.mapY), Number(e.mapX)),
        map: ref.map,
        icon: {
          url: "/img/logo32.png",
          size: new naver.maps.Size(32, 32),
          anchor: new naver.maps.Point(0, 0),
        },
      });
      ref.markerList.push(ref.marker);

      // 마커 클릭 이벤트 설정
      naver.maps.Event.addListener(ref.marker, "click", () => {
        console.log(e);
      });
    });
  }
};

// 위치 초기화
export const setInitialLocation = (set, zoomLevel) => {
  const success = (position) => {
    set({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      zoom: zoomLevel,
    });
  };
  const failed = () => {
    set({
      lat: 37.579838,
      lng: 126.9770517,
      zoom: zoomLevel,
    });
  };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, failed);
  }
};
