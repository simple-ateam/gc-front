/** @jsxImportSource @emotion/react */
import { inputBasic } from "../styles/elStyles";
import { useEffect, useState, useRef } from "react";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import {
  searchBarIconStyle,
  searchInputContainer,
  inputStyle,
} from "../styles/components/searchBar";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { spotInfoState, searchQuery } from "../../states";
import { useNavigate } from "react-router-dom";

const SearchInput = ({ setShowResultList }) => {
  const inputRef = useRef();
  const timerRef = useRef(null);
  const spotInfo = useRecoilValueLoadable(spotInfoState);
  const setSearchQueryState = useSetRecoilState(searchQuery);
  const [inputText, setInputText] = useState(null);
  const navigate = useNavigate();
  const closeBtnHandler = () => {
    setInputText(null);
    navigate("/");
  };
  const onChangeHandler = (e) => {
    setShowResultList(true);
    setInputText(e.target.value);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
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
    switch (spotInfo.state) {
      case "hasValue":
        if (spotInfo.contents) {
          setInputText(spotInfo.contents.facltNm);
        }
        break;
      case "hasError":
        throw console.log(spotInfo.contents.message);
      case "loading":
        break;
      default:
        break;
    }
  }, [spotInfo]);

  return (
    <div css={searchInputContainer}>
      <div css={inputStyle}>
        <input
          ref={inputRef}
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
          <SearchOutlined
            css={searchBarIconStyle}
            onClick={() => {
              inputRef.current.focus();
            }}
          />

          {spotInfo && <CloseOutlined css={searchBarIconStyle} onClick={closeBtnHandler} />}
        </div>
      </div>
    </div>
  );
};
export default SearchInput;
