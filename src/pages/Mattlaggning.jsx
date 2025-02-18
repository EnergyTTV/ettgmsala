import badrumImage from "/src/assets/badrum-läggning.jpg";

const tjänster = [
  {
    name: "Badrum",
    text: "Plastmattor är ett populärt val för badrumsgolv tack vare deras vattentåliga egenskaper, slitstyrka och enkelhet att underhålla. För att få ett hållbart och snyggt resultat är det viktigt att lägga plastmattan på rätt sätt.",
    src: badrumImage,
  },
  {
    name: "Mattläggning",
    text: "",
    src: badrumImage,
  },
];

const Mattlaggning = () => {
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

export default Mattlaggning;
