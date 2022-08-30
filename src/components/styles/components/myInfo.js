/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../styleTheme";
import { isMobile } from "react-device-detect";

const { boxSize, borderRadius, palette, fontSize, gap, gapByPercent } = theme;

export const myInfoContent = css`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  height: ${isMobile ? "92vh" : "100vh"};
  width: 100%;
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
