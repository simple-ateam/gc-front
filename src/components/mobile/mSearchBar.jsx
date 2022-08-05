/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { elFlex, inputBasic } from "../elements/elStyles";
import { SearchOutlined } from "@ant-design/icons";
import { theme } from "../../utils/styleTheme";

const { palette, flex } = theme;

const searchBarContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 96vw;
  left: 2vw;
  right: 2vw;
  height: 50px;
  top: 15px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 -1px 0px rgb(0 0 0 / 2%);
  border-radius: 8px;
  z-index: 99999;
  background-color: ${palette.white_1};
`;

const searchBarIconStyle = css`
  font-size: 20px;
  color: ${palette.gray_1};
  padding: 10px;
`;

const MSearchBar = () => {
  return (
    <div css={searchBarContainer}>
      <div css={elFlex({ fd: null, jc: flex.center })}>
        <input css={inputBasic} type="text" placeholder="캠핑장 검색" />
        <SearchOutlined css={searchBarIconStyle} />
      </div>
    </div>
  );
};
export default MSearchBar;
