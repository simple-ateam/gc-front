/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { locationInfoState } from "../../states/location";
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
        zoom: 17,
      });

      markerRef.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.579838, 126.9770517),
        map: mapRef.current,
        icon: {
          url: "/img/logo.png",
          size: new naver.maps.Size(64, 64),
          anchor: new naver.maps.Point(30, 30),
        },
      });
    }
  }, [mapRef, myLocation]);

  // 지도 위치정보 상태 관리
  const onMapDragHandler = (e) => {
    setLocationInfos(mapRef.current.centerPoint);
  };
  console.log(locationInfos);
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
