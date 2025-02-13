import "./App.css";
import Contacts from "./Contacts";
import Hero from "./Hero";
import NavBar from "./NavBar";
import CookieHandler from "./CookieHandler";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mattlaggning from "./pages/Mattlaggning";
import MalningTapetsering from "./pages/MalningTapetsering";
import Golvslipning from "./pages/Golvslipning";
import References from "./References";
import backgroundImage from "/src/assets/wallpaper1.webp";

function App() {
  return (
    <BrowserRouter>
      {/* Wrapper for background and overlay */}
      <div className="relative min-h-screen">
        {/* Background image container */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Dark overlay only for the background image */}
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
        </div>

        {/* Content section */}
        <div className="relative z-10">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <References />
                  <Contacts />
                  <CookieHandler />
                </>
              }
            />
            <Route path="/mattlaggning" element={<Mattlaggning />} />
            <Route
              path="/malning-tapetsering"
              element={<MalningTapetsering />}
            />
            <Route path="/golvslipning" element={<Golvslipning />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
