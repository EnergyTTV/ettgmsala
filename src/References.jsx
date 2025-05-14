import badrumImage from "/src/assets/badrum-läggning.jpg";
import fasadImage from "/src/assets/fasad-målning.jpg";
import golvslipningImage from "/src/assets/golvslipning.jpg";
import tapetseringImage from "/src/assets/tapetsering-1.jpg";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const references = [
  { src: badrumImage, caption: "Mattläggning", link: "/mattläggning" },
  { src: golvslipningImage, caption: "Golvslipning", link: "/golvslipning" },
  {
    src: fasadImage,
    caption: "Målning",
    link: "/målning",
  },
  { src: tapetseringImage, caption: "Tapetsering", link: "/tapetsering" },
];

const References = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-white text-4xl font-bold my-5">Våra Tjänster</h2>
      <div className="w-full">
        <Swiper
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={3000}
          slidesPerView={"3"}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          navigation
        >
          {references.map((ref, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-110 overflow-hidden group cursor-pointer flex justify-center transition-transform duration-500"
                onClick={() => navigate(ref.link)}
              >
                <img
                  src={ref.src}
                  alt={ref.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/50 text-white px-4 py-2 text-3xl text-center rounded-md">
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
