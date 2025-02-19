import badrumImage from "/src/assets/badrum-läggning.jpg";

const tjänster = [
  {
    name: "Badrum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    src: badrumImage,
  },
  {
    name: "Mattläggning",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    src: badrumImage,
  },
];

const Tapetsering = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div className="inset-0 flex justify-center items-center pt-60">
        <div className="text-center text-white">
          <div className="flex flex-wrap justify-center gap-6">
            {tjänster.map((service, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 bg-transparent"
              >
                <img
                  src={service.src}
                  alt={service.name}
                  className="w-full h-70 object-cover rounded-md mb-4"
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

export default Tapetsering;
