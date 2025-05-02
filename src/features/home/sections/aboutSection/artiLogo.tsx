export default function ArtiLogo() {
  return (
    <div className="mx-8 mb-8 flex justify-center lg:mx-16">
      <div>
        <h2 className="font-anton pb-8 text-center text-3xl font-bold text-[#373435] uppercase lg:text-5xl">
          Arti Logo
        </h2>
        <div className="font-mons flex w-full items-center gap-8 rounded-2xl border-[1px] border-black bg-gray-200 p-5 text-base max-lg:flex-col max-lg:text-xs">
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex justify-between gap-8">
              <p>
                Bermakna Kekompakan dan solidaritas yang tidak pernah putus antara anggota himpunan, selalu mendalam dan
                kuat.
              </p>
              <p className="font-semibold">Lingkaran</p>
            </div>
            <div className="flex justify-between gap-8">
              <p>Bermakna kesetiaan, kepercayaan, pengabdian, dan loyalitas.</p>
              <div className="flex gap-2">
                <div className="h-5 w-5 flex-none border border-black bg-blue-800"></div>
                <p className="font-semibold">3E4095</p>
              </div>
            </div>
            <div className="flex justify-between gap-8">
              <p>Bermakna kedamaian, pencapaian diri, kesederhanaan, dan keamanan.</p>
              <div className="flex gap-2">
                <div className="h-5 w-5 flex-none border border-black bg-white"></div>
                <p className="font-semibold">FEFEFE</p>
              </div>
            </div>
            <div className="flex justify-between gap-8">
              <p>Bermakna Kekuatan dan Ketegasan dan juga bermakna sebagai warna persatuan teknik.</p>
              <div className="flex gap-2">
                <div className="h-5 w-5 flex-none border border-black bg-black"></div>
                <p className="font-semibold">373435</p>
              </div>
            </div>
          </div>
          <div className="flex-none">
            <img src="./img/logo-hmti.png" alt="Logo Himpunan " className="item-center max-lg:flex" />
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex flex-row-reverse justify-between gap-8 max-lg:flex-row">
              <p className="text-right max-lg:text-left">Bermakna penghubung dan pemersatu anggota himpunan.</p>
              <p className="font-semibold max-lg:text-right">Signal</p>
            </div>
            <div className="flex flex-row-reverse justify-between gap-8 max-lg:flex-row">
              <p className="text-right max-lg:text-left">
                Bermakna Mahasiswa Himpunan selalu aktif dan tidak berhenti untuk berkarya.
              </p>
              <p className="font-semibold max-lg:text-right">Lingkaran Satelit</p>
            </div>
            <div className="flex flex-row-reverse justify-between gap-8 max-lg:flex-row">
              <p className="text-right max-lg:text-left">
                Bermakna HMTI UNTAD bersifat terbuka dan saling berbagi ilmu pengetahuan.
              </p>
              <p className="font-semibold max-lg:text-right">USB</p>
            </div>
            <div className="flex flex-row-reverse justify-between gap-8 max-lg:flex-row">
              <p className="text-right max-lg:text-left">
                Bermakna HMTI UNTAD menjalin kerjasama atau kolaborasi ke berbagai individu maupun institusi yang sesuai
                dengan visi dan misi himpunan.
              </p>
              <p className="font-semibold max-lg:text-right">Open Source</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
