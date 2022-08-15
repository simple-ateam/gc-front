/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Skeleton } from "antd";
import { drawerContainer } from "../styles/components/drawer";
import { pickSpotQuery } from "../../states";
import { useRecoilValue } from "recoil";
import { theme } from "../styles/styleTheme";

const { boxSize, borderRadius, palette, fontSize, gap, gapByPercent } = theme;

const skeletonStyle = css`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  gap: ${gap.sm};
  width: 94%;
  & > * {
    margin-left: ${boxSize.lg};
    margin-top: ${boxSize.lg};
    background-color: ${palette.gray_1};
    border-radius: ${borderRadius.sm};
    width: 100%;
  }
  & > div:first-of-type {
    height: 220px;
  }
  & > h2 {
    height: 60px;
  }
  & > ul {
    background-color: inherit;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: ${gapByPercent.sm};
    li {
      background-color: ${palette.gray_1};
      width: 60px;
      height: 60px;
      border-radius: ${borderRadius.half};
    }
  }
  & > div:last-of-type {
    height: 200px;
    background-color: inherit;
    & ul {
      display: flex;
      flex-direction: column;
      gap: ${gapByPercent.md};
      height: 200px;
      li {
        background-color: ${palette.gray_1};
        div {
          width: 30px;
          height: 50px;
        }
      }
    }
  }
  & > article {
    background-color: inherit;
    display: flex;
    flex-direction: column;
    gap: ${gap.xl};
    h2 {
      width: 100px;
      height: 40px;
      background-color: ${palette.gray_1};
    }
    div {
      height: 150px;
      background-color: ${palette.gray_1};
    }
  }
`;

const SkeletonPage = () => {
  const pickSpotdata = useRecoilValue(pickSpotQuery);
  return (
    <div css={drawerContainer(pickSpotdata)}>
      <section css={skeletonStyle}>
        <div></div>
        <h2></h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div>
          <ul>
            <li>
              <div></div>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <div></div>
            </li>
          </ul>
        </div>
        <article>
          <h2></h2>
          <div></div>
        </article>
      </section>
    </div>
  );
};
export default SkeletonPage;
