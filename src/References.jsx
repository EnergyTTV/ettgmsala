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
    <div className="bg-black w-screen flex flex-col md:flex-row justify-between">
      {references.map((ref, index) => (
        <div key={index} className="relative w-full md:w-1/3 h-auto overflow-hidden" onClick={() => navigate(ref.link)} style={{ cursor: 'pointer' }}>
          <img src={ref.src} alt={ref.caption} className="w-full h-80 object-cover" />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-opacity-50 text-white px-4 py-2 text-3xl">
            {ref.caption}
          </div>
        </div>
      ))}
    </div>
  );
};

export default References;