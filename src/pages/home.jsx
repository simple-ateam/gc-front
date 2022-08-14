import Map from "../components/common/map";
import SearchBar from "../components/common/searchBar";
import CampsiteDrawer from "../components/common/campsiteDrawer";
import { Suspense } from "react";
const Home = () => {
  return (
    <>
      <Map />
      <Suspense fallback={<div>loading...</div>}>
        <CampsiteDrawer />
        <SearchBar />
      </Suspense>
    </>
  );
};

export default Home;
