/** @jsxImportSource @emotion/react */
import { Suspense, useState } from "react";
import { searchBarContainer } from "../styles/components/searchBar";
import { useRecoilValue } from "recoil";
import { drawerQuery } from "../../states";
import SearchResult from "./searchResult";
import { SearchResultSkeleton } from "./skeletons";
import SearchInput from "./searchInput";

const SearchBar = () => {
  const [showResultList, setShowResultList] = useState(false);
  const drawer = useRecoilValue(drawerQuery);

  return (
    <div css={searchBarContainer(drawer)}>
      <SearchInput setShowResultList={setShowResultList} />
      <Suspense fallback={<SearchResultSkeleton />}>
        <SearchResult setShowResultList={setShowResultList} showUi={showResultList} />
      </Suspense>
    </div>
  );
};
export default SearchBar;
