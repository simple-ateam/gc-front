/** @jsxImportSource @emotion/react */
import { myBtnContainer, myBtnContent } from "../styles/components/myBtn";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { meState } from "../../states";

const MyBtn = () => {
  const me = useRecoilValue(meState);
  const navigate = useNavigate();

  const MyBtnOnClickHandler = () => {
    if (me) {
      navigate({ pathname: `/profile/${me}` });
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
