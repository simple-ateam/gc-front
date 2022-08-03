import { useEffect } from "react";
import { css } from "@emotion/react";

const { naver } = window;
const HomeContainer = css`
  width: "100vw" !important;
  height: "100vw" !important;
  position: relative;
`;

const InputStyle = css`
  position: absolute;
`;
const Map = () => {
  useEffect(() => {
    let map = null;
    let marker = null;
    const initMap = () => {
      map = new naver.maps.Map("map", {
        //지도 추가, 좌표를 기점으로 주변 지도가 추가된다.
        center: new naver.maps.LatLng(37, 127.039573),
        zoom: 13,
      });

      marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37, 127.039573), //Marker 추가, 좌표에 마커가 찍힌다.
        map: map,
        icon: {
          content: `
            <img alt="marker" src={vectorIcon} /> //마커에 사용할 이미지
          `,
        },
      });
    };
    initMap();
  }, []);

  return (
    <>
      <div id="map" css={HomeContainer}>
        <input type="text" />
      </div>
    </>
  );
};

export default Map;
