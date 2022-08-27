/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRecoilState } from "recoil";
import { pickSpotQuery, drawerState, drawerQuery } from "../../states";
import { drawerContainer } from "../styles/components/drawer";
import SpotInfo from "./spotInfo";
import MyInfo from "./myInfo";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import MSpotInfo from "../mobile/mSpotInfo";

const Drawer = () => {
  const params = useParams();
  const location = useLocation();
  const [drawer, setDrawer] = useRecoilState(drawerQuery);

  useEffect(() => {
    if (location.pathname === "/maps") {
      setDrawer("pickSpot");
    }
    if (location.pathname === "/profile") {
      setDrawer("myInfo");
    }
    if (location.pathname === "/") {
      setDrawer(null);
    }
  }, [location.pathname]);

  const touchStartHandler = (e) => {
    // console.log(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
  };
  const touchEndHandler = (e) => {
    // console.log(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
  };

  const touchMoveHandler = (e) => {
    // console.log(e.changedTouches[0]);
  };

  const showUI = () => {
    switch (drawer) {
      case "pickSpot":
        // return <SpotInfo />;
        return <MSpotInfo />;
      case "myInfo":
        return <MyInfo />;
      default:
        return null;
    }
  };

  return (
    <>
      <div
        onTouchStart={touchStartHandler}
        onTouchEnd={touchEndHandler}
        onTouchMove={touchMoveHandler}
        css={drawerContainer(drawer)}>
        {showUI()}
      </div>
    </>
  );
};

export default Drawer;
