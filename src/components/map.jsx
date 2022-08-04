/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";

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
        position: new naver.maps.LatLng(37, 127.039573), //Marker 추가, 좌표에 마커가 찍힌다.
        map: map,
        icon: {
          content: `
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd" />
        </svg>
          `,
        },
      });
    };
    initMap();
  }, []);

  return (
    <>
      <div id="map" css={HomeContainer}></div>
    </>
  );
};

export default Map;
