import Map from "../components/common/map";
import SearchBar from "../components/common/searchBar";
import Drawer from "../components/common/drawer";
import { DrawerSkeleton } from "../components/common/skeletons";
import { Suspense } from "react";
import MyBtn from "../components/common/myBtn";
import { isBrowser } from "react-device-detect";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { mDrawerQuery } from "../states";
const Home = () => {
  const location = useLocation();
  const resetMdrawer = useResetRecoilState(mDrawerQuery);

  useEffect(() => {
    if (location.pathname === "/") {
      resetMdrawer();
    }
  }, [location]);

  return (
    <>
      <Map />
      <Drawer />
      <Suspense fallback={null}>
        <SearchBar />
      </Suspense>
      {isBrowser && <MyBtn />}
    </>
  );
};

export default Home;
