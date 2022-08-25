/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useSetRecoilState } from "recoil";
import { myInfoState } from "../../states";
import { BookOutlined, EditOutlined } from "@ant-design/icons";
import { myInfoContent } from "../styles/components/myInfo";
const MyInfoMenu = () => {
  const setMyInfo = useSetRecoilState(myInfoState);

  const onClickNavHandler = (e) => {
    if (e.target.textContent === "북마크") {
      setMyInfo("bookmark");
    } else if (e.target.textContent === "리뷰") {
      setMyInfo("review");
    }
    return;
  };

  return (
    <section css={myInfoContent}>
      <div>
        <h2>이준서</h2>
        <span>님</span>
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
        </ul>
      </nav>
    </section>
  );
};

export default MyInfoMenu;
