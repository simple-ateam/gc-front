/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { EnvironmentOutlined, BookOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const mNavBarContainer = css`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 80px;
  background-color: white;
  z-index: 99999;
  box-shadow: 0 -1px 3px rgb(0 0 0 / 20%);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const mNavBarStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    li {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
`;

const mNavBarIconStyle = css`
  font-size: 20px;
`;

const MNavBar = () => {
  return (
    <div css={mNavBarContainer}>
      <nav css={mNavBarStyle}>
        <ul>
          <li>
            <EnvironmentOutlined css={mNavBarIconStyle} />
            <Link to="/">탐색</Link>
          </li>
          <li>
            <BookOutlined css={mNavBarIconStyle} />
            <a href="#">북마크</a>
          </li>
          <li>
            <UserOutlined css={mNavBarIconStyle} />
            <a href="#">내 페이지</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MNavBar;
