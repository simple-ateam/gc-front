/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { EnvironmentOutlined, BookOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { theme } from "../styles/styleTheme";

const { borderRadius, gap, fontSize } = theme;

const mNavBarContainer = css`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 9vh;
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
      gap: ${gap.md};
      p {
        font-size: ${fontSize.sm};
      }
    }
  }
`;

const mNavBarIconStyle = css`
  font-size: 1rem;
`;

const MNavBar = () => {
  const navigate = useNavigate();

  const onClickNavHome = () => {
    navigate("/");
  };

  const onClickNavMyInfo = () => {
    navigate("/profile");
  };

  return (
    <div css={mNavBarContainer}>
      <nav css={mNavBarStyle}>
        <ul>
          <li onTouchEnd={onClickNavHome}>
            <EnvironmentOutlined css={mNavBarIconStyle} />
            <p>탐색</p>
          </li>
          <li onTouchEnd={onClickNavMyInfo}>
            <BookOutlined css={mNavBarIconStyle} />
            <p>북마크</p>
          </li>
          <li onTouchEnd={onClickNavMyInfo}>
            <UserOutlined css={mNavBarIconStyle} />
            <p>내 정보</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MNavBar;
