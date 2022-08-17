import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { myLocationState, spotListState, pickSpotQuery } from "../../states";
import { mapEventHandler, setInitialLocation, addMarkerHandler } from "../../utils/mapApi";
const { naver } = window;

const Map = () => {
  const mapRef = useRef({ map: null, markerList: [], marker: null });
  const spotList = useRecoilValueLoadable(spotListState);
  const [myLocation, setMyLocation] = useRecoilState(myLocationState);
  const setPickSpotQuery = useSetRecoilState(pickSpotQuery);
  const initialZoomLevel = 10;
  const params = useParams();

  useEffect(() => {
    // 현재 위치 초기화
    setInitialLocation(setMyLocation, initialZoomLevel);
  }, []);

  useEffect(() => {
    console.log(params);
  }, []);

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

  // useEffect(() => {
  //   switch (spotList.state) {
  //     case "hasValue":
  //       addMarkerHandler(naver, mapRef.current, spotList.contents, setPickSpotQuery);
  //       break;
  //     case "hasError":
  //       throw console.log(spotList.contents.message);
  //     case "loading":
  //       break;
  //     default:
  //       break;
  //   }
  // }, [spotList]);

  return (
    <>
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
    </>
  );
};

export default Map;

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
