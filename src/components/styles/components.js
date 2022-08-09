/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "./styleTheme";
import { isMobile, isBrowser } from "react-device-detect";

const { palette, borderRadius, boxSize, fontSize } = theme;

export const searchBarIconStyle = css`
  font-size: ${fontSize.lg};
  color: ${palette.gray_2};
  padding: ${boxSize.sm};
`;

export const searchBarContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: ${isMobile ? "96vw" : "400px"};
  top: ${isMobile ? "15px" : "10px"};
  left: ${isMobile ? "2vw" : "10px"};
  height: 50px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 -1px 0px rgb(0 0 0 / 2%);
  border-radius: ${borderRadius.sm};
  background-color: ${palette.white_1};
  z-index: 99999;
`;
