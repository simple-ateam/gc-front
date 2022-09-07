import { useRecoilValue } from "recoil";
import { mDrawerState } from "../../states";
import SpotInfo from "./spotInfo";
import { Suspense } from "react";
import MSpotInfo from "../mobile/mSpotInfo";
import { DrawerSkeleton, MDrawerSkeleton } from "./skeletons";
import { isBrowser } from "react-device-detect";

const ResSpotInfo = () => {
  const mDrawer = useRecoilValue(mDrawerState);

  const SpotInfoUI = () => {
    if (mDrawer === "expand" || isBrowser) {
      return (
        <Suspense fallback={<DrawerSkeleton />}>
          <SpotInfo />
        </Suspense>
      );
    } else {
      return (
        <Suspense fallback={<MDrawerSkeleton />}>
          <MSpotInfo />
        </Suspense>
      );
    }
  };

  return <SpotInfoUI />;
};

export default ResSpotInfo;
