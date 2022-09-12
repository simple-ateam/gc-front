import Map from "../components/common/map";
import SearchBar from "../components/common/searchBar";
import Drawer from "../components/common/drawer";
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
  mNavState,
} from "../states";

const Home = () => {
  const location = useLocation();
  const resetMdrawer = useResetRecoilState(mDrawerQuery);
  const setDrawer = useSetRecoilState(drawerQuery);
  const setMyInfo = useSetRecoilState(myInfoState);
  const setPickSpot = useSetRecoilState(pickSpotQuery);
  const setSearchQuery = useSetRecoilState(searchQuery);
  const setMNav = useSetRecoilState(mNavState);
  const resetMe = useResetRecoilState(meState);

  useEffect(() => {
    resetMdrawer();
    resetMe();
    switch (location.pathname.split("/")[1]) {
      case "maps":
        setMNav("home");
        setDrawer("pickSpot");
        break;
      case "profile":
        setDrawer("myInfo");
        break;
      case "":
        setDrawer(null);
        setMyInfo(null);
        setPickSpot(null);
        setSearchQuery(null);
        setMNav("home");
        break;
      default:
        return;
    }
  }, [location]);

  return (
    <>
      <Map />
      <Drawer />
      <SearchBar />
      {isBrowser && <MyBtn />}
    </>
  );
};

export default Home;
