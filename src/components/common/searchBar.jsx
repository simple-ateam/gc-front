/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { elFlex, inputBasic } from "../styles/elStyles";
import { SearchOutlined } from "@ant-design/icons";
import { theme } from "../styles/styleTheme";
import { searchBarIconStyle, searchBarContainer } from "../styles/components";
const { palette, flex, borderRadius, boxSize, fontSize } = theme;

const SearchBar = () => {
  return (
    <div css={searchBarContainer}>
      <div css={elFlex({ fd: null, jc: "center" })}>
        <input css={inputBasic} type="text" placeholder="캠핑장 검색" />
        <SearchOutlined css={searchBarIconStyle} />
      </div>
    </div>
  );
};
export default SearchBar;
