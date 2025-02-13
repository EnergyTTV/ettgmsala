import forboLogo from "/src/assets/companies/forbo.svg";
import gerflorLogo from "/src/assets/companies/gerflor.svg";
import tarkettLogo from "/src/assets/companies/tarkett.svg";
import duroLogo from "/src/assets/companies/duro.svg";

const suppliers = [
  { name: "Supplier 1", logo: forboLogo },
  { name: "Supplier 2", logo: gerflorLogo },
  { name: "Supplier 3", logo: tarkettLogo },
  { name: "Supplier 4", logo: duroLogo },
];

const Suppliers = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 justify-center items-center pt-60">
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
