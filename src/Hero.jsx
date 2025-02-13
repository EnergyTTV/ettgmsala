import ScrollIndicator from "./ScrollIndicator";
import SocialMediaBar from "./SocialMediaBar";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-screen flex flex-col items-center">
          <h1 className="text-white text-center text-4xl md:text-6xl font-bold">
            Välkommen till ETTGM!
          </h1>
          <p className="text-gray-300 text-center text-xl mt-5">
            Vi erbjuder det mesta inom Golv och Målning, i samarbete med Happy
            Homes Sala.
          </p>
          <SocialMediaBar />
          <ScrollIndicator />
        </div>
      </div>
    </div>
  );
};

export default Hero;
