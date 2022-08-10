import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { myLocationState, spotListState } from "../../states";
import { dragAndTouchHandler, setInitialLocation, zoomEventHanler } from "../../utils/mapApi";
const { naver } = window;

const Map = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const spotList = useRecoilValue(spotListState);
  const [myLocation, setMyLocation] = useRecoilState(myLocationState);

  // 내 위치 설정하기
  useEffect(() => {
    setInitialLocation(setMyLocation);
  });

  // map 생성
  useEffect(() => {
    if (myLocation.latitude === null) return;
    if (mapRef.current === null) {
      mapRef.current = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(myLocation.lat, myLocation.lng),
        minZoom: 9,
        zoom: 11,
      });
      zoomEventHanler(naver, mapRef.current);
      dragAndTouchHandler(naver, mapRef.current);
    }
  }, [myLocation]);

  // marker 생성
  useEffect(() => {
    console.log(spotList);
  }, [myLocation]);

  // let rect = new naver.maps.Rectangle({
  //   strokeOpacity: 0,
  //   strokeWeight: 0,
  //   fillOpacity: 0.2,
  //   fillColor: "#f00",
  //   bounds: mapRef.current.getBounds(), // 지도의 bounds와 동일한 크기의 사각형을 그립니다.
  //   map: mapRef.current,
  // });

  //     // addMarkerHandler(dummy);
  //   }
  // }, [mapRef, myLocation]);

  function addMarkerHandler(list) {
    list.map((e) => {
      markerRef.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(Number(e.mapY), Number(e.mapX)),
        map: mapRef.current,
        title: e.contentId,
        icon: {
          url: "/img/logo32.png",
          size: new naver.maps.Size(32, 32),
          anchor: new naver.maps.Point(0, 0),
        },
      });
      e.marker = markerRef.current;
      naver.maps.Event.addListener(e.marker, "click", (item) => {
        console.log(e.marker);
      });
    });
  }

  // 지도 위치정보 상태 관리
  const onMapDragHandler = () => {
    setMyLocation({ lat: mapRef.current.center._lat, lng: mapRef.current.center._lng });
  };

  return (
    <>
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
    </>
  );
};

export default Map;
