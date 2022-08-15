import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import { MobileView } from "react-device-detect";
import MNav from "./components/mobile/mNavBar";
import "./App.css";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maps/:content" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <MobileView>
          <MNav />
        </MobileView>
      </RecoilRoot>
    </>
  );
}

export default App;
