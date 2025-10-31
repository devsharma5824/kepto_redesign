import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import CursorFollower from "./components/effects/CursorFollower";
import LoadingScreen from "./components/effects/LoadingScreen";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import CoreFeatures from "./components/sections/CoreFeatures";
import ConnectProcess from "./components/sections/ConnectProcess";
import PaymentSolution from "./components/sections/PaymentSolution";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import ContactUs from "./components/pages/ContactUs";
import ScrollToTop from "./components/utils/ScrollToTop";

const App = () => {
  const location = useLocation();
  const hideCursor = location.pathname === "/contact";

  return (
    <>
      <LoadingScreen />

      {!hideCursor && (
        <div className="hidden xl:block">
          <CursorFollower />
        </div>
      )}

      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <HeroSection />
              <CoreFeatures />
              <ConnectProcess />
              <PaymentSolution />
              <WhyChooseUs />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default App;
