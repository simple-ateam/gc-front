// import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { MobileView } from "react-device-detect";
import MNav from "./components/mobile/mNavBar";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <MobileView>
        <MNav />
      </MobileView>
    </>
  );
}

export default App;
