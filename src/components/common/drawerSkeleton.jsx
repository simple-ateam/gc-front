/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { drawerContainer } from "../styles/components/drawer";
import { pickSpotQuery } from "../../states";
import { useRecoilState } from "recoil";
import { skeletonStyle } from "../styles/components/skeletons";

const DrawerSKeleton = () => {
  const [pickSpot, setPickSpot] = useRecoilState(pickSpotQuery);

  return (
    <div css={drawerContainer(pickSpot)}>
      <section css={skeletonStyle}>
        <div></div>
        <h2></h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div>
          <ul>
            <li>
              <div></div>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <div></div>
            </li>
          </ul>
        </div>
        <article>
          <h2></h2>
          <div></div>
        </article>
      </section>
    </div>
  );
};
export default DrawerSKeleton;