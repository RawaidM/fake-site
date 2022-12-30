import Search from "./components/Search";
import Slide from "./components/Slide";
import HowItWorks from "./components/HowItWorks";
import PhoneAd from "./components/PhoneAd";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import About from "./pages/About";
import Help from "./pages/Help";

import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App relative min-h-screen pb-24">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Search />
              <Slide />
              <HowItWorks />
              <PhoneAd />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
