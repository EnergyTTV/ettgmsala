import backgroundImage from "/src/assets/wallpaper1.webp";

const tjänster = [
  {
    name: "Badrum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/src/assets/målning-tapetsering.jpg",
  },
  {
    name: "Mattläggning",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/src/assets/mattlaggning.jpg",
  },
];

const Malning = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        className="top-0 left-0 w-full h-full object-cover"
        src={backgroundImage}
        alt="Background"
        loading="lazy"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-center text-white">
          <div className="flex justify-center space-x-10">
            {tjänster.map((service, index) => (
              <div key={index} className="text-white w-1/3 p-6">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
                <p className="text-base">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Malning;
