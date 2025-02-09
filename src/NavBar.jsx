import { useState, useCallback } from "react";
import logo from "/src/assets/logo-vit.png"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    setMenuOpen(false);
  }, []);

  const navButton = "hover:text-gray-300 cursor-pointer transition duration-300";

  return (
    <div className="fixed top-0 left-0 w-screen h-24 bg-black text-white text-xl z-50 flex items-center px-6 md:px-12">
      <div className="w-full flex items-center justify-between">

        {/* Left Menu (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-10 flex-1 justify-end">
          {["hem", "referenser"].map((id) => (
            <button key={id} onClick={() => handleScroll(id)} className={navButton}>
              {id.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Centered Logo */}
        <div className="flex justify-center flex-shrink-0 mx-10">
          <a href="/">
            <img className="h-32 bg-black rounded-2xl p-2 -mb-6 mt-4" src={logo} alt="Logo" loading="lazy" />
          </a>
        </div>

        {/* Right Menu (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-10 flex-1 justify-start">
          {["leverantörer", "kontakt"].map((id) => (
            <button key={id} onClick={() => handleScroll(id)} className={navButton}>
              {id.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 w-1/2 bg-black text-white flex flex-col items-center space-y-4 py-4 md:hidden">
            {["referenser", "leverantörer", "kontakt"].map((id) => (
            <button key={id} onClick={() => handleScroll(id)} className={navButton}>
                {id.toUpperCase()}
            </button>
            ))}
        </div>
        )}
    </div>
  );
};

export default NavBar;