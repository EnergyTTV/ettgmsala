import './App.css'
import Contacts from './Contacts'
import Hero from './Hero'
import NavBar from './NavBar'
import References from './References'
import Suppliers from './Suppliers'
import CookieHandler from "./CookieHandler"; // Import the new component


function App() {
  return (
    <>
        <NavBar />
        <Hero />

        <section id="referenser">
          <References />
        </section>

        {/* Contact Section */}
        <section id="kontakt">
          <Contacts />
        </section>

        <section id="leverantörer">
          <Suppliers />
        </section>
        <CookieHandler />
    </>
  )
}

export default App
