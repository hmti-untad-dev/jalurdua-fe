import { CaretDown, ChatCircle, PaperPlaneTilt } from "@phosphor-icons/react";
import { FAQ_DATA } from "../constants";
import { Link } from "react-router";

export default function LandingFAQ() {
  return (
    <div id="faq" className="bg-[#3E3F90] pt-24 pb-20 text-center md:px-7">
      <div className="flex justify-center pb-4">
        <h1 className="text-4xl font-bold text-white">FAQs</h1>
        <div className="pl-4">
          <ChatCircle size={40} color="white" weight="bold" />
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

        {FAQ_DATA.map((faq, index) => (
          <details key={index} className="gap-16 bg-[#3E3F90]">
            <summary className="flex justify-between border-b-2 py-3 text-left font-bold text-white">
              {faq.question}
              <CaretDown size={20} color="white" weight="bold" />
            </summary>
            <p className="pt-2 text-left text-white">{faq.answer}</p>
          </details>
        ))}

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
            <Link
              to="https://wa.me/send/?phone=6282196882243&text=Halo+Kakk%2C+izin+bertanyaaa+...&type=phone_number&app_absent=0"
              type="submit"
              className="absolute end-2.5 bottom-2.5 rounded-lg bg-[#3E3F90] px-4 py-2 text-sm font-medium text-white hover:bg-[#2d2e70] focus:ring-4 focus:ring-blue-300 focus:outline-none"
            >
              <PaperPlaneTilt size={15} weight="fill" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
