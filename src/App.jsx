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
      <div className="absolute inset-0 bg-gray-800 opacity-30"></div>
      <div
        className="h-screen bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }} // Apply background image here
      >
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
          <Route path="/malning-tapetsering" element={<MalningTapetsering />} />
          <Route path="/golvslipning" element={<Golvslipning />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
