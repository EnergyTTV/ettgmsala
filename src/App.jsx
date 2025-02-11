import './App.css';
import Contacts from './Contacts';
import Hero from './Hero';
import NavBar from './NavBar';
import References from './References';
import Suppliers from './Suppliers';
import CookieHandler from "./CookieHandler";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mattlaggning from "./pages/Mattlaggning";
import MalningTapetsering from "./pages/MalningTapetsering";
import Golvslipning from "./pages/Golvslipning";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<>
          <Hero />
          <section id="våra tjänster">
            <References />
          </section>
          <section id="kontakt">
            <Contacts />
          </section>
          <section id="leverantörer">
            <Suppliers />
          </section>
          <CookieHandler />
        </>} />
        <Route path="/mattlaggning" element={<Mattlaggning />} />
        <Route path="/malning-tapetsering" element={<MalningTapetsering />} />
        <Route path="/golvslipning" element={<Golvslipning />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
