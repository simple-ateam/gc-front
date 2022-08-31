import Map from "../components/common/map";
import SearchBar from "../components/common/searchBar";
import Drawer from "../components/common/drawer";
import { Suspense } from "react";
import MyBtn from "../components/common/myBtn";
import { isBrowser } from "react-device-detect";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import {
  mDrawerQuery,
  drawerQuery,
  myInfoState,
  meState,
  pickSpotQuery,
  searchQuery,
} from "../states";

const Home = () => {
  const location = useLocation();
  const resetMdrawer = useResetRecoilState(mDrawerQuery);
  const setDrawer = useSetRecoilState(drawerQuery);
  const setMyInfo = useSetRecoilState(myInfoState);
  const setPickSpot = useSetRecoilState(pickSpotQuery);
  const setSearchQuery = useSetRecoilState(searchQuery);
  const resetMe = useResetRecoilState(meState);

  useEffect(() => {
    resetMdrawer();
    resetMe();
    switch (location.pathname) {
      case "/maps":
        setDrawer("pickSpot");
        break;
      case "/profile":
        setDrawer("myInfo");
        break;
      case "/":
        setDrawer(null);
        setMyInfo(null);
        setPickSpot(null);
        setSearchQuery(null);
        break;
      default:
        return;
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
