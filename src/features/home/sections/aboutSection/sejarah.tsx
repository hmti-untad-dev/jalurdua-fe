export default function Sejarah() {
  return (
    <div className="mx-8 pt-24 md:mx-16" id="about">
      <div className="flex items-center gap-3 pb-8">
        <h1 className="font-anton text-center text-3xl text-[#3E3F90] uppercase md:text-5xl">About</h1>
        <svg className="h-8 w-8 md:h-12 md:w-12" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="22.5" stroke="#3E3F90" stroke-width="5" />
          <path
            d="M27.9181 20.7266L27.9173 20.7271L25.2798 22.2115L25.2795 22.2116C24.437 22.6864 23.7364 23.3432 23.248 24.1273C22.7592 24.912 22.5 25.7971 22.5 26.7007V26.7007V26.7774C22.5 28.083 23.6816 29.0303 25 29.0303C26.3184 29.0303 27.5 28.083 27.5 26.7774V26.7007C27.5 26.4545 27.6447 26.1935 27.9337 26.0294C27.9339 26.0293 27.934 26.0292 27.9341 26.0292L30.5702 24.5455L30.571 24.5451C32.9952 23.1751 34.5 20.801 34.5 18.2103V18.0131C34.5 13.8044 30.6309 10.5017 26 10.5017L24 10.5017L23.9994 10.5017C19.369 10.5074 15.5 13.8098 15.5 18.0186C15.5 19.3242 16.6816 20.2715 18 20.2715C19.3184 20.2715 20.5 19.3242 20.5 18.0186C20.5 16.421 22.0059 15.0129 24 15.0129H26C27.9941 15.0129 29.5 16.421 29.5 18.0186V18.2158C29.5 19.2082 28.923 20.1635 27.9181 20.7266ZM25 36.0472C25.7759 36.0472 26.5312 35.7776 27.0973 35.2814C27.6656 34.7834 28 34.0927 28 33.3561C28 32.6195 27.6656 31.9288 27.0973 31.4308C26.5312 30.9346 25.7759 30.665 25 30.665C24.2241 30.665 23.4688 30.9346 22.9027 31.4308C22.3344 31.9288 22 32.6195 22 33.3561C22 34.0927 22.3344 34.7834 22.9027 35.2814C23.4688 35.7776 24.2241 36.0472 25 36.0472Z"
            fill="#3E3F90"
            stroke="#3E3F90"
          />
        </svg>
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
            melalui Keputusan Menteri No. 092/P/2014 pada 5 Maret 2014. Program Studi ini tidak hanya mencetak sarjana,
            tetapi membentuk pemimpin masa depan di dunia informatika.
          </p>
          <p className="font-mons text-justify text-base leading-relaxed font-normal">
            Minat yang konsisten dari calon mahasiswa melalui SNMPTN dan SBMPTN menjadi cermin keunggulan kami. Didukung
            oleh tim dosen berjumlah 31 orang, Program Studi Teknik Informatika Fakultas Teknik memastikan pengembangan
            ilmu dan keterampilan yang optimal. Prestasi kami semakin mengkilap dengan peringkat akreditasi "baik
            sekali" berdasarkan Keputusan LAM INFOKOM No. 133/SK/LAM-INFOKOM/Ak/S/XXII./2022. Bergabunglah dengan kami,
            di mana sejarah, minat, dan prestasi bersatu dalam meretas masa depan gemilang di dunia Teknik Informatika.
            Selamat bergabung di perjalanan inspiratif kami!
          </p>
        </div>
      </div>
    </div>
  );
}
