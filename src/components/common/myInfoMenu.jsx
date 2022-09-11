/** @jsxImportSource @emotion/react */
import { useRecoilValue } from "recoil";
import { meState } from "../../states";
import { BookOutlined, CloseOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { myInfoMenuContent } from "../styles/components/myInfo";
import { useNavigate } from "react-router-dom";

const MyInfoMenu = () => {
  const navigate = useNavigate();
  const me = useRecoilValue(meState);
  const onClickNavHandler = (e) => {
    if (e.target.textContent === "북마크") {
      navigate({ search: `bookmark` });
    } else if (e.target.textContent === "로그아웃") {
      localStorage.removeItem("token");
      navigate("/");
    }
    return;
  };

  const onClickCloseBtnHandler = () => {
    navigate("/");
  };

  return (
    <section css={myInfoMenuContent}>
      <div>
        <div>
          <h2>{me && me}</h2>
          <span>님</span>
        </div>
        <div onClick={onClickCloseBtnHandler}>
          <CloseOutlined />
        </div>
      </div>
      <nav>
        <ul onClick={onClickNavHandler}>
          <li>
            <BookOutlined />
            <p>북마크</p>
          </li>
          <li>
            <UserDeleteOutlined />
            <p>로그아웃</p>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default MyInfoMenu;
