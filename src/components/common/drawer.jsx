/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { drawerQuery, pickSpotQuery, mDrawerQuery, drawerScrollQuery } from "../../states";
import { drawerContainer } from "../styles/components/drawer";
import MyInfo from "./myInfo";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ResSpotInfo from "./resSpotInfo";
import { useRef } from "react";
import { isMobile } from "react-device-detect";

const Drawer = () => {
  const location = useLocation();
  const divRef = useRef();
  const [drawer, setDrawer] = useRecoilState(drawerQuery);
  const pickSpot = useRecoilValue(pickSpotQuery);
  const setDrawerScroll = useSetRecoilState(drawerScrollQuery);

  useEffect(() => {
    // console.log("pickSpot", pickSpot);
    if (location.pathname === "/maps") {
      setDrawer("pickSpot");
    }
    if (location.pathname === "/profile") {
      setDrawer("myInfo");
    }
    if (location.pathname === "/") {
      setDrawer(null);
    }
  }, [location]);

  const DrawerContent = () => {
    switch (drawer) {
      case "pickSpot":
        return <ResSpotInfo />;
      case "myInfo":
        return <MyInfo />;
      default:
        return null;
    }
  };

  const onScrollHandler = () => {
    if (!isMobile) return setDrawerScroll(false);
    if (divRef.current.scrollTop === "0") {
      return setDrawerScroll(true);
    } else return setDrawerScroll(false);
  };

  return (
    <>
      <div ref={divRef} onScroll={onScrollHandler} css={drawerContainer(drawer)}>
        <DrawerContent />
      </div>
    </>
  );
};

export default Drawer;
