// import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
