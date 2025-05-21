import { useState, useRef, useEffect } from "react";
import badrumImage from "/src/assets/badrum-läggning.jpg";
import completed1 from "/src/assets/badrum1.jpg";
import completed2 from "/src/assets/badrum2.jpg";
import completed3 from "/src/assets/badrum3.jpg";
import completed4 from "/src/assets/badrum4.jpg";
import completed5 from "/src/assets/badrum5.jpg";
import completed6 from "/src/assets/badrum6.jpg";
import completed7 from "/src/assets/badrum7.jpg";
import completed8 from "/src/assets/trappa1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const tjänster = [
  {
    name: "Badrum",
    text: "Plastmattor är ett populärt val för badrumsgolv tack vare deras vattentåliga egenskaper, slitstyrka och enkelhet att underhålla. För att få ett hållbart och snyggt resultat är det viktigt att lägga plastmattan på rätt sätt.",
    src: badrumImage,
  },
  {
    name: "GVK",
    text: "Plastmattor är ett populärt val för badrumsgolv tack vare deras vattentåliga egenskaper, slitstyrka och enkelhet att underhålla. För att få ett hållbart och snyggt resultat är det viktigt att lägga plastmattan på rätt sätt.",
    src: badrumImage,
  },
  {
    name: "Kök",
    text: "I köket är det viktigt att ha en slitstark och lättskött golvyta. Plastmattor erbjuder en både estetisk och praktisk lösning för köksgolv.",
    src: badrumImage,
  },
];

const completed = [
  { src: completed1 },
  { src: completed2 },
  { src: completed3 },
  { src: completed4 },
  { src: completed5 },
  { src: completed6 },
  { src: completed7 },
  { src: completed8 },
];

const Mattlaggning = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showLightboxSwiper, setShowLightboxSwiper] = useState(false);
  const lightboxRef = useRef(null);
  const mainSwiperRef = useRef(null); // 🔧 Added ref

  // Close lightbox with ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
        setShowLightboxSwiper(false);
        mainSwiperRef.current?.autoplay?.start(); // ▶️ Resume autoplay
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <><div className="text-white relative w-full min-h-screen flex flex-col justify-center items-center pt-60 pb-10 space-y-16">
      {tjänster.map((service, index) => (
        <div
          key={index}
          className={`w-3/4 flex flex-col md:flex-row items-center bg-transparent ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
          <img
            src={service.src}
            alt={service.name}
            className="w-full md:w-1/2 h-70 object-cover rounded-md" />
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
            onSwiper={(swiper) => (mainSwiperRef.current = swiper)} // 🔧 capture Swiper instance
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
                <div
                  className="w-full h-110 overflow-hidden group cursor-pointer flex justify-center transition-transform duration-500"
                  onClick={() => {
                    setStartIndex(index);
                    setLightboxOpen(true);
                    setTimeout(() => {
                      setShowLightboxSwiper(true);
                    });
                    mainSwiperRef.current?.autoplay?.stop(); // ⏸️ Pause autoplay
                  }}
                >
                  <img
                    src={ref.src}
                    alt={`ref-${index}`}
                    className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center px-4">
          <button
            className="absolute top-4 right-4 text-white text-3xl z-50"
            onClick={() => {
              setLightboxOpen(false);
              setShowLightboxSwiper(false);
              setThumbsSwiper(null); // 🛠 Reset thumb swiper
              mainSwiperRef.current?.autoplay?.start();
            }}
          >
            &times;
          </button>

          {showLightboxSwiper && (
            <div className="w-full h-full flex flex-col justify-center items-center gap-4">
              {/* Fullscreen Swiper */}
              <Swiper
                key={`${lightboxOpen}-${startIndex}`}
                initialSlide={startIndex}
                modules={[Navigation, Thumbs]}
                navigation
                loop
                thumbs={{ swiper: thumbsSwiper }}
                onSwiper={(swiper) => (lightboxRef.current = swiper)}
                className="w-full flex-1 max-h-[90vh]"
              >
                {completed.map((ref, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex items-center justify-center h-full"
                  >
                    <div className="flex items-center justify-center h-full w-full">
                      <img
                        src={ref.src}
                        alt={`lightbox-${index}`}
                        className="object-contain max-h-full max-w-full"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Thumbnails */}
              <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={10}
                spaceBetween={10}
                freeMode={true}
                watchSlidesProgress
                className="w-full max-w-6xl"
              >
                {completed.map((ref, index) => (
                  <SwiperSlide key={index} className="cursor-pointer">
                    <img
                      src={ref.src}
                      alt={`thumb-${index}`}
                      className="object-cover h-20 w-full rounded-md border border-white"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      )}</>
  );
};

export default Mattlaggning;
