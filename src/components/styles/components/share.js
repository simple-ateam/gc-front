/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../styleTheme";
import { isMobile } from "react-device-detect";
const { palette, boxSize, fontSize, gap } = theme;

export const ShareModalBackground = css`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${palette.gray_3};
  opacity: 0.4;
  z-index: 100000;
`;

export const ShareModalContainer = css`
  position: fixed;
  top: 40%;
  width: 100vw;
  background-color: inherit;
  z-index: 100001;
`;

export const ShareModalContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: ${palette.white_1};
  width: ${isMobile ? "94%" : "500px"};
  & > * {
    padding: ${boxSize.lg};
    width: 100%;
  }
  & > div:first-of-type {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${palette.gray_1};
  }
  & > div:nth-of-type(2) {
    width: 100;
    display: flex;
    justify-content: space-between;
    img {
      width: 100px;
      height: 100px;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      h3 {
        font-size: ${isMobile ? fontSize.sm : fontSize.md};
        margin-bottom: ${boxSize.xs};
      }
      p {
        font-size: ${isMobile ? fontSize.xs : fontSize.sm};
        color: ${palette.gray_3};
      }
    }
  }
  & > div:last-of-type {
    display: flex;
    justify-content: center;
    gap: ${gap.xl};
    input {
      width: 70%;
      border: none;
      border-bottom: 1px solid ${palette.gray_1};
      :focus {
        outline: none;
      }
    }
    button {
      padding: 0 ${boxSize.sm};
      background-color: inherit;
      color: ${palette.blue_3};
      font-weight: 700;
      text-align: center;
      border: none;
      cursor: pointer;
    }
  }
`;
