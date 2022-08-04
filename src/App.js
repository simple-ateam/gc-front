// import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MNav from "./components/mNav";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <MNav />
    </>
  );
}

export default App;
