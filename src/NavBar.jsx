import { useState, useEffect } from "react";
import logo from "/src/assets/logo-vit.svg";

const NavBar = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-screen text-white text-xl z-50 flex items-center justify-center px-6 md:px-12 transition-[height,background-color] duration-300 ${
        shrink ? "h-26 bg-black/70" : "h-20"
      }`}
    >
      <div className="w-full flex items-center justify-center">
        {/* Centered Logo */}
        <div className="flex place-items-center">
          <a href="/">
            <img
              className={`rounded-2xl p-2 transition-[height,transform] duration-500 ease-in-out ${
                shrink
                  ? "h-26 rounded-xl transform origin-top"
                  : "h-40 mt-40 transform origin-top"
              }`}
              src={logo}
              alt="Logo"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
