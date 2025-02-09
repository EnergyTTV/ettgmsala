import forboLogo from "/src/assets/forbo.svg";
import gerflorLogo from "/src/assets/gerflor.svg";
import tarkettLogo from "/src/assets/tarkett.svg";

const suppliers = [
  { name: "Supplier 1", logo: forboLogo },
  { name: "Supplier 2", logo: gerflorLogo },
  { name: "Supplier 3", logo: tarkettLogo },
  { name: "Supplier 4", logo: "https://via.placeholder.com/100" },
];
  
  const Suppliers = () => {
    return (
      <div className="bg-gray-100 rounded-xl shadow-md">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {suppliers.map((supplier, index) => (
            <div key={index} className="flex flex-col items-center bg-black p-4 shadow">
              <img src={supplier.logo} alt={supplier.name} className="w-40 h-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Suppliers;
  