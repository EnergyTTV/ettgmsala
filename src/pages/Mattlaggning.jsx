import badrumImage from "/src/assets/badrum-läggning.jpg";

const tjänster = [
  {
    name: "Badrum",
    text: "Plastmattor är ett populärt val för badrumsgolv tack vare deras vattentåliga egenskaper, slitstyrka och enkelhet att underhålla. För att få ett hållbart och snyggt resultat är det viktigt att lägga plastmattan på rätt sätt.",
    src: badrumImage,
  },
  {
    name: "GVK",
    text: "Plastmattor är ett populärt val för badrumsgolv tack vare deras vattentåliga egenskaper, slitstyrka och enkelhet att underhålla. För att få ett hållbart och snyggt resultat är det viktigt att lägga plastmattan på rätt sätt.",
    src: badrumImage,
  },
  {
    name: "Kök",
    text: "I köket är det viktigt att ha en slitstark och lättskött golvyta. Plastmattor erbjuder en både estetisk och praktisk lösning för köksgolv.",
    src: badrumImage,
  },
];

const Mattlaggning = () => {
  return (
    <div className="text-white relative w-full min-h-screen flex flex-col justify-center items-center pt-60 pb-10 space-y-16">
      {tjänster.map((service, index) => (
        <div
          key={index}
          className={`w-3/4 flex flex-col md:flex-row items-center bg-transparent ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
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

export default Mattlaggning;
