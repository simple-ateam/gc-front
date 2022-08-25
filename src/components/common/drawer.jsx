/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRecoilState } from "recoil";
import { pickSpotQuery, drawerState, drawerQuery } from "../../states";
import { drawerContainer } from "../styles/components/drawer";
import SpotInfo from "./spotInfo";
import MyInfo from "./myInfo";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const Drawer = () => {
  const params = useParams();
  const location = useLocation();
  const [drawer, setDrawer] = useRecoilState(drawerQuery);

  useEffect(() => {
    console.log(location.pathname);
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

  const showUI = () => {
    switch (drawer) {
      case "pickSpot":
        return <SpotInfo />;
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
