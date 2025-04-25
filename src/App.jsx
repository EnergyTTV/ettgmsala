import "./App.css";
import Contacts from "./Contacts";
import Hero from "./Hero";
import NavBar from "./NavBar";
import CookieHandler from "./CookieHandler";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mattlaggning from "./pages/Mattlaggning";
import Malning from "./pages/Malning";
import Golvslipning from "./pages/Golvslipning";
import References from "./References";
import backgroundImage from "/src/assets/wallpaper1.webp";
import Tapetsering from "./pages/Tapetsering";
import Footer from "./Footer";
import Employees from "./Employees";
import Suppliers from "./pages/Suppliers";

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
                  <CookieHandler />
                  <References />
                  <Contacts />
                  <Employees />
                </>
              }
            />

            <Route path="/leverantörer" element={<Suppliers />} />
            <Route path="/mattläggning" element={<Mattlaggning />} />
            <Route path="/målning" element={<Malning />} />
            <Route path="/golvslipning" element={<Golvslipning />} />
            <Route path="/tapetsering" element={<Tapetsering />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
