import { PaperPlaneTilt } from "@phosphor-icons/react";

export default function Faq() {
  return (
    <div id="faq" className="bg-[#3E3F90] pt-24 pb-20 text-center md:px-7">
      <div className="flex justify-center pb-4">
        <h1 className="text-4xl font-bold text-white">FAQs</h1>
        <div className="pl-4">
          <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="23" stroke="#F2F2F2" stroke-width="4" />
            <path
              d="M25.25 11C23.3865 11 21.9615 12.425 21.9615 14.2885V20.8654C21.9615 22.7288 23.3865 24.1538 25.25 24.1538H31.8269L36.2115 28.5385V24.1538C38.075 24.1538 39.5 22.7288 39.5 20.8654V14.2885C39.5 12.425 38.075 11 36.2115 11H25.25ZM29.8407 14.2885H31.7239L33.5742 20.8654H31.93L31.4838 19.2212H29.8396L29.4296 20.8654H27.9904L29.8407 14.2885ZM30.7308 15.3846C30.6212 15.8231 30.4984 16.358 30.3877 16.6868L30.0807 18.125H31.3819L31.0728 16.6858C30.8546 16.358 30.7308 15.8231 30.7308 15.3846ZM14.2885 21.9615C12.425 21.9615 11 23.3865 11 25.25V31.8269C11 33.6904 12.425 35.1154 14.2885 35.1154V39.5L18.6731 35.1154H25.25C27.1135 35.1154 28.5385 33.6904 28.5385 31.8269V25.25H25.25C23.1673 25.25 21.5165 23.825 20.9684 21.9615H14.2885ZM19.3242 25.147C21.1877 25.147 22.0646 26.6816 22.0646 28.4354C22.0646 29.97 21.5373 30.9434 20.6604 31.3819C21.0989 31.6011 21.6184 31.7173 22.1665 31.8269L21.7566 32.9231C20.9893 32.7038 20.1934 32.3618 19.4261 32.0319C19.3165 31.9223 19.1247 31.93 19.0151 31.93C17.6997 31.8203 16.4808 30.7308 16.4808 28.5385C16.4808 26.675 17.5703 25.147 19.3242 25.147ZM19.3242 26.3462C18.4473 26.3462 18.022 27.3327 18.022 28.5385C18.022 29.8538 18.4473 30.7308 19.3242 30.7308C20.2011 30.7308 20.6593 29.7442 20.6593 28.5385C20.6593 27.3327 20.2011 26.3462 19.3242 26.3462Z"
              fill="#F2F2F2"
            />
          </svg>
        </div>
      </div>

      <div className="nowrap flex justify-center gap-2">
        <div>
          <hr className="h-1 w-5 rounded-lg border-0 bg-white" />
        </div>
        <div>
          <hr className="h-1 w-32 rounded-lg border-0 bg-white" />
        </div>
        <div>
          <hr className="h-1 w-5 rounded-lg border-0 bg-white" />
        </div>
      </div>

      <div className="relative flex flex-col justify-center gap-2 px-10 pt-2 xl:px-96">
        <h3 className="text-xl font-bold text-white">Beberapa pertanyaan yang sering ditanyakan</h3>
        <details className="gap-16 bg-[#3E3F90]">
          <summary className="flex justify-between border-b-2 py-3 text-left font-bold text-white">
            Password Wifi Jurusan?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </summary>
          <p className="pt-2 text-left text-white">Apaya</p>
        </details>

        <details className="gap-16 bg-[#3E3F90]">
          <summary className="flex justify-between border-b-2 py-3 text-left font-bold text-white">
            Urus Ini Dimana?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </summary>
          <p className="pt-2 text-left text-white">Disana</p>
        </details>

        <details className="gap-16 bg-[#3E3F90]">
          <summary className="flex justify-between border-b-2 py-3 text-left font-bold text-white">
            Siapa Kepala Jurusan?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </summary>
          <p className="pt-2 text-left text-white">Siapaya</p>
        </details>

        <details className="gap-16 bg-[#3E3F90]">
          <summary className="flex justify-between border-b-2 py-3 text-left font-bold text-white">
            Ruang Administrasi Dimana?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </summary>
          <p className="pt-2 text-left text-white">Dimana Saja</p>
        </details>

        <details className="gap-16 bg-[#3E3F90]">
          <summary className="flex justify-between border-b-2 py-3 text-left font-bold text-white">
            Blup Blup Blup?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </summary>
          <p className="pt-2 text-left text-white">Blep Blep Blep</p>
        </details>

        <h3 className="pt-5 pb-2 text-xl font-bold text-white">Ingin Bertanya Sesuatu?</h3>
        <form>
          <label className="sr-only mb-2 text-sm font-medium text-gray-900">Ketik pertanyaan anda</label>
          <div className="relative">
            <input
              type="search"
              id="search"
              className="block w-full rounded-lg border border-gray-600 bg-white p-4 text-sm text-black placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Ketik Pertanyaan Anda"
              required
            />
            <button
              type="submit"
              className="absolute end-2.5 bottom-2.5 rounded-lg bg-[#3E3F90] px-4 py-2 text-sm font-medium text-white hover:bg-[#2d2e70] focus:ring-4 focus:ring-blue-300 focus:outline-none"
            >
              <PaperPlaneTilt size={15} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
