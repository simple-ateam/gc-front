/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import content from "../../content.json";
import { isMobile, isBrowser } from "react-device-detect";
import { theme } from "../styles/styleTheme";
import {
  PhoneOutlined,
  BookOutlined,
  ShareAltOutlined,
  EditOutlined,
  EnvironmentFilled,
  PhoneFilled,
  GitlabFilled,
} from "@ant-design/icons";
import { useRecoilValue } from "recoil";
import { pickSpotQuery } from "../../states";
import spotInfo from "../../states/spotInfo";
import { useEffect } from "react";

const { boxSize, borderRadius, palette, fontSize, gap, gapByPercent } = theme;

const drawerContainer = (state) => {
  return css`
    display: ${state ? "block" : "none"};
    position: fixed;
    top: 0;
    width: ${isMobile ? "100vw" : "420px"};
    height: 100vh;
    z-index: 9998;
    background-color: ${palette.white_1};
    box-shadow: 2px 0 4px rgb(0 0 0 / 20%), 0 -1px 0px rgb(0 0 0 / 2%);
    overflow: auto;
    ::-webkit-scrollbar {
      width: ${boxSize.xs};
    }
    ::-webkit-scrollbar-thumb {
      height: 30%; /* 스크롤바 길이 */
      background: ${palette.gray_1};
      border-radius: ${borderRadius.md};
    }
    ::-webkit-scrollbar-track {
      background: ${palette.skyblue_1};
    }
  `;
};

const drawerContent = css`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  & > * {
    padding: ${boxSize.lg};
    width: 100%;
  }
  & > picture {
    padding: 0;
  }
  // divider
  & > div {
    justify-items: center;
    align-self: center;
    padding: 0;
    width: 94%;
    border-top: solid 1px rgb(220, 220, 220);
  }
  & > h2 {
    font-size: ${isMobile ? fontSize.md : fontSize.lg};
  }
  & > nav {
    align-self: center;
    ul {
      display: flex;
      justify-content: center;
      gap: ${isMobile ? gapByPercent.sm : gapByPercent.sm};
      li {
        display: flex;
        flex-direction: column;
        gap: ${isMobile ? gap.md : gap.lg};

        button {
          background-color: inherit;
          border: solid 1px ${palette.blue_3};
          border-radius: ${borderRadius.half};
          padding: ${boxSize.md};
          :hover {
            background-color: ${palette.blue_1};
          }
        }
        p {
          text-align: center;
          color: ${palette.blue_3};
          font-size: ${fontSize.sm};
        }
      }
    }
  }
  & > article:first-of-type {
    display: flex;
    flex-direction: column;
    gap: ${gap.xl};
    & > div {
      display: flex;
      gap: ${gapByPercent.sm};
      padding-left: ${boxSize.md};
      h3 {
        font-size: ${fontSize.sm};
      }
    }
  }
  & > article:last-of-type {
    display: flex;
    flex-direction: column;
    gap: ${gap.lg};
  }
`;

const drawerIconStyle = css`
  font-size: ${isMobile ? fontSize.md : fontSize.md};
  svg {
    fill: ${palette.blue_3};
  }
`;

const CampsiteDrawer = () => {
  const pickSpotdata = useRecoilValue(pickSpotQuery);
  const spotInfoState = useRecoilValue(spotInfo);

  useEffect(() => {
    console.log(spotInfoState);
  }, [spotInfoState]);
  return (
    <div css={drawerContainer(pickSpotdata)}>
      <section css={drawerContent}>
        <picture>
          <img
            style={{ width: "100%" }}
            src={`${
              spotInfoState?.firstImageUrl ? spotInfoState.firstImageUrl : "img/spotImg.jpg"
            }`}
            alt="야영장 이미지"
          />
        </picture>
        <h2>{spotInfoState?.facltNm ? spotInfoState.facltNm : "시설 정보 없음"}</h2>
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
              <button aria-label="리뷰 작성하기">
                <EditOutlined css={drawerIconStyle} />
              </button>
              <p>리뷰</p>
            </li>
            <li>
              <button aria-label="캠핑장 공유하기">
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
            <h3>{spotInfoState?.addr1 ? spotInfoState.addr1 : "주소정보 없음"}</h3>
          </div>
          <div>
            <PhoneFilled css={drawerIconStyle} />
            <h3>{spotInfoState?.tel ? spotInfoState.tel : "전화번호 없음"}</h3>
          </div>
          <div>
            <GitlabFilled css={drawerIconStyle} />
            <h3>
              반려동물 출입 :{" "}
              {spotInfoState?.animalCmgCl ? spotInfoState.animalCmgCl : "반려동물 출입정보 없음"}
            </h3>
          </div>
        </article>
        <div></div>
        <article>
          <h2>리뷰</h2>
          <p>아직 작성된 리뷰가 없습니다.</p>
        </article>
      </section>
    </div>
  );
};

export default CampsiteDrawer;
