import ScrollIndicator from "./ScrollIndicator";
import SocialMediaBar from "./SocialMediaBar";
import { Link } from "react-router-dom";

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
          <Link
            to="/leverantörer"
            className="mt-5 px-6 py-3 text-lg bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Våra Leverantörer
          </Link>
          <SocialMediaBar />
          <ScrollIndicator />
        </div>
      </div>
    </div>
  );
};

export default Hero;
