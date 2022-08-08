import Map from "../components/common/map";
import SearchBar from "../components/browser/searchBar";
import MSearchBar from "../components/mobile/mSearchBar";
import { BrowserView, MobileView } from "react-device-detect";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {}, []);
  return (
    <>
      <BrowserView>
        <Map />
        <SearchBar />
      </BrowserView>
      <MobileView>
        <Map />
        <MSearchBar />
      </MobileView>
    </>
  );
};

export default Home;
