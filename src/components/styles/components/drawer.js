/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../styleTheme";
import { isMobile } from "react-device-detect";

const { boxSize, borderRadius, palette, fontSize, gap, gapByPercent } = theme;

export const drawerContainer = (state) => {
  return css`
    display: ${state ? "block" : "none"};
    position: fixed;
    bottom: ${isMobile ? "8vh" : "0"};
    left: 0;
    width: ${isMobile ? "100vw" : "420px"};
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

export const drawerContent = (state) => {
  return css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    height: 100vh;
    padding-top: ${Math.abs(state) / 20}px;
    & > * {
      padding: ${boxSize.lg};
      width: 100%;
    }

    & > picture {
      padding: 0;
      img {
        width: 100%;
        height: ${isMobile ? "45vh" : "35vh"};
      }
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
            border: solid 1px ${palette.green_2};
            border-radius: ${borderRadius.half};
            padding: ${boxSize.md};
            cursor: pointer;
            :hover {
              background-color: ${palette.green_0};
            }
          }
          p {
            text-align: center;
            color: ${palette.green_2};
            font-size: ${fontSize.sm};
            font-weight: 700;
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
};

export const drawerIconStyle = css`
  font-size: ${isMobile ? fontSize.md : fontSize.md};
  svg {
    fill: ${palette.green_1};
  }
`;

export const mDrawerContent = (swipe) => {
  return css`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    margin-bottom: ${3 + swipe / 10}vh;
    & > * {
      padding: 0 ${boxSize.md};
      width: 100%;
    }
    & > div:first-of-type {
      padding: 5px;
      margin: ${boxSize.sm} auto;
      width: 70px;
      border-radius: ${borderRadius.lg};
      background-color: ${palette.gray_1};
    }
    & > div:last-of-type {
      display: flex;
      justify-content: space-between;
      padding-top: ${boxSize.sm};

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        h2 {
          font-size: ${fontSize.md};
        }
        h3 {
          font-size: ${fontSize.sm};
          padding-top: ${boxSize.sm};
          color: ${palette.gray_3};
        }
      }
      picture {
        padding: 0;
        img {
          width: 45vw;
          height: 20vh;
          border-radius: ${borderRadius.md};
        }
      }
    }
  `;
};
