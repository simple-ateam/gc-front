/** @jsxImportSource @emotion/react */
import { useRecoilValue, useSetRecoilState } from "recoil";
import { drawerQuery, drawerScrollQuery, bookmarkState } from "../../states";
import { drawerContainer } from "../styles/components/drawer";
import MyInfo from "./myInfo";
import ResSpotInfo from "./resSpotInfo";
import { useRef } from "react";
import { isMobile } from "react-device-detect";
import { useEffect } from "react";

const Drawer = () => {
  const divRef = useRef();
  const drawer = useRecoilValue(drawerQuery);
  const setDrawerScroll = useSetRecoilState(drawerScrollQuery);
  const setBookmark = useSetRecoilState(bookmarkState);

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

  useEffect(() => {
    setBookmark(JSON.parse(localStorage.getItem("bookmark")));
  }, []);

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
