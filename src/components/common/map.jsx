/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { locationInfoState } from "../../states/location";
import dummy from "../../dummy.json";
import { getSpotByPosition } from "../../apis/maps";

const { naver } = window;

const HomeContainer = css`
  width: 100vw;
  height: 100vh;
`;

const Map = () => {
  const [myLocation, setMyLocation] = useState(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [locationInfos, setLocationInfos] = useRecoilState(locationInfoState);

  // 내 위치 설정하기
  useEffect(() => {
    const success = (position) => {
      setMyLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    };
    const failed = () => {
      setMyLocation({
        latitude: 37.579838,
        longitude: 126.9770517,
      });
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, failed);
    }
  }, []);

  // map 생성하기
  useEffect(() => {
    if (myLocation) {
      mapRef.current = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(myLocation.latitude, myLocation.longitude),
        minZoom: 9,
        zoom: 11,
      });
      getSpotByPosition({ mapX: myLocation.latitude, mapY: myLocation.longitude });
      // let rect = new naver.maps.Rectangle({
      //   strokeOpacity: 0,
      //   strokeWeight: 0,
      //   fillOpacity: 0.2,
      //   fillColor: "#f00",
      //   bounds: mapRef.current.getBounds(), // 지도의 bounds와 동일한 크기의 사각형을 그립니다.
      //   map: mapRef.current,
      // });

      zoomEvent();
      addMarkerHandler(dummy);
    }
  }, [mapRef, myLocation]);

  // zoom Event
  function zoomEvent() {
    naver.maps.Event.addListener(mapRef.current, "zoom_changed", function () {
      console.log(mapRef.current.zoom);
    });
  }

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
    // console.log(mapRef.current.bounds);
    // setLocationInfos({ mapX: mapRef.current.centerPoint.x, mapY: mapRef.current.centerPoint.y });
  };

  return (
    <>
      <div
        id="map"
        onTouchEnd={onMapDragHandler}
        onMouseUp={onMapDragHandler}
        css={HomeContainer}></div>
    </>
  );
};

export default Map;
