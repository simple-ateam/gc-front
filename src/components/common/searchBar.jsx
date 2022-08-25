/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { inputBasic } from "../styles/elStyles";
import { useEffect, useState } from "react";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import {
  searchBarIconStyle,
  searchBarContainer,
  searchResultContainer,
  searchInputContainer,
  inputStyle,
  resultStyle,
} from "../styles/components/searchBar";
import { useRecoilValue, useRecoilState, useSetRecoilState, useRecoilValueLoadable } from "recoil";
import {
  spotInfoState,
  pickSpotQuery,
  searchQuery,
  searchResultState,
  drawerQuery,
} from "../../states";
import { debounce } from "../../utils/debounce";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [showResultList, setShowResultList] = useState(false);
  const spotInfo = useRecoilValue(spotInfoState);
  const searchResult = useRecoilValueLoadable(searchResultState);
  const setPickSpot = useSetRecoilState(pickSpotQuery);
  const [searchQueryState, setSearchQueryState] = useRecoilState(searchQuery);
  const [drawer, setDrawer] = useRecoilState(drawerQuery);
  const navigate = useNavigate();

  const closeBtnHandler = () => {
    setPickSpot(null);
    setSearchQueryState(null);
    setDrawer(null);
    navigate("/");
  };

  const onChangeHandler = (e) => {
    setSearchQueryState(e.target.value);
  };

  const onFocusHandler = () => {
    setShowResultList(true);
  };

  const onBlurHandler = () => {
    setShowResultList(false);
  };

  useEffect(() => {
    if (spotInfo) {
      setSearchQueryState(spotInfo.facltNm);
    }
  }, [spotInfo]);

  // 검색 결과
  // useEffect(() => {
  //   switch (searchResultState.state) {
  //     case "hasValue":
  //       console.log(searchResultState.contents);
  //       break;
  //     case "hasError":
  //       throw console.log(searchResultState.contents);
  //     case "loading":
  //       break;
  //     default:
  //       break;
  //   }
  // }, [searchResultState]);

  return (
    <div css={searchBarContainer(drawer)}>
      <div css={searchInputContainer}>
        <div css={inputStyle}>
          <input
            css={inputBasic}
            type="text"
            placeholder="캠핑장 검색"
            value={`${searchQueryState ? searchQueryState : ""}`}
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
      <div css={searchResultContainer(showResultList)}>
        <ul css={resultStyle}>
          <li>
            <h3>서울숲 야영장</h3>
            <p>주소주소주소주소주소주소</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SearchBar;
