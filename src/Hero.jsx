import ScrollIndicator from "./ScrollIndicator";
import backgroundImage from "/src/assets/wallpaper1.webp";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-800 opacity-30"></div>
      <img
        className="top-0 left-0 w-full h-full object-cover"
        src={backgroundImage}
        alt="Background"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-screen flex flex-col items-center">
          <h1 className="text-white text-center text-4xl md:text-6xl font-bold">
            Välkommen till ETTGMSala!
          </h1>
          <p className="text-gray-300 text-center text-xl mt-5">
            Vi erbjuder allt inom Golv och Målning.
          </p>
          <ScrollIndicator />
        </div>
      </div>
    </div>
  );
};

export default Hero;
