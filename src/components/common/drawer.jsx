/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRecoilValue } from "recoil";
import { pickSpotQuery, drawerState, drawerQuery } from "../../states";
import { drawerContainer } from "../styles/components/drawer";
import SpotInfo from "./spotInfo";
import MyInfo from "./myInfo";
import { useEffect } from "react";

const Drawer = () => {
  const drawer = useRecoilValue(drawerQuery);

  useEffect(() => {
    console.log(drawer);
  }, [drawer]);

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
      <div css={drawerContainer(drawer)}>
        {/* {showUI()} */}
        <MyInfo />
      </div>
    </>
  );
};

export default Drawer;
