import forboLogo from "/src/assets/companies/forbo.svg";
import gerflorLogo from "/src/assets/companies/gerflor1.svg";
import tarkettLogo from "/src/assets/companies/tarkett.svg";
import duroLogo from "/src/assets/companies/duro.svg";
import kjellbergsLogo from "/src/assets/companies/kjellbergs.svg";
import anzaLogo from "/src/assets/companies/anza.svg";
import boråstapeterLogo from "/src/assets/companies/borastapeter.svg";

const suppliers = [
  { name: "Supplier 1", logo: forboLogo },
  { name: "Supplier 2", logo: gerflorLogo },
  { name: "Supplier 3", logo: tarkettLogo },
  { name: "Supplier 4", logo: duroLogo },
  { name: "Supplier 5", logo: kjellbergsLogo },
  { name: "Supplier 6", logo: anzaLogo },
  { name: "Supplier 7", logo: boråstapeterLogo },
];

const Suppliers = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center pt-60">
      {suppliers.map((supplier, index) => (
        <div key={index} className="flex flex-col items-center p-4">
          <img
            src={supplier.logo}
            alt={supplier.name}
            className="w-40 h-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Suppliers;
