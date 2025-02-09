import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import badrumImage from "/src/assets/badrum-läggning.jpg";
import fasadImage from "/src/assets/fasad-målning.jpg";
import golvslipningImage from "/src/assets/golvslipning.jpg";

const images = [badrumImage, fasadImage, golvslipningImage];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full md:w-1/3 h-auto">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-80 object-cover transition-transform duration-500 ease-in-out"
        onClick={() => setSelectedImage(images[currentIndex])}
      />
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full transition-colors duration-300 hover:bg-black hover:bg-opacity-50"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-white" />
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full transition-colors duration-300 hover:bg-black hover:bg-opacity-50"
        onClick={nextSlide}
      >
        <ChevronRight className="text-white" />
      </button>

      {selectedImage && (
        <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative">
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-screen rounded-lg" />
            <button onClick={() => setSelectedImage(null)} className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-50 rounded-full p-2">✖</button>
          </div>
        </Dialog>
      )}
    </div>
  );
};

const References = () => {
  return (
    <div className="bg-black w-screen flex flex-col md:flex-row justify-between">
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
};

export default References;