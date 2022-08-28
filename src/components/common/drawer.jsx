/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { pickSpotQuery, drawerState, drawerQuery, mDrawerQuery, mDrawerState } from "../../states";
import { drawerContainer } from "../styles/components/drawer";
import SpotInfo from "./spotInfo";
import MyInfo from "./myInfo";
import { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MSpotInfo from "../mobile/mSpotInfo";
import { DrawerSkeleton, MDrawerSkeleton } from "./skeletons";
import { isMobile } from "react-device-detect";

const Drawer = () => {
  const location = useLocation();
  const [drawer, setDrawer] = useRecoilState(drawerQuery);
  const mDrawer = useRecoilValue(mDrawerState);

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

  // if (mDrawer === "expand") {
  //   return (
  //     <Suspense fallback={<DrawerSkeleton />}>
  //       <SpotInfo />
  //     </Suspense>
  //   );
  // } else if (mDrawer === "collapse") {
  //   return (
  //     <Suspense fallback={<MDrawerSkeleton />}>
  //       <MSpotInfo />
  //     </Suspense>
  //   );
  // }

  const showUI = () => {
    switch (drawer) {
      case "pickSpot":
        return (
          <Suspense fallback={<DrawerSkeleton />}>
            <SpotInfo />
          </Suspense>
        );
      case "myInfo":
        return <MyInfo />;
      default:
        return null;
    }
  };

  return (
    <>
      <div css={drawerContainer(drawer)}>{showUI()}</div>
    </>
  );
};

export default Drawer;
