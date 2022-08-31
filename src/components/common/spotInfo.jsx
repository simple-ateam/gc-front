/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  PhoneOutlined,
  BookOutlined,
  ShareAltOutlined,
  EnvironmentFilled,
  PhoneFilled,
  GitlabFilled,
} from "@ant-design/icons";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { shareState, spotInfoState, mDrawerQuery, drawerScrollQuery } from "../../states";
import { drawerContent, drawerIconStyle } from "../styles/components/drawer";
import ShareModal from "./share";
import { touchHandler } from "../../utils/touchHandler";

const SpotInfo = () => {
  const spotInfo = useRecoilValue(spotInfoState);
  const setShareState = useSetRecoilState(shareState);
  const [mDrawer, setMDrawer] = useRecoilState(mDrawerQuery);
  const drawerScroll = useRecoilValue(drawerScrollQuery);

  const shareBtnHandler = () => {
    setShareState(true);
  };

  return (
    <>
      <section
        onTouchStart={(e) => touchHandler(e, mDrawer, setMDrawer)}
        onTouchEnd={(e) => touchHandler(e, mDrawer, setMDrawer)}
        onTouchMove={(e) => touchHandler(e, mDrawer, setMDrawer, drawerScroll)}
        css={drawerContent(mDrawer.swipeDown)}>
        <picture>
          <img
            src={`${spotInfo?.firstImageUrl ? spotInfo.firstImageUrl : "/img/spotImg.jpg"}`}
            alt="야영장 이미지"
          />
        </picture>
        <h2>{spotInfo?.facltNm ? spotInfo.facltNm : "시설 정보 없음"}</h2>
        <div></div>
        <nav>
          <ul>
            <li>
              <button aria-label="캠핑장에 전화하기">
                <PhoneOutlined css={drawerIconStyle} />
              </button>
              <p>전화</p>
            </li>
            <li>
              <button aria-label="캠핑장 북마크">
                <BookOutlined css={drawerIconStyle} />
              </button>
              <p>북마크</p>
            </li>
            <li>
              <button onClick={shareBtnHandler} aria-label="캠핑장 공유하기">
                <ShareAltOutlined css={drawerIconStyle} />
              </button>
              <p aria-label="캠핑장 공유하기">공유</p>
            </li>
          </ul>
        </nav>
        <div></div>
        <article>
          <div>
            <EnvironmentFilled css={drawerIconStyle} />
            <h3>{spotInfo?.addr1 ? spotInfo.addr1 : "주소정보 없음"}</h3>
          </div>
          <div>
            <PhoneFilled css={drawerIconStyle} />
            <h3>{spotInfo?.tel ? spotInfo.tel : "전화번호 없음"}</h3>
          </div>

          <div>
            <GitlabFilled css={drawerIconStyle} />
            <h3>
              반려동물 출입 :{" "}
              {spotInfo?.animalCmgCl ? spotInfo.animalCmgCl : "반려동물 출입정보 없음"}
            </h3>
          </div>
        </article>
      </section>
      <ShareModal />
    </>
  );
};

export default SpotInfo;
