import { useEffect, useState } from "react";

const contacts = [
  {
    name: "Mattias Collén",
    phone: "070-862 00 07",
    email: "mattias@1gm.se",
  },
  {
    name: "Ronnie Laakso",
    phone: "072-211 29 99",
    email: "ronnie@1gm.se",
  },
  {
    name: "Ted Smeds",
    phone: "076-092 07 87",
    email: "ted@1gm.se",
  },
];

const Contacts = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint if needed
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      id="contact"
      className="bg-black flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-4"
    >
      {contacts.map((contact, index) => (
        <div key={index} className="m-10 text-center text-white">
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
