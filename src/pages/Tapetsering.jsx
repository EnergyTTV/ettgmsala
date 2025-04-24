import tapetseringImage1 from "/src/assets/tapetsering-1.jpg";
import tapetseringImage2 from "/src/assets/tapetsering-2.jpg";

const tjänster = [
  {
    name: "Tapetsering – Ge dina väggar nytt liv",
    text: "Tapetsering är ett enkelt och effektivt sätt att förvandla ett rum och skapa en personlig atmosfär i ditt hem. Med rätt tapet kan du lyfta fram din stil, oavsett om du föredrar klassiskt, modernt eller något helt unikt.",
    src: tapetseringImage1,
  },
  {
    name: "Mattläggning",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    src: tapetseringImage2,
  },
];

const Tapetsering = () => {
  return (
    <div className="text-white relative w-full min-h-screen flex flex-col justify-center items-center pt-60 pb-10 space-y-16">
      {tjänster.map((service, index) => (
        <div
          key={index}
          className={`w-3/4 flex flex-col md:flex-row items-center bg-transparent ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <img
            src={service.src}
            alt={service.name}
            className="w-full md:w-1/2 h-70 object-cover rounded-md"
          />
          <div className="w-full md:w-1/2 p-6 text-left">
            <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
            <p className="text-base">{service.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tapetsering;
