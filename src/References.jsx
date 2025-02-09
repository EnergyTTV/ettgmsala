import { useState } from "react";
import { Dialog } from "@headlessui/react";

const images = [
  "/src/assets/badrum-läggning.jpg",
  "/src/assets/fasad-målning.jpg",
  "/src/assets/golvslipning.jpg",
];

const References = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-black w-screen">
      <div className="grid grid-cols-2 md:grid-cols-3 w-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

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

export default References;
