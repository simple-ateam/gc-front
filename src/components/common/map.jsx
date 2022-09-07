import { useEffect, useRef } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState, useRecoilValueLoadable } from "recoil";
import { myLocationState, spotListState, pickSpotQuery } from "../../states";
import {
  mapEventHandler,
  setInitialLocation,
  addMarkerHandler,
  selectedMarkerHandler,
} from "../../utils/mapApi";
import { decodeQueryString } from "../../utils/queryString";
const { naver } = window;

const Map = () => {
  const mapRef = useRef({ map: null, markerList: [], marker: null, selectedMarker: null });
  const spotList = useRecoilValueLoadable(spotListState);
  const [myLocation, setMyLocation] = useRecoilState(myLocationState);
  const setPickSpot = useSetRecoilState(pickSpotQuery);
  const initialZoomLevel = 14;
  const navigate = useNavigate();
  const location = useLocation();
  const navigateObj = { navigate, createSearchParams };

  //위치 초기화
  useEffect(() => {
    // 위치 초기화(query string 있는 경우)
    if (location.pathname === "/maps" && location.search) {
      const { id: queryId, x: queryX, y: queryY } = decodeQueryString(location.search);
      setPickSpot(queryId);
      // 뒤로가기 할 경우 지도 이동
      if (mapRef.current.map) {
        mapRef.current.map.panTo(
          {
            y: queryY,
            _lat: queryY,
            x: queryX,
            _lng: queryX,
          },
          { duration: 300, easing: "easeOutCubic" },
        );
      }
      // 위치 초기화
      return setMyLocation({ lat: queryY, lng: queryX, zoom: initialZoomLevel });
    }

    // 위치 초기화(query string 없는 경우)
    if ((location.pathname === "/" || location.pathname === "/maps") && !myLocation.lat) {
      return setInitialLocation(setMyLocation, initialZoomLevel);
    }
  }, [location]);

  // map 객체 생성
  useEffect(() => {
    if (!myLocation.lat) return;
    if (mapRef.current.map === null) {
      // map 생성
      mapRef.current.map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(myLocation.lat, myLocation.lng),
        minZoom: 9,
        zoom: initialZoomLevel,
      });
      // map event 등록
      mapEventHandler(naver, mapRef.current, myLocation, setMyLocation);
    }
  }, [myLocation]);

  // 마커 생성
  useEffect(() => {
    switch (spotList.state) {
      case "hasValue":
        addMarkerHandler(naver, mapRef.current, spotList.contents, navigateObj);
        break;
      case "hasError":
        throw console.log(spotList.contents.message);
      case "loading":
        break;
      default:
        break;
    }

    if (spotList.state === "hasValue") {
      selectedMarkerHandler(mapRef.current, naver, location);
    }
  }, [spotList, location]);

  return (
    <>
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
    </>
  );
};

export default Map;
