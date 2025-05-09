import { useState } from "react";
import { NAV_LINKS } from "./constants";

export default function LandingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="font-mons sticky top-5 z-50 mx-4 flex h-[55px] items-center justify-between rounded-[25px] bg-[#3E3F90] px-[32px] py-3 text-white drop-shadow-2xl lg:mx-8">
        <a className="flex items-center gap-3 text-xl font-extrabold" href="#">
          <img src="./img/logo-hmti.png" alt="logo" width="37.06px" height="37px" />
          <p>HMTI UNTAD</p>
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center p-3 text-white" onClick={toggleMenu}>
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="g:space-x-6 relative left-0 hidden gap-9 text-[16px] font-semibold lg:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a className="text-sm hover:underline hover:decoration-2 hover:underline-offset-8" href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`navbar-menu relative z-50 ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="navbar-backdrop fixed inset-0 bg-[#3E3F90] opacity-25" onClick={closeMenu}></div>
        <nav className="fixed top-0 bottom-0 left-0 flex w-5/6 max-w-sm flex-col overflow-y-auto bg-[#3E3F90] px-6 py-6 text-white">
          <div className="font-mons mb-8 flex items-center">
            <a className="mr-auto leading-none font-extrabold" href="#">
              <div className="flex items-center gap-4 text-xl">
                <img src="./img/logo-hmti.png" alt="logo" width="37.06px" height="37px" />
                <p>HMTI UNTAD</p>
              </div>
            </a>
            <button className="navbar-close" onClick={closeMenu}>
              <svg
                className="text-white-400 h-6 w-6 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href} className="mb-1">
                  <a
                    className="font-mons block rounded p-4 text-base font-semibold hover:font-bold"
                    href={href}
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
