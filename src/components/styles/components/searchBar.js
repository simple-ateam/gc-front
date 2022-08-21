/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../styleTheme";
import { isMobile, isBrowser } from "react-device-detect";

const { palette, borderRadius, boxSize, fontSize } = theme;

export const searchBarContainer = css`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: ${isMobile ? "96vw" : "400px"};
  top: ${isMobile ? "15px" : "10px"};
  left: ${isMobile ? "2vw" : "10px"};
  background-color: ${palette.white_1};
  z-index: 99999;
  border-radius: ${borderRadius.sm};
`;

export const searchInputContainer = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  box-shadow: 0 2px 3px -2px rgb(0 0 0 / 30%);
`;

export const searchResultContainer = (searchResultState) => css`
  display: ${searchResultState ? "flex" : "none"};
  flex-direction: column;
  width: 100%;
`;

export const inputStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  div {
    display: flex;
    cursor: pointer;
    & > *:first-of-type {
      border-right: 1px solid ${palette.gray_1};
    }
  }
`;

export const resultStyle = css`
  & > * {
    height: 40px;
    padding: ${boxSize.sm};
  }
  & > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    h3 {
      font-size: ${fontSize.sm};
    }
    p {
      color: ${palette.gray_3};
      font-size: ${fontSize.xs};
    }
    &:hover {
      background-color: ${palette.gray_0};
    }
  }
`;

export const searchBarIconStyle = css`
  font-size: ${fontSize.lg};
  color: ${palette.gray_2};
  padding: ${boxSize.sm};
`;
