import Map from "../components/common/map";
import SearchBar from "../components/common/searchBar";
import CampsiteDrawer from "../components/common/campsiteDrawer";
import ShareModal from "../components/common/share";
import SkeletonPage from "../components/common/skeletonPage";
import { Suspense } from "react";
import MyBtn from "../components/common/myBtn";
import { isBrowser } from "react-device-detect";
const Home = () => {
  return (
    <>
      <Map />
      <Suspense fallback={<SkeletonPage />}>
        <CampsiteDrawer />
        <SearchBar />
        {/* <ShareModal /> */}
      </Suspense>
      {isBrowser && <MyBtn />}
    </>
  );
};

export default Home;
