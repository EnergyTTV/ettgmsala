import golvslipningImage from "/src/assets/golvslipning.jpg";

const tjänster = [
  {
    name: "Golvslipning",
    text: "Golvslipning är processen att slipa ner ytan på ett trägolv för att ta bort repor, ojämnheter och gamla ytbehandlingar. Detta görs med en golvslipmaskin och olika slippapper beroende på golvets skick. Efter slipningen kan golvet behandlas med lack, olja eller hårdvax för att ge skydd och en fin finish. Golvslipning förlänger golvets livslängd och ger det ett fräscht utseende.",
    src: golvslipningImage,
  },
  {
    name: "Mattläggning",
    text: "",
    src: golvslipningImage,
  },
];

const Golvslipning = () => {
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

export default Golvslipning;
