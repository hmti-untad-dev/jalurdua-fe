import { Question } from "@phosphor-icons/react";
import { MISSIONS_DATA, LOGO_MEANINGS_LEFT, LOGO_MEANINGS_RIGHT } from "../constants";

export default function LandingAbout() {
  return (
    <>
      {/* Sejarah */}
      <div className="mx-8 pt-24 md:mx-16" id="about">
        <div className="flex items-center gap-3 pb-8">
          <h1 className="font-anton text-center text-3xl text-[#3E3F90] uppercase md:text-5xl">About</h1>
          <Question size={60} color="#3E3F90" weight="bold" />
        </div>
        <h1 className="font-anton mb-6 text-center text-3xl font-bold text-[#373435] md:text-5xl">SEJARAH</h1>
        <div className="flex flex-wrap will-change-auto lg:flex-nowrap lg:gap-12">
          <div className="container1 relative flex w-full cursor-pointer overflow-hidden md:items-center xl:max-h-[32rem] xl:w-1/2 xl:items-start xl:py-4">
            <img
              className="max-h-80 w-screen justify-center rounded-lg object-cover transition-transform duration-1000"
              id="img-1"
              src="./img/jurusan.jpg"
              alt="jurusan"
            />
          </div>
          <div className="mt-6 w-full lg:mt-0 xl:w-1/2 xl:pt-0">
            <p className="font-mons mb-4 text-justify text-base leading-relaxed font-normal">
              Program Studi S1 Teknik Informatika Universitas Tadulako, lahir dari tonggak bersejarah pada 16 April 2012
              dengan SK Pendirian No. 2428/UN28/LK/2012. Sejak itu, kami menjadi magnet bagi calon mahasiswa, diakui
              melalui Keputusan Menteri No. 092/P/2014 pada 5 Maret 2014. Program Studi ini tidak hanya mencetak
              sarjana, tetapi membentuk pemimpin masa depan di dunia informatika.
            </p>
            <p className="font-mons text-justify text-base leading-relaxed font-normal">
              Minat yang konsisten dari calon mahasiswa melalui SNMPTN dan SBMPTN menjadi cermin keunggulan kami.
              Didukung oleh tim dosen berjumlah 31 orang, Program Studi Teknik Informatika Fakultas Teknik memastikan
              pengembangan ilmu dan keterampilan yang optimal. Prestasi kami semakin mengkilap dengan peringkat
              akreditasi "baik sekali" berdasarkan Keputusan LAM INFOKOM No. 133/SK/LAM-INFOKOM/Ak/S/XXII./2022.
              Bergabunglah dengan kami, di mana sejarah, minat, dan prestasi bersatu dalam meretas masa depan gemilang
              di dunia Teknik Informatika. Selamat bergabung di perjalanan inspiratif kami!
            </p>
          </div>
        </div>
      </div>

      {/* Visi & Misi */}
      <div>
        <h1 className="font-anton p-8 text-center text-3xl font-bold tracking-wider text-[#373435] lg:text-5xl">
          VISI & MISI HIMPUNAN
        </h1>
        <div className="flex justify-center px-8">
          <div className="relative mb-11 w-[579px] cursor-pointer rounded-2xl border-[1px] border-black bg-gray-200 transition-all hover:bg-[#3E3F90] hover:text-white">
            <div className="absolute -top-[18px] -left-[28px] h-fit rounded-full bg-[#3E3F90] p-[14px] text-white lg:p-4">
              <h3 className="text-bold font-mons text-base font-bold lg:text-2xl">VISI</h3>
            </div>
            <p className="font-mons p-7 text-left text-xs lg:p-9 lg:text-base">
              Program Studi S1 Teknik Informatika menjadi Pendidikan tinggi di bidang informatika cerdas yang unggul
              berstandar internasional dalam Pengembangan IPTEKS Berwawasan Lingkungan Hidup di tahun 2025
            </p>
          </div>
        </div>
        <div className="flex justify-center pb-10">
          <div className="h-fit rounded-full bg-[#3E3F90] p-[14px] text-white lg:p-4">
            <h3 className="text-bold font-mons text-center text-base font-bold lg:text-2xl">MISI</h3>
          </div>
        </div>
        <div className="mx-16 grid grid-cols-1 gap-x-10 gap-y-32 py-16 md:grid-cols-2 lg:grid-cols-4">
          {MISSIONS_DATA.map((mission, index) => (
            <div
              key={index}
              className="group color h-full cursor-pointer rounded-2xl border-[1px] border-black bg-gray-200 p-4 transition-all hover:bg-[#3E3F90] lg:min-h-[335px] lg:p-5"
            >
              <div>
                <img
                  src={mission.icon}
                  alt={mission.title.toLowerCase()}
                  className="mx-auto -mt-28 h-40 object-contain transition-all group-hover:-translate-y-4 group-hover:scale-105 group-hover:rotate-2 lg:h-52"
                />
              </div>
              <div className="text">
                <h3 className="font-mons my-4 text-center text-xs font-bold transition-all group-hover:text-white">
                  {mission.title}
                </h3>
                <p className="font-mons text-xs transition-all group-hover:text-white lg:text-base">
                  {mission.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arti Logo */}
      <div className="mx-8 mb-8 flex justify-center lg:mx-16">
        <div>
          <h2 className="font-anton pb-8 text-center text-3xl font-bold text-[#373435] uppercase lg:text-5xl">
            Arti Logo
          </h2>
          <div className="font-mons flex w-full items-center gap-8 rounded-2xl border-[1px] border-black bg-gray-200 p-5 text-base max-lg:flex-col max-lg:text-xs">
            <div className="flex flex-1 flex-col gap-4">
              {LOGO_MEANINGS_LEFT.map((item, index) => (
                <div key={index} className="flex justify-between gap-8">
                  <p>{item.description}</p>
                  {item.color ? (
                    <div className="flex gap-2">
                      <div className={`h-5 w-5 flex-none border border-black ${item.color.bgClass}`}></div>
                      <p className="font-semibold">{item.label}</p>
                    </div>
                  ) : (
                    <p className="font-semibold">{item.label}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex-none">
              <img src="./img/logo-hmti.png" alt="Logo Himpunan" className="item-center max-lg:flex" />
            </div>

            <div className="flex flex-1 flex-col gap-4">
              {LOGO_MEANINGS_RIGHT.map((item, index) => (
                <div key={index} className="flex flex-row-reverse justify-between gap-8 max-lg:flex-row">
                  <p className="text-right max-lg:text-left">{item.description}</p>
                  <p className="font-semibold max-lg:text-right">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
