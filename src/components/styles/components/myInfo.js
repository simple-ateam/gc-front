/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../styleTheme";
import { isMobile } from "react-device-detect";

const { boxSize, palette, fontSize, gap } = theme;

export const myInfoContainer = () => {
  return css`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    width: 100%;
  `;
};

export const bookmarkContent = css`
  position: relative;
  width: 100%;
  height: ${isMobile ? 40 : 100}vh;
  & > * {
    padding: ${boxSize.lg};
    width: 100%;
  }
  & > div:first-of-type {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${palette.gray_1};
    div:first-of-type {
      display: flex;
      gap: ${gap.lg};
      align-items: center;
    }
    div:last-of-type {
      align-self: flex-start;
      font-size: ${fontSize.lg};
    }
  }
  & > div:last-of-type {
    padding: 0;
    position: absolute;
    top: 70px;
    ul > p {
      padding: ${boxSize.md};
    }
    ul li {
      transition: linear 50ms;
      padding: ${boxSize.md};
      border-bottom: 1px ${palette.gray_1} solid;
      & > * {
        padding: ${isMobile ? "" : boxSize.xs};
        cursor: pointer;
      }
      h4 {
        font-size: ${fontSize.md};
      }
      p {
        color: ${palette.gray_3};
        font-size: ${isMobile ? fontSize.sm : fontSize.sm};
      }
      &:hover {
        background-color: ${palette.green_0};
      }
    }
  }
`;

export const myInfoMenuContent = css`
  width: 100%;
  height: ${isMobile ? "92vh" : "100vh"};
  & > * {
    padding: ${boxSize.lg};
    width: 100%;
  }
  & > div {
    display: flex;
    border-bottom: 1px solid ${palette.gray_1};
    justify-content: space-between;
    div:first-of-type {
      display: flex;
      align-items: end;
      gap: ${gap.sm};
      h2 {
        font-size: ${fontSize.xxl};
      }
      span {
        font-size: ${fontSize.md};
      }
    }
    div:last-of-type {
      font-size: ${fontSize.lg};
    }
  }
  & > nav > ul {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: ${gap.xl};
    font-size: ${fontSize.lg};
    font-weight: 500;
    li {
      display: flex;
      align-items: center;
      gap: ${gap.md};
      padding: ${boxSize.xs};
      cursor: pointer;
      &:hover * {
        color: ${palette.green_2};
        fill: ${palette.green_2};
      }
    }
  }
`;
