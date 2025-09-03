import { Question, Usb } from "@phosphor-icons/react";
import { MISSIONS_DATA } from "../constants";

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
          <div className="flex w-full items-center xl:w-1/2">
            <img
              className="w-screen justify-center rounded-lg object-cover"
              id="img-1"
              src="./img/jurusan.jpg"
              alt="jurusan"
            />
          </div>
          <div className="mt-6 w-full lg:mt-0 xl:w-1/2 xl:pt-0">
            <p className="font-mons mb-4 text-justify text-base leading-relaxed font-normal">
              Program Studi S1 Teknik Informatika Universitas Tadulako lahir pada tahun 2012 sebagai bagian dari Jurusan
              Teknik Elektro. Tiga tahun kemudian, tepatnya pada tahun 2015, Jurusan Teknologi Informasi secara resmi
              berdiri di Universitas Tadulako sebagai tonggak baru dalam pengembangan ilmu dan teknologi.
            </p>
            <p className="font-mons mb-4 text-justify text-base leading-relaxed font-normal">
              Seiring dengan berkembangnya program studi, pada 30 Mei 2014 lahirlah Himpunan Mahasiswa Teknik
              Informatika (HMTI UNTAD). Himpunan ini pun menjadi rumah bagi kreativitas, aspirasi, serta perjuangan
              mahasiswa Teknik Informatika.
            </p>
            <p className="font-mons mb-4 text-justify text-base leading-relaxed font-normal">
              Sejak berdiri, HMTI UNTAD menjadi ruang belajar, ruang berkarya, dan ruang tumbuh bagi mahasiswa yang siap
              bersaing di dunia akademik maupun profesional. Berbagai program, kegiatan, dan inovasi terus dilahirkan
              untuk meningkatkan kualitas sumber daya mahasiswa, menciptakan karya inspiratif, serta memperkuat
              solidaritas.
            </p>
            <p className="font-mons text-justify text-base leading-relaxed font-normal">
              Selama 11 tahun berkarya, HMTI UNTAD telah melahirkan talenta berprestasi, karya inovatif, serta alumni
              yang sukses meniti karier profesional. HMTI bukan sekadar himpunan, melainkan keluarga besar yang terus
              bergerak maju, membawa semangat kolaborasi, inovasi, dan inspirasi untuk generasi Teknik Informatika
              Universitas Tadulako.
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
      <section className="mx-8 mb-8 flex justify-center lg:mx-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-anton pb-8 text-center text-3xl font-bold text-[#373435] uppercase lg:text-5xl">
            Arti Logo
          </h2>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
            {/* Left Column - Color Meanings */}
            <div className="order-2 space-y-6 lg:order-1">
              <h3 className="mb-4 text-center text-xl font-semibold lg:text-left">Makna Warna</h3>

              <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="mt-1 h-12 w-12 flex-shrink-0 rounded-md bg-[#3E4095]"></div>
                <div>
                  <div className="font-medium text-[#3E4095]">Biru (3E4095)</div>
                  <p className="text-gray-700">
                    Bermakna kekompakan dan solidaritas yang tidak pernah putus antara anggota himpunan, selalu mendalam
                    dan kuat.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="mt-1 h-12 w-12 flex-shrink-0 rounded-md border border-gray-200 bg-[#FEFEFE]"></div>
                <div>
                  <div className="font-medium">Putih (FEFEFE)</div>
                  <p className="text-gray-700">Bermakna kesetiaan, kepercayaan, pengabdian, dan loyalitas.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="mt-1 h-12 w-12 flex-shrink-0 rounded-md bg-[#373435]"></div>
                <div>
                  <div className="font-medium text-[#373435]">Hitam (373435)</div>
                  <p className="text-gray-700">
                    Bermakna kekuatan dan ketegasan dan juga bermakna sebagai warna persatuan teknik.
                  </p>
                </div>
              </div>
            </div>

            {/* Center Column - Logo */}
            <div className="order-1 flex items-center justify-center lg:order-2">
              <div className="relative h-64 w-64 md:h-80 md:w-80">
                <div className="absolute inset-0 animate-pulse rounded-full bg-blue-100 opacity-20"></div>
                <img
                  src="./img/logo-hmti.png"
                  alt="Logo HMTI UNTAD"
                  width={300}
                  height={300}
                  className="relative z-10 object-contain"
                />
              </div>
            </div>

            {/* Right Column - Element Meanings */}
            <div className="order-3 space-y-6">
              <h3 className="mb-4 text-center text-xl font-semibold lg:text-left">Makna Elemen</h3>

              <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-blue-600">Signal</div>
                  <p className="text-gray-700">Bermakna penghubung dan pemersatu anggota himpunan.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-blue-600">Lingkaran Satelit</div>
                  <p className="text-gray-700">
                    Bermakna Mahasiswa Himpunan selalu aktif dan tidak berhenti untuk berkarya.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-blue-100">
                  <Usb size={24} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-blue-600">USB</div>
                  <p className="text-gray-700">
                    Bermakna HMTI UNTAD bersifat terbuka dan saling berbagi ilmu pengetahuan.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-blue-600">Open Source</div>
                  <p className="text-gray-700">
                    Bermakna HMTI UNTAD menjalin kerjasama atau kolaborasi ke berbagai individu maupun institusi yang
                    sesuai dengan visi dan misi himpunan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
