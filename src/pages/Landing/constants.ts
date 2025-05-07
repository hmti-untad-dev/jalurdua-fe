interface IFaqItem {
  question: string;
  answer: string;
}

type IDocumentationItem = {
  image: string;
  title: string;
  description: string;
  link: string;
};

interface AchievementItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface IMissionItem {
  icon: string;
  title: string;
  description: string;
}

interface ILogoMeaningItem {
  description: string;
  label: string;
  color?: {
    hex: string;
    bgClass: string;
  };
}

export const FAQ_DATA: IFaqItem[] = [
  {
    question: "Password Wifi Jurusan?",
    answer: "Apaya",
  },
  {
    question: "Urus Ini Dimana?",
    answer: "Disana",
  },
  {
    question: "Siapa Kepala Jurusan?",
    answer: "Siapaya",
  },
  {
    question: "Ruang Administrasi Dimana?",
    answer: "Dimana Saja",
  },
  {
    question: "Blup Blup Blup?",
    answer: "Blep Blep Blep",
  },
];

export const DOCUMENTATIONS_DATA: IDocumentationItem[] = [
  {
    image: "/img/a.png",
    title: "Dokumentasi & Informasi",
    description: "Dokumentasi Kegiatan Desa Binaan di Desa Dongi Dongi, Tapal Batas Kab Sigi dan Kab Poso",
    link: "#",
  },
  {
    image: "/img/b.png",
    title: "Dokumentasi & Informasi",
    description: "Dokumentasi Kegiatan Pengenalan Lomba Gemastik di Hall Arsitek Fakultas Teknik",
    link: "#",
  },
  {
    image: "/img/c.png",
    title: "Dokumentasi & Informasi",
    description: "Dokumentasi Pengurus Himpunan Mahasiswa Teknik Informatika periode 2023-2024",
    link: "#",
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 1,
    title: "Best Innovation PROXO 2024",
    description:
      "Tim Recyle Mart berhasil meraih juara pertama dalam kategori Best Innovation and Impact Full pada lomba web app!",
    image: "/img/proxo.jpg",
  },
  {
    id: 2,
    title: "PERMITECH EXPO 2024!",
    description:
      "Perwakilan HMTI UNTAD telah berhasil meraih prestasi gemilang di ajang PERMITECH EXPO 2024! 🎉 Juara 1 Lomba UI/UX 🎉 Juara 3 Lomba Video Kreatif",
    image: "/img/permikomnas.JPG",
  },
  {
    id: 3,
    title: "Finalis LIDM 2024",
    description:
      "Selamat untuk Widya Ayunindya Poge dan tim Pixelpals atas prestasi luar biasa menjadi salah satu finalis dari 20 tim terbaik se-Indonesia di ajang LIDM 2024! 🎉",
    image: "/img/lidm.jpeg",
  },
];

export const MISSIONS_DATA: IMissionItem[] = [
  {
    icon: "./img/pendidikan.png",
    title: "Wadah Pendidikan",
    description: "Wadah Pendidikan dibidang informatika cerdas yang berwawasan lingkungan hidup Wadah Penelitian",
  },
  {
    icon: "./img/penelitian.png",
    title: "Wadah Penelitian",
    description:
      "Wadah Penelitian di bidang informatika cerdas yang berwawasan lingkungan hidup menuju pencapaian standar internasional",
  },
  {
    icon: "./img/pengabdian.png",
    title: "Wadah Pengabdian",
    description:
      "Wadah Pengabdian kepada masyarakat di bidang informatika cerdas sebagai pemanfaatan hasil pendidikan dan hasil penelitian yang dibutuhkan dalam pembangunan masyarakat",
  },
  {
    icon: "./img/kemitraan.png",
    title: "Wadah Kemitraan",
    description:
      "Menjalin kemitraan secara internal dan eksternal dalam pengembangan dan kemajuan di bidang informatika cerdas dengan tetap memperhatikan kearifan lokal",
  },
];

export const LOGO_MEANINGS_LEFT: ILogoMeaningItem[] = [
  {
    description:
      "Bermakna Kekompakan dan solidaritas yang tidak pernah putus antara anggota himpunan, selalu mendalam dan kuat.",
    label: "Lingkaran",
  },
  {
    description: "Bermakna kesetiaan, kepercayaan, pengabdian, dan loyalitas.",
    label: "3E4095",
    color: {
      hex: "3E4095",
      bgClass: "bg-blue-800",
    },
  },
  {
    description: "Bermakna kedamaian, pencapaian diri, kesederhanaan, dan keamanan.",
    label: "FEFEFE",
    color: {
      hex: "FEFEFE",
      bgClass: "bg-white",
    },
  },
  {
    description: "Bermakna Kekuatan dan Ketegasan dan juga bermakna sebagai warna persatuan teknik.",
    label: "373435",
    color: {
      hex: "373435",
      bgClass: "bg-black",
    },
  },
];

export const LOGO_MEANINGS_RIGHT: ILogoMeaningItem[] = [
  {
    description: "Bermakna penghubung dan pemersatu anggota himpunan.",
    label: "Signal",
  },
  {
    description: "Bermakna Mahasiswa Himpunan selalu aktif dan tidak berhenti untuk berkarya.",
    label: "Lingkaran Satelit",
  },
  {
    description: "Bermakna HMTI UNTAD bersifat terbuka dan saling berbagi ilmu pengetahuan.",
    label: "USB",
  },
  {
    description:
      "Bermakna HMTI UNTAD menjalin kerjasama atau kolaborasi ke berbagai individu maupun institusi yang sesuai dengan visi dan misi himpunan.",
    label: "Open Source",
  },
];
