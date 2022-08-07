/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
// import image from "./img/image.png";
const { naver } = window;
const HomeContainer = css`
  width: 100vw;
  height: 100vh;
`;

const Map = () => {
  useEffect(() => {
    let map = null;
    let marker = null;
    const initMap = () => {
      map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.579838, 126.9770517),
        zoom: 15,
      });

      marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.579838, 126.9770517), //Marker 추가, 좌표에 마커가 찍힌다.
        map: map,
        icon: {
          url: "/img/logo.png",
          size: new naver.maps.Size(64, 64),
          anchor: new naver.maps.Point(30, 30),
        },
      });
    };
    initMap();
  }, []);

  // console.log(image);
  return (
    <>
      <div id="map" css={HomeContainer}></div>
    </>
  );
};

export default Map;
