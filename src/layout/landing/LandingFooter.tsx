import { CONTACT_INFO, NAV_LINKS, SOCIAL_MEDIA } from "./constants";

export default function LandingFooter() {
  return (
    <div className="bg-[#222222] px-8 py-10 text-[#F2F2F2] md:px-16" id="contact">
      <div className="flex flex-nowrap justify-normal gap-7 pb-5">
        <img className="max-h-16 max-w-16" src="./img/logo-untad.png" alt="" />
        <img className="max-h-16 max-w-16" src="./img/logo-hmti.png" alt="" />
      </div>
      <div className="flex flex-col flex-wrap justify-normal sm:flex-row sm:flex-nowrap sm:justify-between">
        <div>
          <h2 className="w-fit text-base font-semibold lg:text-2xl">
            HIMPUNAN MAHASISWA TEKNIK INFORMATIKA UNIVERSITAS TADULAKO
          </h2>
          <p className="pb-3 text-sm font-light sm:pb-5 lg:text-base">Palu, 2025</p>
          <ul className="flex flex-wrap gap-6 text-sm font-semibold md:block lg:text-base">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href} className="pb-3 underline underline-offset-4">
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="space-y-2 pb-5 sm:text-end">
            {CONTACT_INFO.map(({ label, value }) => (
              <div key={label}>
                <li className="text-base font-medium lg:text-xl">{label}</li>
                <p className="text-sm font-light lg:text-base">{value}</p>
              </div>
            ))}
            <iframe
              className="h-36 w-fit"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1465.4168217482325!2d119.89283360434703!3d-0.8423630391117937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8be95ab666d92b%3A0xe17eb36c6c793bb4!2sLaboratorium%20Teknik%20Informatika%20UNTAD!5e0!3m2!1sid!2sid!4v1722998192202!5m2!1sid!2sid"
              width="600"
              height="450"
              style={{ border: 0 }}
            />
          </ul>
        </div>
      </div>
      <hr className="pb-6" />
      <div className="flex flex-col items-center justify-between gap-4 text-[#F2F2F2] lg:flex-row">
        <span className="text-sm font-medium lg:text-base">
          &copy; 2025 Himpunan Mahasiswa Teknik Informatika - Universitas Tadulako. All rights reserved.*
        </span>
        <div className="flex flex-col items-center gap-x-2 gap-y-2 sm:flex-row">
          <span className="text-justify text-lg font-medium whitespace-nowrap">Follow Us !</span>
          <div className="flex flex-row flex-nowrap items-center justify-center gap-2 lg:justify-start">
            {SOCIAL_MEDIA.map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 content-center rounded-full border-2 border-solid border-white p-2 align-middle duration-300 hover:scale-110 sm:h-10 sm:w-10"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
