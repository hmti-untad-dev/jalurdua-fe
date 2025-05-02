export default function VisiMisi() {
  return (
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
        <div className="group color h-fit cursor-pointer rounded-2xl border-[1px] border-black bg-gray-200 p-4 transition-all hover:bg-[#3E3F90] lg:h-fit lg:min-h-[335px] lg:p-5">
          <div>
            <img
              src="./img/pendidikan.png"
              alt="pendidikan"
              className="mx-auto -mt-28 h-40 object-contain transition-all group-hover:-translate-y-4 group-hover:scale-105 group-hover:rotate-2 lg:h-52"
            />
          </div>
          <div className="text">
            <h3 className="font-mons my-4 text-center text-xs font-bold transition-all group-hover:text-white">
              Wadah Pendidikan
            </h3>
            <p className="font-mons text-xs transition-all group-hover:text-white lg:text-base">
              Wadah Pendidikan dibidang informatika cerdas yang berwawasan lingkungan hidup Wadah Penelitian
            </p>
          </div>
        </div>
        <div className="group color h-fit cursor-pointer rounded-2xl border-[1px] border-black bg-gray-200 p-4 transition-all hover:bg-[#3E3F90] lg:h-fit lg:min-h-[335px] lg:p-5">
          <div>
            <img
              src="./img/penelitian.png"
              alt="penelitian"
              className="mx-auto -mt-28 h-40 object-contain transition-all group-hover:-translate-y-4 group-hover:scale-105 group-hover:-rotate-2 lg:h-52"
            />
          </div>
          <div className="text">
            <h3 className="font-mons my-4 text-center text-xs font-bold transition-all group-hover:text-white">
              Wadah Penelitian
            </h3>
            <p className="font-mons text-xs transition-all group-hover:text-white lg:text-base">
              Wadah Penelitian di bidang informatika cerdas yang berwawasan lingkungan hidup menuju pencapaian standar
              internasional
            </p>
          </div>
        </div>
        <div className="group color h-fit cursor-pointer rounded-2xl border-[1px] border-black bg-gray-200 p-4 transition-all hover:bg-[#3E3F90] lg:h-fit lg:min-h-[335px] lg:p-5">
          <div>
            <img
              src="./img/pengabdian.png"
              alt="pengabdian"
              className="mx-auto -mt-28 h-40 object-contain transition-all group-hover:-translate-y-4 group-hover:scale-105 group-hover:rotate-2 lg:h-52"
            />
          </div>
          <div className="text">
            <h3 className="font-mons my-4 text-center text-xs font-bold transition-all group-hover:text-white">
              Wadah Pengabdian
            </h3>
            <p className="font-mons text-xs transition-all group-hover:text-white lg:text-base">
              Wadah Pengabdian kepada masyarakat di bidang informatika cerdas sebagai pemanfaatan hasil pendidikan dan
              hasil penelitian yang dibutuhkan dalam pembangunan masyarakat
            </p>
          </div>
        </div>
        <div className="group color h-fit cursor-pointer rounded-2xl border-[1px] border-black bg-gray-200 p-4 transition-all hover:bg-[#3E3F90] lg:h-fit lg:min-h-[335px] lg:p-5">
          <div>
            <img
              src="./img/kemitraan.png"
              alt="kemitraan"
              className="mx-auto -mt-28 h-40 object-contain transition-all group-hover:-translate-y-4 group-hover:scale-105 group-hover:-rotate-2 lg:h-52"
            />
          </div>
          <div className="text">
            <h3 className="font-mons my-4 text-center text-xs font-bold transition-all group-hover:text-white">
              Wadah Kemitraan
            </h3>
            <p className="font-mons text-xs transition-all group-hover:text-white lg:text-base">
              Menjalin kemitraan secara internal dan eksternal dalam pengembangan dan kemajuan di bidang informatika
              cerdas dengan tetap memperhatikan kearifan lokal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
