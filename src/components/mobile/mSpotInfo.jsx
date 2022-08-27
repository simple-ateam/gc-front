/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { EnvironmentFilled } from "@ant-design/icons";
import { useRecoilValue } from "recoil";
import { spotInfoState } from "../../states";
import { mDrawerContent, drawerIconStyle } from "../styles/components/drawer";
import { isMobile } from "react-device-detect";

const MSpotInfo = () => {
  const spotInfo = useRecoilValue(spotInfoState);

  return (
    <>
      <section css={mDrawerContent}>
        <div></div>
        <div>
          <div>
            <h2>{spotInfo?.facltNm ? spotInfo.facltNm : "시설 정보 없음"}</h2>
            <h3>{spotInfo?.addr1 ? spotInfo.addr1 : "주소정보 없음"}</h3>
          </div>
          <picture>
            <img
              src={`${spotInfo?.firstImageUrl ? spotInfo.firstImageUrl : "/img/spotImg.jpg"}`}
              alt="야영장 이미지"
            />
          </picture>
        </div>
      </section>
    </>
  );
};

export default MSpotInfo;
