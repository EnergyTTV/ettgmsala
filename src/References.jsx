import badrumImage from "/src/assets/badrum-läggning.jpg";
import fasadImage from "/src/assets/fasad-målning.jpg";
import golvslipningImage from "/src/assets/golvslipning.jpg";
import { useNavigate } from "react-router-dom";

const references = [
  { src: badrumImage, caption: "Mattläggning", link: "/mattlaggning" },
  { src: fasadImage, caption: "Målning & Tapetsering", link: "/malning-tapetsering" },
  { src: golvslipningImage, caption: "Golvslipning", link: "/golvslipning" }
];

const References = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black w-screen flex flex-col items-center">
      <h2 className="text-white text-3xl font-bold my-5">Våra Tjänster</h2>
      <div className="w-full flex flex-col md:flex-row justify-between">
        {references.map((ref, index) => (
          <div 
            key={index} 
            className="relative w-full md:w-1/3 h-auto overflow-hidden md:px-3 group" 
            onClick={() => navigate(ref.link)} 
            style={{ cursor: 'pointer' }}
          >
            {/* Image */}
            <img src={ref.src} alt={ref.caption} className="w-full h-80 object-cover" />

            {/* Transparent black overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

            {/* Caption */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-4 text-3xl w-full text-center">
              {ref.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default References;