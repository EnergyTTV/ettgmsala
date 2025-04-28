import { useEffect, useState } from "react";

const contacts = [
  {
    name: "Mattias Collén",
    phone: "070-862 00 07",
    email: "mattias@1gm.se",
    image: "https://picsum.photos/150",
  },
  {
    name: "Ronnie Laakso",
    phone: "072-211 29 99",
    email: "ronnie@1gm.se",
    image: "https://picsum.photos/150",
  },
  {
    name: "Ted Smeds",
    phone: "076-092 07 87",
    email: "ted@1gm.se",
    image: "https://picsum.photos/150",
  },
];

const Contacts = () => {
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
      id="contact"
      className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-4"
    >
      {contacts.map((contact, index) => (
        <div
          key={index}
          className={`m-3 text-center text-white ${(isTablet || isMobile) && index === 2
              ? "sm:col-span-2 sm:mx-auto"
              : ""
            }`}
        >
          <img
            src={contact.image}
            alt={contact.name}
            className="mx-auto mb-4 w-30 h-30 rounded-full object-cover"
          />
          <h1 className="text-4xl">{contact.name}</h1>
          <h1 className="text-2xl">
            {isMobile ? (
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="text-blue-400 hover:underline"
              >
                {contact.phone}
              </a>
            ) : (
              contact.phone
            )}
          </h1>
          <h1 className="text-xl">
            <a
              href={`mailto:${contact.email}`}
              className="text-blue-400 hover:underline"
            >
              {contact.email}
            </a>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
