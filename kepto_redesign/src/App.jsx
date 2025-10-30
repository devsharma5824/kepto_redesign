import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

const App = () => {
  return (
    <Router>
      <LoadingScreen />
      <div className="hidden xl:block">
        <CursorFollower />
      </div>

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
      </Routes>
    </Router>
  );
};

export default App;
