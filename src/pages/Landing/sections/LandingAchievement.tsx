import { useState, useRef } from "react";
import { ArrowCircleRight, CaretLeft, CaretRight, Trophy } from "@phosphor-icons/react";
import { ACHIEVEMENTS_DATA } from "../constants";

export default function LandingAchievement() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (index: number) => {
    if (slideRef.current) {
      const slideWidth = slideRef.current.offsetWidth;
      slideRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % ACHIEVEMENTS_DATA.length;
    setCurrentIndex(newIndex);
    scrollToSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + ACHIEVEMENTS_DATA.length) % ACHIEVEMENTS_DATA.length;
    setCurrentIndex(newIndex);
    scrollToSlide(newIndex);
  };

  return (
    <>
      <div className="mx-8 flex justify-center pt-24 md:mx-16" id="achievement">
        <div>
          <div className="flex items-center gap-5">
            <h1 className="font-anton text-3xl text-[#3E3F90] uppercase md:text-5xl">Achievement</h1>
            <Trophy size={50} color="#3E3F90" weight="bold" />
          </div>

          <div className="flex flex-col gap-10 pt-5 md:pt-10 lg:flex-row lg:justify-between">
            {/* Description Section */}
            <div className="w-auto lg:w-1/2">
              <div className="pb-7">
                <h2 className="w-fit text-[25px] font-bold">{ACHIEVEMENTS_DATA[currentIndex].title}</h2>
                <p className="pt-4 text-base">{ACHIEVEMENTS_DATA[currentIndex].description}</p>
              </div>
              {/* <a
                href="#"
                className="flex w-fit items-center gap-3 rounded-lg bg-[#3E3F90] p-3 px-8 transition-all hover:bg-[#333477]"
              >
                <p className="text-lg font-semibold text-white">Detail</p>
              </a> */}
            </div>

            {/* Image Slider */}
            <div className="relative w-auto overflow-hidden lg:w-1/2">
              <div className="relative h-full w-full">
                <div ref={slideRef} className="flex h-full w-full overflow-x-hidden transition-all duration-500">
                  {ACHIEVEMENTS_DATA.map((slide) => (
                    <div key={slide.id} className="w-full flex-shrink-0">
                      <img src={slide.image} alt={slide.title} className="h-full w-full rounded-[10px]" />
                    </div>
                  ))}
                </div>

                {/* Prev Button */}
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-3 -translate-y-1/2 rounded-lg bg-[#00000051] p-2 text-white duration-300 hover:bg-[#3E3F90]"
                >
                  <CaretLeft size={16} weight="bold" />
                </button>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-lg bg-[#00000051] p-2 text-white duration-300 hover:bg-[#3E3F90]"
                >
                  <CaretRight size={16} weight="bold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* See More Section */}
      <div className="group mx-auto flex min-h-full w-fit items-center justify-center gap-2 p-8 text-[#3E3F90]">
        <p className="cursor-pointer font-bold group-hover:underline">See more!</p>
        <ArrowCircleRight size={24} className="text-[#3E3F90] transition-all group-hover:translate-x-1" />
      </div>
    </>
  );
}
