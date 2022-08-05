import Map from "../components/common/map";
import SearchBar from "../components/browser/searchBar";
import MSearchBar from "../components/mobile/mSearchBar";
import { BrowserView, MobileView } from "react-device-detect";

const Home = () => {
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
