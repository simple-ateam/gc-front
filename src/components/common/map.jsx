import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { myLocationState, spotListState, pickSpotQuery, spotInfoState } from "../../states";
import { mapEventHandler, setInitialLocation, addMarkerHandler } from "../../utils/mapApi";
const { naver } = window;

const Map = () => {
  const mapRef = useRef({ map: null, markerList: [], marker: null, selectedMarker: null });
  const spotList = useRecoilValueLoadable(spotListState);
  const [myLocation, setMyLocation] = useRecoilState(myLocationState);
  const setPickSpotQuery = useSetRecoilState(pickSpotQuery);
  const spotInfo = useRecoilValueLoadable(spotInfoState);
  const initialZoomLevel = 12;
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // parameter가 있는 경우 접속했을 경우
    if (params.content) {
      setPickSpotQuery(params.content);
    }
    // 현재 위치 초기화
    setInitialLocation(setMyLocation, initialZoomLevel);
  }, [params.content]);

  useEffect(() => {
    switch (spotInfo.state) {
      case "hasValue":
        if (spotInfo.contents) {
          mapRef.current.map.morph({
            y: spotInfo.contents.mapY,
            _lat: spotInfo.contents.mapY,
            x: spotInfo.contents.mapX,
            _lng: spotInfo.contents.mapX,
          });
        }
        break;
      case "hasError":
        throw console.log(spotList.contents);
      case "loading":
        break;
      default:
        break;
    }
  }, [spotInfo]);

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
