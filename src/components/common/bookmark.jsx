/** @jsxImportSource @emotion/react */
import { ArrowLeftOutlined, CloseOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { bookmarkContent } from "../styles/components/myInfo";

const Bookmark = () => {
  const navigate = useNavigate();
  const leftBtnHandler = () => {
    navigate(-1);
  };
  const closeBtnHandler = () => {
    navigate("/");
  };
  return (
    <section css={bookmarkContent}>
      <div>
        <div>
          <ArrowLeftOutlined onClick={leftBtnHandler} />
          <h2>북마크</h2>
        </div>
        <div>
          <CloseOutlined onClick={closeBtnHandler} />
        </div>
      </div>
      <div></div>
    </section>
  );
};
export default Bookmark;
