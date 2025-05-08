import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { CHAIRMAN, DEPARTMENT_HEADS, DEPUTY_OFFICERS } from "../constants";

export default function LandingOrganization() {
  return (
    <>
      <div className="font-mons mx-auto max-w-screen-2xl bg-[#373435] py-3">
        <h1 className="text-center text-xl font-extrabold text-[#f2f2f2] sm:text-2xl md:text-3xl lg:text-4xl">
          &lsquo; WE MAKE A BETTER FUTURE &rsquo;
        </h1>
      </div>
      <div className="mx-8 pt-14 md:mx-16">
        {/* Header Section */}
        <div className="mb-12 flex items-center justify-between">
          <div className="relative hidden h-24 w-24 md:block">
            <img src="/img/logo-untad.png" alt="Logo Untad" width={100} height={100} className="object-contain" />
          </div>
          <div className="mx-auto text-center md:mx-0">
            <h1 className="font-anton mb-2 text-3xl font-bold md:text-4xl">STRUKTUR KEPENGURUSAN</h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Himpunan Mahasiswa Teknik Informatika Universitas Tadulako
              <br />
              Periode 2025/2026
            </p>
          </div>
          <div className="relative hidden h-24 w-24 md:block">
            <img src="/img/logo-hmti.png" alt="Logo HMTI" width={100} height={100} className="object-contain" />
          </div>
        </div>

        {/* Chairman Section */}
        <div className="mb-16">
          <div className="overflow-hidden rounded-xl bg-blue-50 shadow-md">
            <div className="w-full md:flex">
              <div className="md:w-1/3">
                <div className="relative aspect-[3/4] h-full w-full">
                  <img src={CHAIRMAN.image} alt={CHAIRMAN.title} className="h-full w-full object-cover" />
                  <div className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-sm font-medium">
                    {CHAIRMAN.title}
                  </div>
                </div>
              </div>
              <div className="p-6 md:w-2/3">
                <h2 className="mb-2 text-2xl font-bold">{CHAIRMAN.name}</h2>
                <h3 className="text-muted-foreground mb-4 text-xl italic">{CHAIRMAN.title}</h3>

                <div className="mb-6">
                  <h4 className="my-2 font-semibold">Visi</h4>
                  <p className="text-muted-foreground">
                    <strong>{CHAIRMAN.vision}</strong>
                  </p>
                  <h4 className="my-2 font-semibold">Misi</h4>
                  <ol>
                    {CHAIRMAN.mission?.split(";").map((item, index) => (
                      <li key={index} className="text-muted-foreground">
                        {item.trim()}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex space-x-4">
                  <a href={CHAIRMAN.socialMedia?.instagram} className="hover:text-primary text-gray-600">
                    <InstagramLogo className="h-6 w-6" weight="bold" />
                  </a>
                  <a href={CHAIRMAN.socialMedia?.facebook} className="hover:text-primary text-gray-600">
                    <FacebookLogo className="h-6 w-6" weight="bold" />
                  </a>
                  <a href={CHAIRMAN.socialMedia?.linkedin} className="hover:text-primary text-gray-600">
                    <LinkedinLogo className="h-6 w-6" weight="bold" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deputy Officers Section */}
        <div className="mb-16">
          <div className="grid gap-6 md:grid-cols-2">
            {DEPUTY_OFFICERS.map((officer, index) => (
              <div key={index} className="overflow-hidden rounded-xl bg-blue-50 shadow-md">
                <div className="flex">
                  <div className="relative sm:w-1/3">
                    <div className="relative h-full">
                      <img src={officer.image} alt={officer.title} className="aspect-[3/4] size-full object-cover" />
                    </div>
                  </div>
                  <div className="w-2/3 p-6">
                    <h3 className="mb-1 text-xl font-bold">{officer.name}</h3>
                    <p className="text-muted-foreground italic">{officer.title}</p>
                    <div className="mt-3 flex space-x-4">
                      <a href={CHAIRMAN.socialMedia?.instagram} className="hover:text-primary text-gray-600">
                        <InstagramLogo className="h-6 w-6" weight="bold" />
                      </a>
                      <a href={CHAIRMAN.socialMedia?.facebook} className="hover:text-primary text-gray-600">
                        <FacebookLogo className="h-6 w-6" weight="bold" />
                      </a>
                      <a href={CHAIRMAN.socialMedia?.linkedin} className="hover:text-primary text-gray-600">
                        <LinkedinLogo className="h-6 w-6" weight="bold" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Department Leads Section */}
        <div>
          <h2 className="mb-6 text-2xl font-bold">Kepala Departemen</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DEPARTMENT_HEADS.map((dept, index) => (
              <div key={index} className="overflow-hidden rounded-xl bg-blue-50 shadow-md">
                <div className="flex">
                  <div className="relative w-1/3">
                    <div className="relative h-full">
                      <img src={dept.image} alt={dept.title} className="size-full object-bottom-right" />
                    </div>
                  </div>
                  <div className="w-2/3 p-4">
                    <h3 className="text-lg font-bold">{dept.name}</h3>
                    <p className="text-muted-foreground text-sm italic">{dept.title}</p>
                    <p className="text-muted-foreground pt-2 text-sm">{dept.description}</p>
                    <div className="mt-3 flex space-x-4">
                      <a href={CHAIRMAN.socialMedia?.instagram} className="hover:text-primary text-gray-600">
                        <InstagramLogo className="h-6 w-6" weight="bold" />
                      </a>
                      <a href={CHAIRMAN.socialMedia?.facebook} className="hover:text-primary text-gray-600">
                        <FacebookLogo className="h-6 w-6" weight="bold" />
                      </a>
                      <a href={CHAIRMAN.socialMedia?.linkedin} className="hover:text-primary text-gray-600">
                        <LinkedinLogo className="h-6 w-6" weight="bold" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
