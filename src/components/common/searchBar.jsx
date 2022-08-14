/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { elFlex, inputBasic } from "../styles/elStyles";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { theme } from "../styles/styleTheme";
import { searchBarIconStyle, searchBarContainer } from "../styles/components/searchBar";
import { isMobile } from "react-device-detect";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { spotInfoState, pickSpotQuery } from "../../states";
const { palette, flex, borderRadius, boxSize, fontSize } = theme;

const contentStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  div {
    display: flex;
    cursor: pointer;
    & > *:first-of-type {
      border-right: 1px solid ${palette.gray_1};
    }
  }
`;

const SearchBar = () => {
  const spotInfo = useRecoilValue(spotInfoState);
  const setPickSpotQuery = useSetRecoilState(pickSpotQuery);

  const closeBtnHandler = () => {
    setPickSpotQuery(null);
  };

  return (
    <div css={searchBarContainer}>
      <div css={contentStyle}>
        <input
          css={inputBasic}
          type="text"
          placeholder="캠핑장 검색"
          defaultValue={`${spotInfo?.facltNm ? spotInfo.facltNm : ""}`}
        />
        <div>
          <SearchOutlined css={searchBarIconStyle} />
          {spotInfo && <CloseOutlined css={searchBarIconStyle} onClick={closeBtnHandler} />}
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
