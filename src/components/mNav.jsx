/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

const mNavStyle = css`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 8vh;
  background-color: white;
  z-index: 99999;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const MNav = () => {
  return (
    <div css={mNavStyle}>
      <div>hi</div>
    </div>
  );
};
export default MNav;
