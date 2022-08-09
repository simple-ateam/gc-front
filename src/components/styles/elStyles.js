/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "./styleTheme";

export const inputBasic = ({ w = "100%", h = "100%" }) => {
  return css`
    border: none;
    background-color: transparent;
    width: ${w};
    height: ${h};
    font-size: 16px;
    padding-left: ${theme.boxSize.sm};
    :focus {
      outline: none;
    }
    ::placeholder {
      font-size: ${theme.fontSize.sm};
    }
  `;
};

export const elFlex = ({ fd = "row", jc = "center", gap = "none" }) => {
  return css`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    flex-direction: ${fd};
    justify-content: ${jc};
    gap: ${gap};
  `;
};
