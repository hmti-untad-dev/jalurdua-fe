export default function Navbar() {
  return (
    <>
      <nav className="font-mons sticky top-5 z-50 mx-4 flex h-[55px] items-center justify-between rounded-[25px] bg-[#3E3F90] px-[32px] py-3 text-white drop-shadow-2xl lg:mx-8">
        <a className="flex items-center gap-3 text-xl font-extrabold" href="#">
          <img src="../../public/images/logo-hmti.png" alt="logo" width="37.06px" height="37px" />
          <p>HMTI UNTAD</p>
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center p-3 text-white">
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="g:space-x-6 relative left-0 hidden gap-9 text-[16px] font-semibold lg:flex">
          <li>
            <a className="text-sm hover:underline hover:decoration-2 hover:underline-offset-8" href="#about">
              About
            </a>
          </li>

          <li>
            <a className="text-sm hover:underline hover:decoration-2 hover:underline-offset-8" href="#achivement">
              Achivement
            </a>
          </li>

          <li>
            <a className="text-sm hover:underline hover:decoration-2 hover:underline-offset-8" href="#dokumentasi">
              Dokumentasi
            </a>
          </li>

          <li>
            <a className="text-sm hover:underline hover:decoration-2 hover:underline-offset-8" href="#faq">
              FAQs
            </a>
          </li>

          <li>
            <a className="text-sm hover:underline hover:decoration-2 hover:underline-offset-8" href="#contact">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-[#3E3F90] opacity-25"></div>
        <nav className="fixed top-0 bottom-0 left-0 flex w-5/6 max-w-sm flex-col overflow-y-auto bg-[#3E3F90] px-6 py-6 text-white">
          <div className="font-mons mb-8 flex items-center">
            <a className="mr-auto leading-none font-extrabold" href="#">
              <div className="flex items-center gap-4 text-xl">
                <img src="../../public/images/logo-hmti.png" alt="logo" width="37.06px" height="37px" />
                <p>HMTI UNTAD</p>
              </div>
            </a>
            <button className="navbar-close">
              <svg
                className="text-white-400 h-6 w-6 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a className="font-mons block rounded p-4 text-base font-semibold hover:font-bold" href="#about">
                  About
                </a>
              </li>
              <li className="mb-1">
                <a className="font-mons block rounded p-4 text-base font-semibold hover:font-bold" href="#achivement">
                  Achivement
                </a>
              </li>
              <li className="mb-1">
                <a className="font-mons block rounded p-4 text-base font-semibold hover:font-bold" href="#dokumentasi">
                  Dokumentasi
                </a>
              </li>
              <li className="mb-1">
                <a className="font-mons block rounded p-4 text-base font-semibold hover:font-bold" href="#faq">
                  FAQs
                </a>
              </li>
              <li className="mb-1">
                <a className="font-mons block rounded p-4 text-base font-semibold hover:font-bold" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
