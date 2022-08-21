import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Login from "./pages/login";
import SignUp from "./pages/signup";
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <MobileView>
          <MNav />
        </MobileView>
      </RecoilRoot>
    </>
  );
}

export default App;
