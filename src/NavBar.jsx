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
      className={`fixed top-0 left-0 w-screen text-xl z-50 flex items-center justify-center px-6 md:px-12 transition-[height,background-color] duration-500  ${
        shrink ? "h-26 bg-black/70" : "h-20"
      }`}
    >
      {/* Centered Logo */}
      <a href="/">
        <img
          className={`rounded-2xl p-2 origin-top transition-all duration-500  ${
            shrink ? "h-26 rounded-xl" : "h-40 mt-40"
          }`}
          src={logo}
          alt="Logo"
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default NavBar;
