/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { FlexDiv, Input } from "./elements/elements";
import { SearchOutlined } from "@ant-design/icons";

const searchBarStyle = css`
  position: fixed;
  width: 400px;
  height: 50px;
  top: 40px;
  left: 20px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 -1px 0px rgb(0 0 0 / 2%);
  border-radius: 5px;
  background-color: white;
`;

const SearchBar = () => {
  return (
    <div css={searchBarStyle}>
      <FlexDiv st={{ jc: "" }}>
        <Input type="text" placeholder="캠핑장 검색" />
        <SearchOutlined style={{ fontSize: "30px" }} />
      </FlexDiv>
    </div>
  );
};
export default SearchBar;
