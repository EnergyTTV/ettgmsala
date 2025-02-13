import { FaInstagram } from "react-icons/fa";

const SocialMediaBar = () => {
  return (
    <div className="flex flex-row justify-center space-x-4 mt-4">
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-white w-13 h-13 hover:text-pink-500 cursor-pointer" />
      </a>
    </div>
  );
};

export default SocialMediaBar;
