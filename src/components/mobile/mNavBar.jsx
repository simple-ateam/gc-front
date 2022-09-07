/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { EnvironmentOutlined, BookOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { theme } from "../styles/styleTheme";
import ePropagation from "../../utils/ePropagation";
import { useRecoilValue } from "recoil";
import { meState } from "../../states";
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
  const me = useRecoilValue(meState);
  const navigate = useNavigate();

  const onTouchNav = (evt) => {
    const target = ePropagation(evt, "LI");
    if (!target) return;
    switch (target.className) {
      case "home":
        return navigate("/");
      case "bookmark":
        return navigate({ pathname: `/profile/${me}`, search: `bookmark` });
      case "myInfo":
        return navigate({ pathname: `/profile/${me}` });
      default:
        return;
    }
  };

  return (
    <div css={mNavBarContainer}>
      <nav onTouchEnd={onTouchNav} css={mNavBarStyle}>
        <ul>
          <li className="home">
            <EnvironmentOutlined css={mNavBarIconStyle} />
            <p>탐색</p>
          </li>
          <li className="bookmark">
            <BookOutlined css={mNavBarIconStyle} />
            <p>북마크</p>
          </li>
          <li className="myInfo">
            <UserOutlined css={mNavBarIconStyle} />
            <p>내 정보</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MNavBar;
