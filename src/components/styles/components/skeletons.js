/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../styleTheme";

const { boxSize, borderRadius, palette, fontSize, gap, gapByPercent } = theme;

export const drawerSkeleton = css`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  gap: ${gap.sm};
  width: 94%;
  & > * {
    margin-left: ${boxSize.lg};
    margin-top: ${boxSize.lg};
    background-color: ${palette.gray_1};
    border-radius: ${borderRadius.sm};
    width: 100%;
  }
  & > div:first-of-type {
    height: 220px;
  }
  & > h2 {
    height: 60px;
  }
  & > ul {
    background-color: inherit;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: ${gapByPercent.sm};
    li {
      background-color: ${palette.gray_1};
      width: 60px;
      height: 60px;
      border-radius: ${borderRadius.half};
    }
  }
  & > div:last-of-type {
    height: 200px;
    background-color: inherit;
    & ul {
      display: flex;
      flex-direction: column;
      gap: ${gapByPercent.md};
      height: 200px;
      li {
        background-color: ${palette.gray_1};
        div {
          width: 30px;
          height: 50px;
        }
      }
    }
  }
  & > article {
    background-color: inherit;
    display: flex;
    flex-direction: column;
    gap: ${gap.xl};
    h2 {
      width: 100px;
      height: 40px;
      background-color: ${palette.gray_1};
    }
    div {
      height: 150px;
      background-color: ${palette.gray_1};
    }
  }
`;

export const searchResultSkeleton = css`
  height: 20px;
  display: flex;
  align-items: center;
  padding: ${boxSize.lg};
  font-size: ${fontSize.xs};
  em {
    color: ${palette.gray_3};
  }
`;

export const mDrawerSkeleton = css`
  height: 25vh;
  background-color: white;
  border-radius: ${borderRadius.lg};
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > * {
  }
  div:first-of-type {
    margin-top: 2vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: ${gap.xl};
    p {
      background-color: ${palette.gray_2};
      border-radius: ${borderRadius.md};
      width: 20vh;
      height: 4vh;
    }
  }
  div:last-of-type {
    margin-top: ${boxSize.lg};
    background-color: ${palette.gray_2};
    width: 30vw;
    height: 15vh;
    border-radius: ${borderRadius.md};
  }
`;
