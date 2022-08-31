/** @jsxImportSource @emotion/react */
import { myBtnContainer, myBtnContent } from "../styles/components/myBtn";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const MyBtn = () => {
  const navigate = useNavigate();

  const MyBtnOnClickHandler = () => {
    if (localStorage.getItem("token")) {
      navigate({ pathname: "/profile" });
    } else {
      navigate({ pathname: "/login" });
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
