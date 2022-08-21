/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { isMobile } from "react-device-detect";
import { theme } from "../styleTheme";

const { borderRadius, palette, gap, gapByPercent, boxSize } = theme;

export const SignFormContainer = css`
  width: ${isMobile ? "60vw" : "300px"};
  margin: 0 auto;
`;

export const loginFormContent = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & * {
    font-weight: 700;
  }
  gap: ${gap.xl};
  // form
  & > form {
    display: flex;
    flex-direction: column;
    gap: ${gap.lg};
    & > div {
      & > * {
        width: 100%;
      }
      input {
        height: 50px;
        padding: 10px;
        border: 1px solid ${palette.gray_2};
        :focus {
          outline: none;
        }
        ::placeholder {
          color: ${palette.gray_3};
        }
      }
      input:first-of-type {
        border-top-left-radius: ${borderRadius.sm};
        border-top-right-radius: ${borderRadius.sm};
      }
      input:last-of-type {
        border-bottom-left-radius: ${borderRadius.sm};
        border-bottom-right-radius: ${borderRadius.sm};
      }
      button {
        height: 40px;
        border: none;
        border-radius: ${borderRadius.sm};
        transition: 100ms;
        cursor: pointer;
        :hover {
          background-color: ${palette.green_2};
          color: ${palette.white_1};
        }
      }
    }
  }

  & > div {
    width: 100%;
    height: 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > div {
      width: 100%;
      position: absolute;
      top: 20px;
      border-bottom: 1px solid ${palette.gray_2};
      z-index: -1;
    }
    & a {
      cursor: pointer;
      width: 90px;
      position: absolute;
      text-align: center;
      background-color: ${palette.white_1};
    }
  }
`;
