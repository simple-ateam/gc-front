import { useEffect, useRef } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { myLocationState, spotListState, pickSpotQuery } from "../../states";
import { mapEventHandler, setInitialLocation, addMarkerHandler } from "../../utils/mapApi";
import { decodeQueryString } from "../../utils/queryString";
const { naver } = window;

const Map = () => {
  const mapRef = useRef({ map: null, markerList: [], marker: null, selectedMarker: null });
  const spotList = useRecoilValueLoadable(spotListState);
  const [myLocation, setMyLocation] = useRecoilState(myLocationState);
  const setPickSpotQuery = useSetRecoilState(pickSpotQuery);
  const initialZoomLevel = 14;
  const navigate = useNavigate();
  const location = useLocation();
  const navigateObj = { navigate, createSearchParams };
  const locationRef = useRef(null);
  useEffect(() => {
    // 위치 초기화(query string 있는 경우)
    if (location.pathname === "/maps" && location.search) {
      const { id: queryId, x: queryX, y: queryY } = decodeQueryString(location.search);
      locationRef.current = { queryX, queryY };
      setPickSpotQuery(queryId);
      // 뒤로가기 할 경우
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
    if (location.pathname === "/" || location.pathname === "/maps") {
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
        // 여기다가 선택한 마커 넣으면 계속 깜빡거림 ㅇㅋ?
        break;
      case "hasError":
        throw console.log(spotList.contents.message);
      case "loading":
        break;
      default:
        break;
    }
    // 여기다가 해야됨 그래서 선택한 마커 ref값으로 두고 값 비교해서 다른 경우에 갱신하는 걸로 해야함.
  }, [spotList]);

  // 선택한 마커 생성

  useEffect(() => {
    // api로 빼기
    if (location.pathname === "/maps" && location.search) {
      mapRef.current.selectedMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(locationRef.current.queryY, locationRef.current.queryX),
        map: mapRef.current.map,
        icon: {
          url: "/img/selectedLogo32.png",
          size: new naver.maps.Size(32, 32),
          anchor: new naver.maps.Point(0, 0),
        },
      });
    }
  }, []);

  return (
    <>
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
    </>
  );
};

export default Map;
