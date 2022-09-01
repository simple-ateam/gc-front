import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import { MobileView } from "react-device-detect";
import MNav from "./components/mobile/mNavBar";
import "./App.css";
import { RecoilRoot } from "recoil";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/maps" element={<Home />} />
          <Route path="/profile/*" element={<Home />} />
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
