/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { spotInfoState, mDrawerQuery } from "../../states";
import { mDrawerContent } from "../styles/components/drawer";

const MSpotInfo = () => {
  const spotInfo = useRecoilValue(spotInfoState);
  const [mDrawer, setMDrawer] = useRecoilState(mDrawerQuery);
  useEffect(() => {
    console.log("render");
  }, []);
  const touchStartHandler = (e) => {
    setMDrawer({ ...mDrawer, startY: e.changedTouches[0].clientY });
  };

  const touchEndHandler = (e) => {
    if (mDrawer.startY - e.changedTouches[0].clientY >= 200) {
      setMDrawer({ ...mDrawer, endY: e.changedTouches[0].clientY });
    } else {
      setMDrawer({ ...mDrawer, endY: e.changedTouches[0].clientY, moveY: 0 });
    }
  };

  const touchMoveHandler = (e) => {
    if (mDrawer.startY - e.changedTouches[0].clientY > 0) {
      setMDrawer({ ...mDrawer, moveY: mDrawer.startY - e.changedTouches[0].clientY });
    }
  };

  return (
    <>
      <section
        onTouchStart={touchStartHandler}
        onTouchEnd={touchEndHandler}
        onTouchMove={touchMoveHandler}
        css={mDrawerContent(mDrawer)}>
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
