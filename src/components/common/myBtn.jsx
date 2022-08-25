/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { myBtnContainer, myBtnContent } from "../styles/components/myBtn";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilState } from "recoil";
import { drawerState } from "../../states";

const MyBtn = () => {
  const [drawer, setDrawer] = useRecoilState(drawerState);
  const navigate = useNavigate();

  const MyBtnOnClickHandler = () => {
    if (localStorage.getItem("token")) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <div onClick={MyBtnOnClickHandler} css={myBtnContainer}>
      <div css={myBtnContent}>
        <UserOutlined />
        <p>내 정보</p>
      </div>
    </div>
  );
};

export default MyBtn;
