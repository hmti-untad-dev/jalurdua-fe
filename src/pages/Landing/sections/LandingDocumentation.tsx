import { ArrowCircleRight, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { DOCUMENTATIONS_DATA } from "../constants";

export default function LandingDocumentation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mengatur interval untuk slide otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % DOCUMENTATIONS_DATA.length);
    }, 3000); // 3 detik

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % DOCUMENTATIONS_DATA.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + DOCUMENTATIONS_DATA.length) % DOCUMENTATIONS_DATA.length);
  };

  return (
    <section id="dokumentasi" className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {DOCUMENTATIONS_DATA.map((slide, index) => (
          <div
            key={index}
            className="flex h-screen w-full flex-shrink-0 items-center bg-cover bg-center p-4 text-white md:p-16"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="w-fit space-y-4 rounded-lg bg-[#00000092] p-7">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold md:text-3xl">{slide.title}</h2>
                <p className="w-80 text-lg">{slide.description}</p>
              </div>
              <div className="group flex min-h-full w-fit items-center justify-center gap-1 text-white">
                <a href={slide.link} className="cursor-pointer font-bold group-hover:underline">
                  Detail
                </a>
                <ArrowCircleRight size={24} className="text-white transition-all group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Next dan Previous */}
      <div className="absolute top-1/2 flex w-full -translate-y-1/2 transform justify-between px-4">
        <button onClick={prevSlide} className="rounded-lg bg-black/50 p-2 text-white hover:bg-black/70">
          <CaretLeft size={16} weight="bold" />
        </button>
        <button onClick={nextSlide} className="rounded-lg bg-black/50 p-2 text-white hover:bg-black/70">
          <CaretRight size={16} weight="bold" />
        </button>
      </div>
    </section>
  );
}
