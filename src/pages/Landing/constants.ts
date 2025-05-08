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

interface IOrganizationMember {
  title: string;
  name: string;
  image: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
  vision?: string;
  mission?: string;
}

interface IDepartmentHead extends IOrganizationMember {
  department: string;
  description: string;
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

export const CHAIRMAN: IOrganizationMember = {
  title: "Ketua Himpunan",
  name: "Ahmad Afil",
  image: "/img/pengurus/1.png",
  vision: '"Menjadikan HMTI UNTAD sebagai wadah aspirasi, kolaborasi, dan pengembangan potensi mahasiswa."',
  mission:
    "1. Mengadakan kegiatan yang relevan dan selalu mendapat dukungan dari pihak jurusan; 2. Mempererat hubungan antaranggota dan masyarakat HMTI UNTAD untuk menciptakan solidaritas yang kuat; 3. Menjalin kerja sama strategis dengan individu atau organisasi atau komunitas baik di dalam maupun di luar kampus; 4. Meningkatkan kompetensi dan memberdayakan sumber daya manusia dalam HMTI UNTAD; 5. Menciptakan Lingkungan yang nyaman di setiap sekret HMTI UNTAD",
  socialMedia: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },
};

export const DEPUTY_OFFICERS: IOrganizationMember[] = [
  {
    title: "Ketua 1",
    name: "Afdal Maedja",
    image: "/img/pengurus/4.png",
    socialMedia: { instagram: "#", facebook: "#", linkedin: "#" },
  },
  {
    title: "Ketua 2",
    name: "Hidayatul Fatwa",
    image: "/img/pengurus/5.png",
    socialMedia: { instagram: "#", facebook: "#", linkedin: "#" },
  },
  {
    title: "Sekretaris Umum",
    name: "Pradigta",
    image: "/img/pengurus/2.png",
    socialMedia: { instagram: "#", facebook: "#", linkedin: "#" },
  },
  {
    title: "Bendahara Umum",
    name: "Irma Sitti Rahma",
    image: "/img/pengurus/3.png",
    socialMedia: { instagram: "#", facebook: "#", linkedin: "#" },
  },
];

export const DEPARTMENT_HEADS: IDepartmentHead[] = [
  {
    department: "Kesekretariatan",
    title: "Kepala Departemen Kesekretariatan",
    name: "Andi Amanda A.T",
    description: "Merupakan departemen yang bertanggung jawab memanajemen Internal Himpunan.",
    image: "/img/pengurus/6.png",
    socialMedia: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    department: "Intelektual",
    title: "Kepala Departemen Intelektual",
    name: "Rizka Annisa",
    description: "Merupakan	departemen	yang	bertanggung	jawab	memanajemen Pengembangan Sumber Daya Manusia Dan Teknologi.",
    image: "/img/pengurus/7.png",
    socialMedia: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    department: "Kaderisasi",
    title: "Kepala Departemen Kaderisasi",
    name: "Hairul",
    description:
      "Merupakan departemen yang berperan meningkatkan kualitas dan kompetensi kader agar lebih baik, sehingga mampu berperan aktif dalam HMTI UNTAD.",
    image: "/img/pengurus/8.png",
    socialMedia: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    department: "Humas",
    title: "Kepala Departemen Humas",
    name: "I Kadek Ardi Septadana",
    description: "Merupakan departemen yang bertanggung jawab memanajemen Hubungan Masyarakat dan Media Informasi.",
    image: "/img/pengurus/10.png",
    socialMedia: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    department: "Kreatifitas",
    title: "Kepala Departemen Kreatifitas",
    name: "Muh. Risky",
    description: "Merupakan departemen yang bertanggung jawab memanajemen Sumber Daya gagasan yang inovatif.",
    image: "/img/pengurus/11.png",
    socialMedia: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    department: "Kewirausahaan",
    title: "Kepala Departemen Kewirausahaan",
    name: "Miftahul Zannah",
    description: "Merupakan departemen yang bertanggung jawab memanajemen Kewirausahan.",
    image: "/img/pengurus/9.png",
    socialMedia: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
];
