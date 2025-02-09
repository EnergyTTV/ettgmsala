const suppliers = [
    { name: "Supplier 1", logo: "/src/assets/forbo.svg" },
    { name: "Supplier 2", logo: "/src/assets/gerflor.svg" },
    { name: "Supplier 3", logo: "/src/assets/tarkett.svg" },
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
  