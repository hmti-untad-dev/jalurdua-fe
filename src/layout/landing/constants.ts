import { InstagramLogo, LinkedinLogo, TiktokLogo, YoutubeLogo } from "@phosphor-icons/react";

interface INavLink {
  href: string;
  label: string;
}

interface ISocialMedia {
  href: string;
  Icon: React.ElementType;
}

interface IContactInfo {
  label: string;
  value: string;
}

interface INavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: INavLink[] = [
  { href: "#about", label: "About" },
  { href: "#achievement", label: "Achievement" },
  { href: "#dokumentasi", label: "Dokumentasi" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Contact Us" },
];

export const SOCIAL_MEDIA: ISocialMedia[] = [
  { href: "https://www.instagram.com/hmtiuntad/", Icon: InstagramLogo },
  { href: "https://www.tiktok.com/@hmtiuntad", Icon: TiktokLogo },
  { href: "https://www.youtube.com/@hmtiuntad8514", Icon: YoutubeLogo },
  { href: "https://www.linkedin.com/company/hmtiuntad", Icon: LinkedinLogo },
];

export const CONTACT_INFO: IContactInfo[] = [
  { label: "Telepon", value: "+62 821-9688-2243" },
  { label: "Email", value: "hmti.untad@gmail.com" },
  {
    label: "Alamat",
    value: "Sekretariat Himpunan Mahasiswa Teknik Informatika, Tondo, Kec. Palu Tim., Kota Palu, Sulawesi Tengah 94148",
  },
];
