/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../styleTheme";
import { isMobile } from "react-device-detect";

const { boxSize, borderRadius, palette, fontSize, gap, gapByPercent } = theme;

export const drawerContainer = (state) => {
  return css`
    display: ${state ? "flex" : "none"};
    position: fixed;
    top: 0;
    left: 0;
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

export const drawerContent = css`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  margin-bottom: ${isMobile ? "1000px" : 0};
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

export const drawerIconStyle = css`
  font-size: ${isMobile ? fontSize.md : fontSize.md};
  svg {
    fill: ${palette.blue_3};
  }
`;