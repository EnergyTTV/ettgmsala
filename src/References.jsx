import badrumImage from "/src/assets/badrum-läggning.jpg";
import fasadImage from "/src/assets/fasad-målning.jpg";
import golvslipningImage from "/src/assets/golvslipning.jpg";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const references = [
  { src: badrumImage, caption: "Mattläggning", link: "/mattlaggning" },
  {
    src: fasadImage,
    caption: "Målning & Tapetsering",
    link: "/malning-tapetsering",
  },
  { src: golvslipningImage, caption: "Golvslipning", link: "/golvslipning" },
];

const References = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-white text-3xl font-bold my-5">Våra Tjänster</h2>
      <div className="w-full max-w-4xl">
        <Swiper
          modules={[Navigation, Scrollbar, Autoplay]}
          navigation
          scrollbar={{
            hide: false,
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1} // Default to one slide
        >
          {references.map((ref, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-100 overflow-hidden group cursor-pointer flex justify-center"
                onClick={() => navigate(ref.link)}
              >
                <img
                  src={ref.src}
                  alt={ref.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-60 text-white px-4 py-2 text-2xl text-center rounded">
                    {ref.caption}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default References;
