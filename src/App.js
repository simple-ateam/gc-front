// import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { MobileView } from "react-device-detect";
import MNav from "./components/mobile/mNavBar";
import "./App.css";
import Map from "./components/common/map";
import { RecoilRoot } from "recoil";

import { Suspense } from "react";

function App() {
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <MobileView>
          <MNav />
        </MobileView>
      </RecoilRoot>
    </>
  );
}

export default App;
