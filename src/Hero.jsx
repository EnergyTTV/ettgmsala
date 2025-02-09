import backgroundImage from "/src/assets/starfors_1440p.jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-[calc(100vh-6rem)] mt-24 overflow-hidden flex items-center justify-center"> 
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundImage}
        alt="Background"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black bg-opacity-50 p-5 text-5xl text-white rounded-md">
          Välkommen till Ett Golv & Måleri i Sala AB
        </div>
      </div>
    </div>
  );
};

export default Hero;

