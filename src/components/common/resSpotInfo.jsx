import { useRecoilValue } from "recoil";
import { mDrawerState } from "../../states";
import SpotInfo from "./spotInfo";
import { Suspense } from "react";
import MSpotInfo from "../mobile/mSpotInfo";
import { DrawerSkeleton, MDrawerSkeleton } from "./skeletons";
import { isMobile, isBrowser } from "react-device-detect";

const ResSpotInfo = () => {
  const mDrawer = useRecoilValue(mDrawerState);

  const SpotInfoUI = () => {
    if (isMobile) {
      if (mDrawer === "expand") {
        return (
          <Suspense fallback={<DrawerSkeleton />}>
            <SpotInfo />
          </Suspense>
        );
      } else if (mDrawer === "collapse") {
        return (
          <Suspense fallback={<MDrawerSkeleton />}>
            <MSpotInfo />
          </Suspense>
        );
      }
    } else if (isBrowser) {
      return (
        <Suspense fallback={<DrawerSkeleton />}>
          <SpotInfo />
        </Suspense>
      );
    }
  };

  return <SpotInfoUI />;
};

export default ResSpotInfo;
