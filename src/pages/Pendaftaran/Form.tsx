import { Input } from "@/components/ui/input";

export default function Form() {
  return (
    // <div className="flex min-h-screen items-center justify-center bg-white">
    <form
      method="post"
      className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-xl bg-white shadow-lg md:grid-cols-2"
    >
      {/* <!-- Left Content --> */}
      <div className="space-y-4 p-6">
        <div className="p-0">
          <h2 className="text-2xl font-bold">Pendaftaran Algomatik</h2>
        </div>

        <div className="space-y-2">
          <label htmlFor="nim" className="block font-medium">
            Nomor Induk Mahasiswa
          </label>
          <Input
            name="nim"
            id="nim"
            type="text"
            placeholder="F5XXXXXXX"
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="name" className="block font-medium">
            Nama Lengkap
          </label>
          <Input
            name="nama"
            id="name"
            type="text"
            placeholder="Masukkan Nama Lengkap"
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="prodi" className="block font-medium">
            Program Studi
          </label>
          <div className="rounded-lg border px-3 py-2">
            <select name="prodi" id="prodi" className="w-full rounded-lg border-none outline-none">
              <option value="" hidden>
                Pilih Program Studi
              </option>
              <option value="Teknik Informatika">Teknik Informatika</option>
              <option value="Sistem Informasi">Sistem Informasi</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="gender" className="block font-medium">
            Jenis Kelamin
          </label>
          <div className="rounded-lg border px-3 py-2">
            <select name="jk" id="gender" className="w-full rounded-lg border-none outline-none">
              <option value="" hidden>
                Pilih Jenis Kelamin
              </option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="angkatan" className="block font-medium">
            Angkatan
          </label>
          <Input
            name="angkatan"
            id="angkatan"
            type="text"
            placeholder="20XX"
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="wa" className="block font-medium">
            Nomor WA
          </label>
          <Input
            name="no_wa"
            id="wa"
            type="text"
            placeholder="08XXXXXXXXXX"
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="email@gmail.com"
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="alasan" className="block font-medium">
            Alasan
          </label>
          <textarea
            name="alasan"
            id="alasan"
            placeholder="Masukkan Alasan Masuk Himpunan"
            className="w-full rounded-lg border px-3 py-2"
          ></textarea>
        </div>

        <button type="submit" className="w-full rounded-lg bg-blue-600 py-2 text-white">
          Submit!
        </button>
      </div>

      {/* <!-- Right Content --> */}
      <div
        className="mx-auto my-auto hidden rounded-lg bg-cover bg-no-repeat text-white md:block"
        style={{
          backgroundImage: "url('../public/img/algo1.png')",
          backgroundPosition: "center",
          width: "80%",
          height: "740px",
        }}
      ></div>
    </form>
    // </div>
  );
}
