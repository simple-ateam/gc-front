/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../styleTheme";

const { borderRadius, palette, gap, boxSize, fontSize } = theme;

export const signUpFormContent = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${gap.xl};
  & * {
    font-weight: 700;
  }

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
        border-radius: ${borderRadius.sm};
        margin-top: ${boxSize.md};
        :focus {
          outline: none;
        }
        ::placeholder {
          color: ${palette.gray_4};
        }
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
      strong {
        font-size: ${fontSize.xs};
        color: ${palette.red_3};
        padding-top: ${boxSize.xs};
        padding-left: ${boxSize.sm};
      }
      p {
        font-weight: 500;
        font-size: ${fontSize.xs};
        color: ${palette.gray_3};
        padding-top: ${boxSize.xs};
        padding-left: ${boxSize.sm};
      }
    }
  }
`;
