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

export default Golvslipning;
