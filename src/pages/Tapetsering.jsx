import completed1 from "/src/assets/natta1.jpg";
import completed2 from "/src/assets/natta2.jpg";
import completed3 from "/src/assets/natta3.jpg";
import completed4 from "/src/assets/natta4.jpg";
import completed5 from "/src/assets/natta5.jpg";
import completed6 from "/src/assets/natta6.jpg";
import completed7 from "/src/assets/natta7.jpg";
import completed8 from "/src/assets/natta8.jpg";
import completed9 from "/src/assets/natta9.jpg";
import completed10 from "/src/assets/natta10.jpg";
import tapetseringImage1 from "/src/assets/tapetsering-1.jpg";
import tapetseringImage2 from "/src/assets/tapetsering-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const tjänster = [
  {
    name: "Tapetsering – Ge dina väggar nytt liv",
    text: "Tapetsering är ett enkelt och effektivt sätt att förvandla ett rum och skapa en personlig atmosfär i ditt hem. Med rätt tapet kan du lyfta fram din stil, oavsett om du föredrar klassiskt, modernt eller något helt unikt.",
    src: tapetseringImage1,
  },
  {
    name: "Mattläggning",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    src: tapetseringImage2,
  },
];

const completed = [
  {
    src: completed1,
  },
  {
    src: completed2,
  },
  {
    src: completed3,
  },
  {
    src: completed4,
  },
  {
    src: completed5,
  },
  {
    src: completed6,
  },
  {
    src: completed7,
  },
  {
    src: completed8,
  },
  {
    src: completed9,
  },
  {
    src: completed10,
  },
];

const Tapetsering = () => {
  return (
    <>
      <div className="text-white relative w-full min-h-screen flex flex-col justify-center items-center pt-60 pb-10 space-y-16">
        {tjänster.map((service, index) => (
          <div
            key={index}
            className={`w-3/4 flex flex-col md:flex-row items-center bg-transparent ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <img
              src={service.src}
              alt={service.name}
              className="w-full md:w-1/2 h-70 object-cover rounded-md"
            />
            <div className="w-full md:w-1/2 p-6 text-left">
              <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
              <p className="text-base">{service.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col items-center">
        <h2 className="text-white text-4xl font-bold my-5">Referenser</h2>
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
            {completed.map((ref, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-110 overflow-hidden group cursor-pointer flex justify-center transition-transform duration-500">
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
    </>
  );
};

export default Tapetsering;
