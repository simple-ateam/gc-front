/** @jsxImportSource @emotion/react */
import { inputBasic } from "../styles/elStyles";
import { useEffect, useState, useRef } from "react";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import {
  searchBarIconStyle,
  searchInputContainer,
  inputStyle,
} from "../styles/components/searchBar";
import { useRecoilValue, useRecoilState } from "recoil";
import { spotInfoState, searchQuery } from "../../states";
import { useNavigate } from "react-router-dom";

const SearchInput = ({ setShowResultList }) => {
  const timerRef = useRef(null);
  const spotInfo = useRecoilValue(spotInfoState);
  const [searchQueryState, setSearchQueryState] = useRecoilState(searchQuery);
  const [inputText, setInputText] = useState(null);
  const navigate = useNavigate();
  const closeBtnHandler = () => {
    setInputText(null);
    navigate("/");
  };

  const onChangeHandler = (e) => {
    setInputText(e.target.value);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      console.log("실행");
      setSearchQueryState(e.target.value);
    }, 500);
  };

  const onFocusHandler = () => {
    setShowResultList(true);
  };

  const onBlurHandler = () => {
    setShowResultList(false);
  };

  useEffect(() => {
    if (spotInfo) {
      setInputText(spotInfo.facltNm);
    }
  }, [spotInfo]);

  return (
    <div css={searchInputContainer}>
      <div css={inputStyle}>
        <input
          css={inputBasic}
          spellCheck="false"
          type="text"
          placeholder="캠핑장 검색"
          value={inputText ? inputText : ""}
          onChange={onChangeHandler}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        />
        <div>
          <SearchOutlined css={searchBarIconStyle} />
          {spotInfo && <CloseOutlined css={searchBarIconStyle} onClick={closeBtnHandler} />}
        </div>
      </div>
    </div>
  );
};
export default SearchInput;
