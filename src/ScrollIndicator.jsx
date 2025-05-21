import { useState, useEffect } from "react";
import { Mouse, Hand } from "lucide-react";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div className="pb-11 absolute bottom-14 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        {/* Show the Mouse icon on larger screens */}
        <Mouse
          className="w-10 h-10 text-white animate-bounce hidden md:block cursor-pointer"
          onClick={handleScrollDown}
        />

        {/* Show the Hand icon on mobile */}
        <Hand
          className="w-8 h-8 text-white animate-bounce md:hidden"
          onClick={handleScrollDown}
        />

        <p className="text-white text-md">Scrolla för mer info!</p>
      </div>
    )
  );
}
