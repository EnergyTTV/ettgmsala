import malningImage from "./src/assets/wallpaper1.webp";

const tjänster = [
  {
    name: "Professionell målning för företag of privatpersoner",
    text: `Vi erbjuder högkvalitativa måleritjänster för både företag och privatpersoner. Med noggrant hantverk och hållbara material skapar vi vackra och slitstarka ytor – oavsett om det gäller hem, kontor eller industrilokaler.<br/><br/>
    ✅ Inomhusmålning – Väggar, tak och snickerier med perfekt finish.<br/>
    ✅ Fasad- och utomhusmålning – Skydd och förnyelse för hus och byggnader.<br/>
    ✅ Tapetsering och dekormålning – Personliga och stilrena lösningar.<br/>
    ✅ Varumärkesanpassning – Färgsättning och design enligt företagsprofil.<br/><br/>
    Vi garanterar kvalitet, noggrannhet och ett resultat som håller över tid. Kontakta oss för en kostnadsfri offert!`,
    src: malningImage,
  },
  {
    name: "Mattläggning",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    src: malningImage,
  },
];

const Malning = () => {
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
            className="w-full md:w-1/2 h-110 object-cover rounded-md"
          />
          <div className="w-full md:w-1/2 p-6 text-left">
            <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
            <p
              className="text-base"
              dangerouslySetInnerHTML={{ __html: service.text }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Malning;
