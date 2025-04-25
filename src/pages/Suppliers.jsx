import forboLogo from "../assets/companies/forbo.svg";
import gerflorLogo from "../assets/companies/gerflor1.svg";
import tarkettLogo from "../assets/companies/tarkett.svg";
import duroLogo from "../assets/companies/duro.svg";
import kjellbergsLogo from "../assets/companies/kjellbergs.svg";
import anzaLogo from "../assets/companies/anza.svg";
import boråstapeterLogo from "../assets/companies/borastapeter.svg";

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
