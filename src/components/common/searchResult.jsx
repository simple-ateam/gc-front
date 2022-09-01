/** @jsxImportSource @emotion/react */
import { useNavigate, createSearchParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { searchResultState } from "../../states";
import { searchResultContainer, resultStyle } from "../styles/components/searchBar";
import { textLimitHandler } from "../../utils/textLimit";
const SearchResult = ({ showUi, inputRef }) => {
  const searchResult = useRecoilValue(searchResultState);
  const navigate = useNavigate();

  const onMouseDownHandler = (e) => {
    e.preventDefault();
  };

  const onClickHandler = (e) => {
    navigate({
      pathname: "/maps",
      search: `?${createSearchParams({
        id: e.contentId,
        x: e.mapX,
        y: e.mapY,
      })}`,
    });
  };

  return (
    <div css={searchResultContainer(showUi)}>
      <ul css={resultStyle}>
        {searchResult &&
          searchResult.map((e) => {
            return (
              <li
                onMouseDown={onMouseDownHandler}
                onClick={() => {
                  onClickHandler(e);
                }}
                key={e.contentId}>
                <h3>{e.facltNm}</h3>
                <p>{textLimitHandler(e.addr1, 18)}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default SearchResult;
