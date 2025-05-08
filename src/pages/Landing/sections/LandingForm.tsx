export default function LandingForm() {
  return (
    <div className="mx-8 py-8 md:mx-16" id="community">
      <h1 className="font-anton mb-6 text-center text-3xl font-bold text-[#3E3F90] md:text-5xl">JOIN US</h1>
      <div className="mx-auto flex flex-col items-center justify-center gap-4 md:w-[600px]">
        <p className="font-mons text-center leading-relaxed font-normal">
          <strong>Algomatik:</strong> Langkah Awal Menuju HMTI UNTAD Algomatik, singkatan dari Algoritma Informatika,
          adalah proses seleksi yang harus dilalui oleh calon anggota Himpunan Mahasiswa Teknik Informatika (HMTI)
          Universitas Tadulako (UNTAD). Algomatik telah berkembang pesat, dan saat ini sudah memasuki Algomatik X, yang
          menandai angkatan kesepuluh dalam perjalanan kami.
        </p>
        <a
          href="/pendaftaran"
          className="flex w-fit items-center gap-3 rounded-xl bg-[#3E3F90] p-3 px-8 transition-all hover:bg-[#333477]"
        >
          <p className="text-lg font-semibold text-white">Daftar 🚀</p>
        </a>
      </div>
    </div>
  );
}
