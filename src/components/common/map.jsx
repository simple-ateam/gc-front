import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { myLocationState, spotListState } from "../../states";
import {
  dragAndTouchHandler,
  setInitialLocation,
  zoomEventHanler,
  addMarkerHandler,
} from "../../utils/mapApi";
const { naver } = window;

const Map = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const spotList = useRecoilValue(spotListState);
  const [myLocation, setMyLocation] = useRecoilState(myLocationState);

  // 위치 초기화
  useEffect(() => {
    setInitialLocation(setMyLocation);
  }, []);

  // map 생성
  useEffect(() => {
    if (myLocation.latitude === null) return;
    if (mapRef.current === null) {
      mapRef.current = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(myLocation.lat, myLocation.lng),
        minZoom: 9,
        zoom: 11,
      });
      // map event 등록
      zoomEventHanler(naver, mapRef.current, setMyLocation);
      dragAndTouchHandler(naver, mapRef.current, setMyLocation);
    }
  }, [myLocation]);

  // 마커 생성 / 클릭 이벤트 등록
  useEffect(() => {
    if (myLocation.lat) addMarkerHandler(naver, spotList, markerRef.current, mapRef.current);
  }, [myLocation]);

  // let rect = new naver.maps.Rectangle({
  //   strokeOpacity: 0,
  //   strokeWeight: 0,
  //   fillOpacity: 0.2,
  //   fillColor: "#f00",
  //   bounds: mapRef.current.getBounds(), // 지도의 bounds와 동일한 크기의 사각형을 그립니다.
  //   map: mapRef.current,
  // });

  //   }
  // }, [mapRef, myLocation]);

  return (
    <>
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
    </>
  );
};

export default Map;
