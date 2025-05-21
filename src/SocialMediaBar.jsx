import { FaInstagram } from "react-icons/fa";

const SocialMediaBar = () => {
  return (
    <div className="flex flex-row justify-center space-x-4 mt-4">
      <a
        href="https://www.instagram.com/ettgmsala/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-white w-14 h-14 hover:bg-black/50 rounded-2xl cursor-pointer" />
      </a>
    </div>
  );
};

export default SocialMediaBar;
