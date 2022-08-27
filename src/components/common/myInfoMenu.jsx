/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useSetRecoilState } from "recoil";
import { myInfoState } from "../../states";
import { BookOutlined, CloseOutlined, EditOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { myInfoContent } from "../styles/components/myInfo";
import { useNavigate } from "react-router-dom";
const MyInfoMenu = () => {
  const setMyInfo = useSetRecoilState(myInfoState);
  const navigate = useNavigate();

  const onClickNavHandler = (e) => {
    if (e.target.textContent === "북마크") {
      setMyInfo("bookmark");
    } else if (e.target.textContent === "리뷰") {
      setMyInfo("review");
    } else if (e.target.textContent === "로그아웃") {
      localStorage.removeItem("token");
      navigate("/");
      setMyInfo(null);
    }
    return;
  };

  const onClickClostBtnHandler = () => {
    navigate("/");
    setMyInfo(null);
  };

  return (
    <section css={myInfoContent}>
      <div>
        <div>
          <h2>이준서</h2>
          <span>님</span>
        </div>
        <div onClick={onClickClostBtnHandler}>
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
            <EditOutlined />
            <p>리뷰</p>
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
