import WrapperLayout from "./components/layout/WrapperLayout";
import Achievement from "./features/home/sections/Achievment";
import Documentation from "./features/home/sections/Documentation";
import Sejarah from "./features/home/sections/aboutSection/sejarah";
import VisiMisi from "./features/home/sections/aboutSection/visiMisi";
import Faq from "./features/home/sections/faq";
import ArtiLogo from "./features/home/sections/aboutSection/artiLogo";

function App() {
  return (
    <>
      <WrapperLayout>
        <h1 className="text-3xl font-bold text-blue-800 underline">HMTI UNTAD!</h1>
        <Sejarah />
        <VisiMisi />
        <ArtiLogo />
        <Achievement />
        <Documentation />
        <Faq />
      </WrapperLayout>
    </>
  );
}

export default App;
