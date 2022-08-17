/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { inputBasic } from "../styles/elStyles";
import { useEffect } from "react";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import {
  searchBarIconStyle,
  searchBarContainer,
  searchResultContainer,
  searchInputContainer,
  inputStyle,
  resultStyle,
} from "../styles/components/searchBar";
import { useRecoilValue, useRecoilState } from "recoil";
import { spotInfoState, pickSpotQuery, searchQuery, searchResultState } from "../../states";

const SearchBar = () => {
  const spotInfo = useRecoilValue(spotInfoState);
  const searchResult = useRecoilValue(searchResultState);
  const [pickSpotState, setPickSpotState] = useRecoilState(pickSpotQuery);
  const [searchQueryState, setSearchQueryState] = useRecoilState(searchQuery);
  const closeBtnHandler = () => {
    setPickSpotState(null);
  };

  const onChangeHandler = (e) => {
    setSearchQueryState(e.target.value);
  };

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);
  return (
    <div css={searchBarContainer}>
      <div css={searchInputContainer}>
        <div css={inputStyle}>
          <input
            css={inputBasic}
            type="text"
            placeholder="캠핑장 검색"
            defaultValue={`${spotInfo?.facltNm ? spotInfo.facltNm : ""}`}
            onChange={onChangeHandler}
          />
          <div>
            <SearchOutlined css={searchBarIconStyle} />
            {spotInfo && <CloseOutlined css={searchBarIconStyle} onClick={closeBtnHandler} />}
          </div>
        </div>
      </div>
      <div css={searchResultContainer(pickSpotState, searchQueryState)}>
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
