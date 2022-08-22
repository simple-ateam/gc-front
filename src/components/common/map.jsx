import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { myLocationState, spotListState, pickSpotQuery, spotInfoState } from "../../states";
import { mapEventHandler, setInitialLocation, addMarkerHandler } from "../../utils/mapApi";
import { decodeQueryString } from "../../utils/queryString";
const { naver } = window;

const Map = () => {
  const mapRef = useRef({ map: null, markerList: [], marker: null, selectedMarker: null });
  const spotList = useRecoilValueLoadable(spotListState);
  const [myLocation, setMyLocation] = useRecoilState(myLocationState);
  const setPickSpotQuery = useSetRecoilState(pickSpotQuery);
  const initialZoomLevel = 14;
  const params = useParams();
  const navigate = useNavigate();
  const decodedQuery = decodeQueryString(params.content);
  const { id, x, y } = decodedQuery;

  //임시
  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  // query string 없는 경우 위치 초기화
  useEffect(() => {
    if (params.content) return;
    setInitialLocation(setMyLocation, initialZoomLevel);
  }, []);

  // query string 있는 경우 위치 관리
  useEffect(() => {
    if (!params.content) return;
    setPickSpotQuery(id);
    // 뒤로가기 할 경우, 위치 초기화
    if (mapRef.current.map) {
      mapRef.current.map.panTo(
        {
          y,
          _lat: y,
          x,
          _lng: x,
        },
        { duration: 300, easing: "easeOutCubic" },
      );
    }
    // 첫 렌더링 시 위치 초기화
    setMyLocation({ lat: decodedQuery.y, lng: decodedQuery.x, zoom: initialZoomLevel });
  }, [params]);

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
      mapEventHandler(naver, mapRef.current, setMyLocation);
    }
  }, [myLocation]);

  // 마커 생성
  useEffect(() => {
    switch (spotList.state) {
      case "hasValue":
        addMarkerHandler(naver, mapRef.current, spotList.contents, setPickSpotQuery, navigate);
        break;
      case "hasError":
        throw console.log(spotList.contents.message);
      case "loading":
        break;
      default:
        break;
    }
  }, [spotList]);

  return (
    <>
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
    </>
  );
};

export default Map;
