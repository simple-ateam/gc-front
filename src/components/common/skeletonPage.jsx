/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { drawerContainer } from "../styles/components/drawer";
import { pickSpotQuery } from "../../states";
import { useRecoilValue } from "recoil";
import { skeletonStyle } from "../styles/components/skeletonPage";

const SkeletonPage = () => {
  const pickSpotdata = useRecoilValue(pickSpotQuery);
  return (
    <div css={drawerContainer(pickSpotdata)}>
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
export default SkeletonPage;
