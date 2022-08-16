import Map from "../components/common/map";
import SearchBar from "../components/common/searchBar";
import CampsiteDrawer from "../components/common/campsiteDrawer";
import ShareModal from "../components/common/share";
import SkeletonPage from "../components/common/skeletonPage";
import { Suspense } from "react";
const Home = () => {
  return (
    <>
      <Map />
      <Suspense fallback={<SkeletonPage />}>
        <CampsiteDrawer />
        <SearchBar />
      </Suspense>
      {/* <ShareModal /> */}
    </>
  );
};

export default Home;
