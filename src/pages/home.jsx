import Map from "../components/common/map";
import SearchBar from "../components/common/searchBar";
import Drawer from "../components/common/drawer";
import SkeletonPage from "../components/common/skeletonPage";
import { Suspense } from "react";
import MyBtn from "../components/common/myBtn";
import { isBrowser } from "react-device-detect";
const Home = () => {
  return (
    <>
      <Map />
      <Suspense fallback={<SkeletonPage />}>
        <Drawer />
        {/* <SearchBar /> */}
      </Suspense>
      {isBrowser && <MyBtn />}
    </>
  );
};

export default Home;
