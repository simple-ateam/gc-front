/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { theme } from "../styleTheme";

const { borderRadius, palette, gap } = theme;

export const myBtnContainer = css`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 100px;
  height: 50px;
  border-radius: ${borderRadius.sm};
  background-color: ${palette.white_1};
  box-shadow: 0 2px 3px -2px rgb(0 0 0 / 30%);
  transition: 100ms linear;
  cursor: pointer;
`;

export const myBtnContent = css`
  height: 100%;
  width: 100%;
  background-color: inherit;
  border-radius: ${borderRadius.sm};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: ${gap.md};
  font-weight: 700;
  transition: 100ms linear;
  p {
    color: ${palette.green_2};
  }
  svg {
    fill: ${palette.green_2};
  }
  &:hover {
    background-color: ${palette.green_1};
    p {
      color: ${palette.white_1};
    }
    svg {
      fill: ${palette.white_1};
    }
  }
`;
