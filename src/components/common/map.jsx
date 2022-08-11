import { useEffect, useRef, useLayoutEffect } from "react";
import {
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useResetRecoilState,
} from "recoil";
import { myLocationState, spotListState } from "../../states";
import { mapEventHanler, setInitialLocation, addMarkerHandler } from "../../utils/mapApi";
const { naver } = window;

const Map = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const spotListRef = useRef(null);
  const boundsRef = useRef(null);
  const markerListRef = useRef([]);
  const spotList = useRecoilValueLoadable(spotListState);
  // const spotList = useRecoilValue(spotListState);
  const [myLocation, setMyLocation] = useRecoilState(myLocationState);

  useEffect(() => {
    // 현재 위치 초기화
    setInitialLocation(setMyLocation);
  }, []);

  useEffect(() => {
    if (!myLocation.lat) return;
    if (mapRef.current === null) {
      // map 생성
      mapRef.current = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(myLocation.lat, myLocation.lng),
        minZoom: 9,
        zoom: 15,
      });
      // map event 등록
      mapEventHanler(naver, mapRef.current, setMyLocation, markerListRef.current);
    }
    switch (spotList.state) {
      case "hasValue":
        spotListRef.current = spotList.contents;
        break;
      case "hasError":
        throw console.log(spotList.contents.message);
      case "loading":
        break;
      default:
        spotListRef.current = "... loading ...";
    }
    addMarkerHandler(
      naver,
      spotListRef.current,
      markerRef.current,
      mapRef.current,
      markerListRef.current,
    );
  }, [myLocation, spotList]);
  // 마커 생성 / 클릭 이벤트 등록

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
