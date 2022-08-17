/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { isMobile } from "react-device-detect";
export const logoContainer = css`
  width: ${isMobile ? "80vw" : "400px"};
  margin: 0 auto;
`;
