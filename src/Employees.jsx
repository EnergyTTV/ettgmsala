import { useState, useEffect } from "react";

const employees = [
  {
    name: "Robin Laakso",
    image: "https://picsum.photos/150",
  },
  {
    name: "Natalie Hautamäki",
    image: "https://picsum.photos/150",
  },
];

const Employees = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024); // Adjust breakpoint if needed
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <div
      id="employee"
      className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 p-4"
    >
      {employees.map((employee, index) => (
        <div
          key={index}
          className={`m-10 text-center text-white ${(isTablet || isMobile) && index === 2
              ? "sm:col-span-2 sm:mx-auto"
              : ""
            }`}
        >
          <img
            src={employee.image}
            alt={employee.name}
            className="mx-auto mb-4 w-30 h-30 rounded-full object-cover"
          />
          <h1 className="text-4xl">{employee.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Employees;
