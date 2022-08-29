/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { drawerQuery, pickSpotQuery, spotInfoState } from "../../states";
import { drawerContainer } from "../styles/components/drawer";
import MyInfo from "./myInfo";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ResSpotInfo from "./resSpotInfo";

const Drawer = () => {
  const location = useLocation();
  const [drawer, setDrawer] = useRecoilState(drawerQuery);
  const pickSpot = useRecoilValue(pickSpotQuery);

  useEffect(() => {
    console.log("pickSpot", pickSpot);
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
  const scroll = (e) => {
    console.log(e);
  };

  return (
    <>
      <div css={drawerContainer(drawer)}>
        <DrawerContent />
      </div>
    </>
  );
};

export default Drawer;
