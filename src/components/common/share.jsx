/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CloseOutlined } from "@ant-design/icons";
import {
  ShareModalBackground,
  ShareModalContainer,
  ShareModalContent,
} from "../styles/components/share";

const ShareModal = () => {
  return (
    <>
      <div css={ShareModalBackground}></div>
      <div css={ShareModalContainer}>
        <div css={ShareModalContent}>
          <div>
            <h3>공유</h3>
            <CloseOutlined />
          </div>
          <div>
            <img src="/img/spotImg.jpg" alt="캠핑장 이미지" />
            <div>
              <h3>캠핑장 이름ddddddddddddddd</h3>
              <p>주dddddddddddd소</p>
            </div>
          </div>
          <div>
            <input type="text" />
            <button>링크 복사</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShareModal;
