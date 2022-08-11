// import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { MobileView } from "react-device-detect";
import MNav from "./components/mobile/mNavBar";
import "./App.css";
import { RecoilRoot } from "recoil";

import { Suspense } from "react";

function App() {
  return (
    <>
      <RecoilRoot>
        <Suspense fallback={<div>"페이지를 불러오는"</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <MobileView>
            <MNav />
          </MobileView>
        </Suspense>
      </RecoilRoot>
    </>
  );
}

export default App;
