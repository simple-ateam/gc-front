/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRecoilValue, useRecoilState } from "recoil";
import { spotInfoState, mDrawerQuery } from "../../states";
import { mDrawerContent } from "../styles/components/drawer";
import { touchHandler } from "../../utils/touchHandler";
const MSpotInfo = () => {
  const spotInfo = useRecoilValue(spotInfoState);
  const [mDrawer, setMDrawer] = useRecoilState(mDrawerQuery);

  return (
    <>
      <section
        onTouchStart={(e) => touchHandler(e, mDrawer, setMDrawer)}
        onTouchEnd={(e) => touchHandler(e, mDrawer, setMDrawer)}
        onTouchMove={(e) => touchHandler(e, mDrawer, setMDrawer)}
        css={mDrawerContent(mDrawer.swipeUp)}>
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
