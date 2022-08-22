/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { EnvironmentOutlined, BookOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { theme } from "../styles/styleTheme";
import { useSetRecoilState } from "recoil";
import { pickSpotQuery } from "../../states";

const { borderRadius, gap, fontSize } = theme;

const mNavBarContainer = css`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 80px;
  background-color: white;
  z-index: 99999;
  box-shadow: 0 -1px 3px rgb(0 0 0 / 20%);
  border-top-left-radius: ${borderRadius.lg};
  border-top-right-radius: ${borderRadius.lg};
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
      gap: ${gap.sm};
    }
  }
`;

const mNavBarIconStyle = css`
  font-size: ${fontSize.lg};
`;

const MNavBar = () => {
  const setPickSpotdata = useSetRecoilState(pickSpotQuery);

  const onClickNavHome = () => {
    setPickSpotdata(null);
  };

  return (
    <div css={mNavBarContainer}>
      <nav css={mNavBarStyle}>
        <ul>
          <Link to="/">
            <li onClick={onClickNavHome}>
              <EnvironmentOutlined css={mNavBarIconStyle} />
              <p>탐색</p>
            </li>
          </Link>
          <Link to="/profile">
            <li>
              <BookOutlined css={mNavBarIconStyle} />
              <p>북마크</p>
            </li>
          </Link>
          <Link to="/profile">
            <li>
              <UserOutlined css={mNavBarIconStyle} />
              <p>내 정보</p>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
export default MNavBar;
