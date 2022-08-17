/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { myBtnContainer, myBtnContent } from "../styles/components/myBtn";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const MyBtn = () => {
  const nagivate = useNavigate();
  const MyBtnOnClickHandler = () => {
    nagivate("/login");
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
