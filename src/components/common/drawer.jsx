/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { drawerQuery, drawerScrollQuery } from "../../states";
import { drawerContainer } from "../styles/components/drawer";
import MyInfo from "./myInfo";
import ResSpotInfo from "./resSpotInfo";
import { useRef } from "react";
import { isMobile } from "react-device-detect";

const Drawer = () => {
  const divRef = useRef();
  const drawer = useRecoilValue(drawerQuery);
  const setDrawerScroll = useSetRecoilState(drawerScrollQuery);

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
    if (divRef.current.scrollTop === 0) {
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
