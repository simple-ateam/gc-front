/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { drawerContainer } from "../styles/components/drawer";
import { pickSpotQuery } from "../../states";
import { useRecoilValue } from "recoil";
import { drawerSkeleton, searchResultSkeleton } from "../styles/components/skeletons";
import { mDrawerSkeleton } from "../styles/components/skeletons";

export const DrawerSkeleton = () => {
  const pickSpot = useRecoilValue(pickSpotQuery);
  return (
    <div css={drawerContainer(pickSpot)}>
      <section css={drawerSkeleton}>
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

export const SearchResultSkeleton = () => {
  return (
    <div css={searchResultSkeleton}>
      <em>로딩중입니다...</em>
    </div>
  );
};

export const MDrawerSkeleton = () => {
  return (
    <section css={mDrawerSkeleton}>
      <div>
        <p></p>
        <p></p>
      </div>
      <div></div>
    </section>
  );
};
