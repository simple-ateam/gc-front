/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CloseOutlined } from "@ant-design/icons";
import {
  ShareModalBackground,
  ShareModalContainer,
  ShareModalContent,
  ShowShareModal,
} from "../styles/components/share";
import { useRecoilState, useRecoilValue } from "recoil";
import { shareState, spotInfoState } from "../../states";
import { copyText } from "../../utils/clipboard";
import { useRef } from "react";

const ShareModal = () => {
  const shareLinkRef = useRef(null);
  const [share, setShare] = useRecoilState(shareState);
  const spotInfo = useRecoilValue(spotInfoState);

  const CancelBtnClickHandler = () => {
    setShare(false);
  };

  const copyBtnClickHandler = () => {
    copyText(shareLinkRef.current.value);
    setShare(false);
    alert("클립보드에 복사되었습니다!");
  };

  return (
    <div css={ShowShareModal(share)}>
      <div onClick={CancelBtnClickHandler} css={ShareModalBackground}></div>
      <div css={ShareModalContainer}>
        <div css={ShareModalContent}>
          <div>
            <h3>공유</h3>
            <CloseOutlined onClick={CancelBtnClickHandler} />
          </div>
          <div>
            <img
              src={`${spotInfo?.firstImageUrl ? spotInfo.firstImageUrl : "/img/spotImg.jpg"}`}
              alt="캠핑장 이미지"
            />
            <div>
              <h3>{spotInfo && spotInfo.facltNm}</h3>
              <p>{spotInfo && spotInfo.addr1}</p>
            </div>
          </div>
          <div>
            <input ref={shareLinkRef} value={window.location.href} type="text" readOnly />
            <button onClick={copyBtnClickHandler}>링크 복사</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShareModal;
