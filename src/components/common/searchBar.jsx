/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { useRef } from "react";
import { inputBasic } from "../styles/elStyles";
import { Suspense, useEffect, useState } from "react";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import {
  searchBarIconStyle,
  searchBarContainer,
  searchInputContainer,
  inputStyle,
} from "../styles/components/searchBar";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { spotInfoState, pickSpotQuery, searchQuery, drawerQuery } from "../../states";
import { debounce } from "../../utils/debounce";
import { useNavigate } from "react-router-dom";
import SearchResult from "./searchResult";
import { SearchResultSkeleton } from "./skeletons";

const SearchBar = () => {
  const searchInputRef = useRef(null);
  const [showResultList, setShowResultList] = useState(false);
  const spotInfo = useRecoilValue(spotInfoState);
  const setPickSpot = useSetRecoilState(pickSpotQuery);
  const [searchQueryState, setSearchQueryState] = useRecoilState(searchQuery);
  const [drawer, setDrawer] = useRecoilState(drawerQuery);
  const navigate = useNavigate();
  let timer;

  const closeBtnHandler = () => {
    setPickSpot(null);
    setSearchQueryState(null);
    setDrawer(null);
    navigate("/");
  };

  const onChangeHandler = (e) => {
    // if (timer) {
    //   clearTimeout(timer);
    // }
    // timer = setTimeout(() => {
    setSearchQueryState(e.target.value);
    // }, 200);
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

  return (
    <div css={searchBarContainer(drawer)}>
      <div css={searchInputContainer}>
        <div css={inputStyle}>
          <input
            ref={searchInputRef}
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
      <Suspense fallback={<SearchResultSkeleton />}>
        <SearchResult inputRef={searchInputRef.current} showUi={showResultList} />
      </Suspense>
    </div>
  );
};
export default SearchBar;
